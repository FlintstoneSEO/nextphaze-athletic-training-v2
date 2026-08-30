# Booking and payment integration handoff

## Current status

The frontend collects all requested intake fields, validates Sunday and Saturday availability constraints, distinguishes group and one-on-one prices, records cash preference, requires the verified 12-hour cancellation acknowledgment, and prepares an email for deliberate user handoff.

It does **not** confirm a booking, store data, collect card details, send notifications, prevent conflicts, sync calendars or provide a business dashboard. Online card payment is visibly disabled until a secure provider is connected.

## Inputs required before provider selection

- Session durations and buffers
- Group capacity and whether capacity varies by time
- Exact location(s), venue rules and travel model
- Athlete eligibility/age rules
- Full cancellation, reschedule, refund, no-show, weather and late-arrival terms
- Waiver/release and privacy requirements
- Payment processor and fee/tax treatment
- Reminder timing and preferred email/SMS sender
- Google Calendar account and sync ownership

## Required provider capabilities

- Separate Group and One-on-One services at $30 and $60 per athlete
- Capacity-aware group slots and single-capacity one-on-one slots
- Availability rules and blocked dates
- Conflict/double-booking prevention
- Parent/guardian and athlete custom fields
- Card and cash-at-session payment statuses
- Cancellation/reschedule links and notifications
- Appointment reminders and history
- Mobile business management
- Google Calendar sync
- Data-processing terms appropriate for information about minors

## Integration mapping

Keep the existing field names as the frontend contract: `guardian-name`, `athlete-name`, `athlete-age`, `email`, `phone`, `sport`, `position`, `goals`, `training-type`, `preferred-date`, `preferred-time`, `payment`, and `policy`.

Replace the email handoff only after a sandbox end-to-end flow succeeds. Never add raw card fields; use the provider's hosted checkout or secure components. Confirmation UI must distinguish `Paid Online` from `Cash Due at Session` and must include date, time, location, contact, cancellation terms and preparation instructions.
