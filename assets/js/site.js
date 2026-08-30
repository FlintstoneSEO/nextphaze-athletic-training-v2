document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
if (menuButton && menu) {
  const narrowNavigation = matchMedia("(max-width: 49.999rem)");
  menu.hidden = narrowNavigation.matches;
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });
  narrowNavigation.addEventListener("change", (event) => {
    menu.hidden = event.matches;
    menuButton.setAttribute("aria-expanded", "false");
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && narrowNavigation.matches) {
      menu.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

for (const year of document.querySelectorAll("[data-year]")) year.textContent = new Date().getFullYear();

const bookingForm = document.querySelector("[data-booking-form]");
if (bookingForm) {
  const date = bookingForm.elements["preferred-date"];
  const time = bookingForm.elements["preferred-time"];
  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  date.min = localToday.toISOString().slice(0, 10);

  const feedback = document.querySelector("[data-form-feedback]");
  const handoff = document.querySelector("[data-booking-handoff]");
  const emailLink = document.querySelector("[data-email-request]");

  const validateRequestedTime = () => {
    const chosen = new Date(`${date.value}T12:00:00`);
    if (chosen.getDay() === 0) {
      date.setCustomValidity("Sunday availability has not been offered. Choose Monday through Saturday.");
      time.setCustomValidity("");
    } else {
      date.setCustomValidity("");
      if (chosen.getDay() === 6 && time.value && (time.value < "09:00" || time.value > "12:00")) {
        time.setCustomValidity("Saturday requests must be between 9:00 AM and 12:00 PM.");
      } else {
        time.setCustomValidity("");
      }
    }
  };
  date.addEventListener("change", validateRequestedTime);
  time.addEventListener("change", validateRequestedTime);

  const requestedType = new URLSearchParams(location.search).get("type");
  const typeValue = requestedType === "group"
    ? "Group training — $30 per athlete"
    : requestedType === "one-on-one"
      ? "One-on-one training — $60 per athlete"
      : null;
  if (typeValue) {
    const typeInput = [...bookingForm.elements["training-type"]].find((input) => input.value === typeValue);
    if (typeInput) typeInput.checked = true;
  }

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";
    if (!bookingForm.reportValidity()) {
      feedback.textContent = "Review the highlighted fields before preparing your request.";
      return;
    }
    const values = new FormData(bookingForm);
    const lines = [
      "NextPhaze training request",
      "",
      `Training: ${values.get("training-type")}`,
      `Parent/guardian: ${values.get("guardian-name")}`,
      `Athlete: ${values.get("athlete-name")}`,
      `Athlete age: ${values.get("athlete-age")}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone")}`,
      `Sport: ${values.get("sport") || "Not provided"}`,
      `Position: ${values.get("position") || "Not provided"}`,
      `Goals: ${values.get("goals") || "Not provided"}`,
      `Preferred date: ${values.get("preferred-date")}`,
      `Preferred time: ${values.get("preferred-time")}`,
      `Payment preference: ${values.get("payment")}`,
      "",
      "I acknowledge the 12-hour cancellation policy and understand this request is not confirmed until Carrington responds."
    ];
    emailLink.href = `mailto:carrington.j.Thompson15@gmail.com?subject=${encodeURIComponent("NextPhaze training request")}&body=${encodeURIComponent(lines.join("\n"))}`;
    handoff.hidden = false;
    handoff.focus();
    feedback.textContent = "Your request is ready. Send it through your email app or call Carrington.";
  });
}
