# Page specifications

## Global system

- Header: logo, descriptive navigation, high-contrast booking action, mobile disclosure menu.
- Footer: tagline, verified contact, navigation, 12-hour cancellation note, no unverified address.
- Visual system: Championship Editorial; warm-white reading fields, near-black anchors, controlled metallic gold, square geometry, thin rules, phase-line motif.
- Accessibility: skip link, semantic landmarks, one H1 per page, keyboard menu, visible focus, 44px controls, reduced-motion support, no information conveyed by color alone.
- Performance: no framework hydration, local optimized images with dimensions, lazy load below-fold media, system-font stack, no third-party embeds.
- SEO: unique metadata, canonical paths, internal links, Organization and Person JSON-LD only from verified visible facts; no LocalBusiness, ratings, location, or service area.

## `/` — Home

- Objective: establish the offer and motivate booking without becoming a résumé.
- H1: Athlete development for what comes next.
- Search intent: athletic training, speed/agility training, wide receiver training (not localized).
- Sequence: split hero → credibility ledger → development lanes → coach feature → collegiate totals → two training formats → philosophy → EMU performance feature → linked media → availability/booking → contact.
- Primary media/LCP: supplied Ironmen action shot, width/height reserved, eager-loaded.
- Proof: verified career strip and explicitly labeled combined collegiate totals.
- Conversion: Book a Session in hero and final availability block only.
- Acceptance: price visible without navigation; Carrington's relevance clear; no fabricated claims; primary action reaches booking.

## `/about/` — About

- Objective: connect Carrington's playing progression with how he approaches athlete development.
- H1: Experience the game. Understand the work.
- Search intent: Carrington Thompson trainer / NextPhaze coach.
- Sequence: portrait-led intro → career timeline → 2016 season spread → Ironmen chapter → philosophy/application → training link.
- Media: supplied portrait; action image below fold.
- Schema: verified Person data only.
- Acceptance: timeline labels sources; AFL/IFL claims absent; playing proof supports—not replaces—coaching purpose.

## `/training/` — Training

- Objective: help a parent match needs to training focus and format.
- H1: Train with purpose.
- Search intent: speed, agility, wide receiver, sport-specific athletic training.
- Sequence: opening → five development lanes → what a focused session considers → group/one-on-one comparison → sports served → current availability → booking.
- Content constraint: no medical, rehabilitation, injury-prevention, nutrition, credential, or guaranteed-result claims.
- Acceptance: exact $30/$60 prices; no durations/age bands/capacity invented; format comparison remains scannable at 320px.

## `/booking/` — Booking request

- Objective: prepare a complete request while being transparent that live scheduling/payment is not connected.
- H1: Request your training session.
- Form order: choose service and see price → parent/guardian and athlete details → sport/position/goals → preferred day/time → payment preference → 12-hour policy acknowledgment → review/request handoff.
- Fields: parent/guardian name, athlete name, athlete age, email, phone, sport, position, goals, training type, date, time, payment choice, policy acceptance.
- States: validation errors, disabled/pending online payment explanation, cash selection, generated email handoff, direct call/email fallback.
- Privacy: form values remain in the browser and are passed only when the user intentionally opens their email client; no card fields.
- Acceptance: no claim of confirmed slot/payment; unavailable Sundays and past dates blocked client-side; business-system integration status is explicit.

## `/media/` — Media and sources

- Objective: make verified public coverage easy to inspect without republishing copyrighted media.
- H1: The journey, on record.
- Sequence: editorial intro → official WMU sources → Ironmen championship/feature coverage → media-rights notice → request approved originals.
- Media behavior: outbound source cards only; no hotlinked images or unverifiable video embeds.
- Acceptance: publishers and creators listed where identified; external links have clear labels; no source presented as an endorsement.

## `/contact/` — Contact

- Objective: provide verified direct contact and availability when booking integration is unavailable.
- H1: Start the conversation.
- Sequence: call/email actions → availability → what to include → location-status note → booking link.
- Acceptance: phone and email are clickable; location is not guessed; pricing and cancellation remain consistent.

## Metadata

| Route | Title | Meta description |
| --- | --- | --- |
| `/` | NextPhaze Athletic Training \| Speed, Agility & WR Training | Build speed, footwork, agility, confidence and position-specific skill with NextPhaze Athletic Training, led by former Western Michigan WR Carrington Thompson. |
| `/about/` | About Carrington Thompson \| NextPhaze Athletic Training | Follow Carrington Thompson's path from Northwood and Western Michigan #15 to championship indoor football and athlete development. |
| `/training/` | Athletic Training Programs \| NextPhaze Athletic Training | Explore group and one-on-one training for speed, footwork, agility, wide receiver skill, sport-specific movement and conditioning. |
| `/booking/` | Request a Training Session \| NextPhaze Athletic Training | Choose group or one-on-one NextPhaze training, review current availability and prepare a session request for your athlete. |
| `/media/` | Carrington Thompson Media & Career Sources \| NextPhaze | Explore official Western Michigan and West Michigan Ironmen coverage documenting Carrington Thompson's athletic journey. |
| `/contact/` | Contact NextPhaze Athletic Training | Contact Carrington Thompson about NextPhaze group or one-on-one athletic training and current scheduling availability. |
