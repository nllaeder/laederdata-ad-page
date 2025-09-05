AI Pair Programmer Prompt: Static Web Page Generation

Goal: Generate a complete, self-contained static HTML and CSS website, based on the provided visual screenshot of a Framer template. The output should be production-ready for deployment to a static site host like Cloudflare Pages.

Output Structure:

A single index.html file.

A single style.css file within a css/ directory.

Instructions for placeholder images (no image generation needed, just placeholder file names).

Visual Reference (Implied): The Framer template screenshot previously provided in this conversation. Focus on replicating the visual layout, typography, color scheme, and section structure.

Key Requirements & Constraints:

Semantic HTML5: Use appropriate HTML5 semantic tags (<header>, <nav>, <section>, <footer>, <h1>, <h2>, <p>, <a>, <ul>, <li>, <blockquote>, etc.) for structure.

External CSS: All styling must be in a separate file named style.css linked from index.html. No inline styles.

Responsiveness: Implement basic responsive design for mobile (e.g., stacking elements, adjusting font sizes, hiding navigation if necessary) using CSS media queries for screens up to 768px width.

Colors:

Primary Background: Very dark gray/black (#0d0d0d or similar).

Text Color (General): Off-white/light gray (#f0f0f0, #b0b0b0).

Accent/Highlight Color: A vibrant, but not neon, green (e.g., #4CAF50).

Card Background: Slightly lighter dark gray than main background (e.g., #1a1a1a).

Header Background: Semi-transparent dark gray.

Typography:

Use Google Font "Inter" for all text. Link it in the HTML <head>.

Mimic the font sizes and weights from the screenshot as closely as possible for headings, body text, taglines, and buttons.

Ensure good contrast and readability.

Layout:

Header: Fixed position at the top, containing a logo (left) and navigation links (right).

Hero Section: Full viewport height, vertically centered content, prominent main heading with a highlighted word, subtitle, and a primary call-to-action button. Include a subtle scroll indicator at the bottom center. Background image placeholder with a dark overlay.

Quote Section: Centered quote with author and title. Tagline above.

Features Section: Centered main heading, subtitle, and a 3-column grid of "feature cards."

Feature Cards: Each card should have an icon placeholder, a bold title, and descriptive text. Cards should be dark gray with a subtle border, and subtly elevate/change border on hover.

Footer: Simple copyright text, centered.

Placeholders:

For images, use img tags with src pointing to images/logo-white.png, images/hero-bg.jpg, images/icon-realtime.png, images/icon-measurable.png, images/icon-seamless.png.

For text, use the exact text content provided in the screenshot for headings, taglines, subtitles, quotes, and feature descriptions.

For links (navigation, buttons), use # or mailto:your-email@example.com as appropriate.

No JavaScript: The page should be purely static HTML/CSS. No interactive elements beyond basic link hovers and button clicks.

Accessibility: Basic accessibility considerations like alt text for images should be included.

File Naming: index.html and css/style.css.

Specific Instructions for Elements:

Logo: Assume the logo image (logo-white.png) is a white version, or apply filter: brightness(0) invert(1); in CSS if a color version is expected to be turned white.

Hero Background: The hero-bg.jpg should appear behind the content with a dark, semi-transparent overlay to ensure text readability.

Scroll Indicator: A simple circular element at the bottom of the hero section with a small dot inside.

Call to Action Button: Green background, dark text. On hover, invert colors (transparent background, green text).

Highlighted Words: For "With AI" in the hero and "automate," "workflow," "real solutions" in the quote, use the accent green color.
