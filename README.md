# MyBrowser — Chrome Extension

A lightweight Chrome Extension that lets you switch any website between **dark mode and light mode** with a single click, directly from your browser toolbar.

---

## Overview

MyBrowser inverts the color scheme of the active tab using CSS filter techniques. A smooth animated toggle button in the extension popup lets you turn the effect on or off instantly. Images and videos are counter-inverted so they always appear in their natural colors.

---

## Features

- One-click dark/light mode toggle for any website
- Smooth animated toggle button with 1-second transition
- Images, videos, and pictures are excluded from inversion so they render naturally
- Works across all HTTP and HTTPS websites
- Minimal and clean popup UI (344×188 px)
- No external dependencies — pure HTML, CSS, and JavaScript

---

## Project Structure

```
MyBrowser/
├── manifest.json   # Extension configuration and permissions
├── index.html      # Popup UI — the toggle interface shown in the toolbar
├── style.css       # Popup styles and toggle animations
├── test.js         # Toggle logic and chrome.tabs.executeScript calls
├── appon.js        # Injected script — applies dark mode filter to the page
└── appoff.js       # Injected script — removes dark mode filter from the page
```

---

## How It Works

1. The user clicks the MyBrowser icon in the Chrome toolbar — this opens `index.html` as the extension popup.
2. Clicking the toggle button in the popup runs `test.js`, which calls `chrome.tabs.executeScript()` to inject a script into the active tab.
3. **Dark mode ON** → `appon.js` is injected. It applies `filter: invert(1) hue-rotate(180deg)` to the `<html>` element, inverting all page colors. Images, videos, and pictures are then counter-inverted back to `invert(1) hue-rotate(180deg)` on themselves so they look natural.
4. **Dark mode OFF** → `appoff.js` is injected. It resets the filter on `<html>` and all media elements back to `invert(0) hue-rotate(0deg)`.

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Popup structure (`index.html`) |
| CSS3 | Popup styling, keyframe animations for toggle |
| JavaScript (ES6) | Toggle logic, Chrome API calls, DOM manipulation |
| Chrome Extensions API (Manifest V2) | `browser_action`, `tabs`, `executeScript` |

---

## Installation (Load Unpacked)

> Chrome Web Store publication requires a developer account. To test locally:

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `MyBrowser/` folder
5. The MyBrowser icon will appear in your Chrome toolbar

---

## Usage

1. Navigate to any website (e.g., `https://www.example.com`)
2. Click the **MyBrowser** icon in the toolbar
3. Click the toggle button to switch to dark mode
4. Click it again to switch back to light mode

---

## Permissions

| Permission | Reason |
|---|---|
| `tabs` | Required to execute scripts in the active tab |
| `http://*/*` | Allows the extension to run on all HTTP pages |
| `https://*/*` | Allows the extension to run on all HTTPS pages |

---

## CSS Filter Technique

```css
/* Dark mode ON — applied to <html> */
filter: invert(1) hue-rotate(180deg);

/* Counter-inversion — applied to img, video, picture */
filter: invert(1) hue-rotate(180deg);
```

`invert(1)` flips all colors. `hue-rotate(180deg)` corrects the hue shift caused by inversion, so blues stay blue and greens stay green rather than turning into unnatural complementary hues. Applying the same filter to media elements cancels out the inversion, restoring their original appearance.

---

## Animations

Three CSS `@keyframes` animations power the toggle:

| Animation | Effect |
|---|---|
| `movementright` | Slides the circle to the right (ON state) |
| `movementleft` | Slides the circle back to the left (OFF state) |
| `change` | Transitions toggle background from aqua → coral (ON) |
| `changeviceversa` | Transitions toggle background from coral → aqua (OFF) |

---

## Known Limitations

- Uses **Manifest V2** — Chrome is deprecating MV2 in favour of MV3; future versions should migrate to `chrome.scripting.executeScript()` (MV3 API)
- The toggle state is not persisted — refreshing the popup resets it to OFF
- Does not work on Chrome's internal pages (`chrome://`, `chrome-extension://`) due to browser security restrictions
- Some websites that use their own dark mode may show unexpected results

---

## Future Improvements

- Migrate to **Manifest V3**
- Persist toggle state using `chrome.storage.local` so state survives popup close/reopen
- Add per-site preferences (remember dark mode setting for specific domains)
- Add a keyboard shortcut to toggle dark mode without opening the popup
- Publish to the Chrome Web Store