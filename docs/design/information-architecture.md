# Information architecture

Status: approved for implementation by the agent under the prompt's autonomous-run clause. This is proposed, not client-approved.

## Sitemap and purpose

| Route | Purpose | Primary user intent | Primary action |
| --- | --- | --- | --- |
| `/` | Establish relevance, trust, offer clarity, and price | “Can this help my athlete, and why should I trust Carrington?” | Book a Session |
| `/about/` | Explain Carrington's progression and coaching philosophy | “Who is the coach?” | Train with Coach Carrington |
| `/training/` | Explain training focus and compare formats | “What will my athlete work on?” | Choose Training |
| `/booking/` | Collect a complete booking request without pretending live fulfillment | “How do I request a time?” | Prepare Booking Request |
| `/media/` | Provide attributed external proof and safe media links | “Can I verify the story?” | View Source Coverage |
| `/contact/` | Offer low-friction direct contact and verified availability | “How can I reach Carrington?” | Call, email, or book |

## Navigation model

- Primary: Training, About, Media, Contact
- Persistent conversion action: Book a Session
- Logo returns home.
- Mobile uses a native button-controlled navigation panel; the booking action remains visually distinct without becoming a floating obstruction.

## Conversion paths

1. Home → training outcome → program/price → booking request.
2. Home → Carrington proof → About → booking request.
3. Search/landing on Training → compare formats → booking request.
4. Media/source visitor → verified story → About or booking.
5. Any route → Contact → phone/email fallback.

## Internal-link map

- Home links to all core routes.
- About links to Media for source coverage and Training for application of experience.
- Training links to About for credibility and Booking for conversion.
- Booking links to Training for offer details and Contact for fallback.
- Media links to About for narrative context and Booking for conversion.
- Contact links to Booking and Training.
- Footer exposes every route; there are no orphan pages.

## Mobile considerations

- Navigation labels remain full words.
- The primary action is reachable in the menu and page flow; no persistent bottom bar reduces the viewport.
- Home order at narrow widths is value → proof → training → coach → price → philosophy → performance → media → availability.

## Content gaps

Location-dependent SEO pages are prohibited until the actual city/service area is confirmed. No separate pages are created for individual sports because the available copy would be thin and duplicative.
