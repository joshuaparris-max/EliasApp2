# EliasApp

EliasApp is a bright, toddler-friendly React/Vite app for Elias. It is built around garbage trucks, construction machines, cars, trucks, wheels, tools, fixing, building, parent-approved videos, and simple tap games.

The app is designed to be calm, joyful, mobile-first, and safe for young children:

- no login
- no ads
- no analytics or tracking
- no comments or user-generated content
- no autoplay videos
- no random video feeds
- no child-facing external links

Repository: https://github.com/joshuaparris-max/EliasApp2

## Run Locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Deploy to Vercel

1. Push the repo to GitHub: https://github.com/joshuaparris-max/EliasApp2
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repo.
4. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

## Add Images

Put image files in:

```text
public/media/images/
```

Then update the matching `image` field in the data files, for example:

```js
image: '/media/images/fire-truck.jpg'
```

If an image is missing, EliasApp shows a polished emoji/CSS placeholder instead of a broken image.

## Adding photos for Elias

Put screwdriver photos in:

```text
public/media/images/screwdrivers/
```

Recommended filenames:

- `phillips.jpg`
- `flathead.jpg`
- `stubby.jpg`
- `long.jpg`
- `toy-screwdriver.jpg`
- `electric-screwdriver.jpg`

Recommended image size: around 1200px wide or smaller.

Use parent-approved photos only. Avoid random copyrighted images, avoid external hotlinks, and keep all videos parent-approved. If a screwdriver photo is missing, EliasApp uses the local SVG fallback illustrations in the same folder.

## Add Sounds

Put sound files in:

```text
public/media/sounds/
```

Then add or update the `sound` field in the matching data item. Sound is off by default and only plays after the parent enables it with the sound toggle.

The current app also uses short generated tones for some interactions, so it still works if no sound files are present.

## Add Parent-Approved Videos

Video data lives in:

```text
src/data/videos.js
```

Each video has:

```js
{
  id: 'garbage-day',
  title: 'Garbage day trucks',
  category: 'Garbage trucks',
  description: 'A safe parent-approved video.',
  thumbnail: '/media/images/video-garbage.jpg',
  embedUrl: ''
}
```

Only add videos you have watched and approved. The app does not autoplay videos and does not show random feeds or recommendations.

## Parent Settings and Achievements

EliasApp has a simple parent settings panel inside the app.

Settings include:

- sound on/off
- reduced motion
- calm mode
- show/hide Watch & Learn
- show/hide video cards
- reset achievements

Achievements are local-only and stored in `localStorage`. There is no login, account, server sync, analytics, or tracking.

Current achievements:

- First Fix
- Wheel Counter
- Bin Helper
- Road Builder
- Screwdriver Star
- Tool Explorer

## PWA Install Support

EliasApp includes:

- `public/manifest.webmanifest`
- `public/icons/eliasapp-icon.svg`
- `public/sw.js`
- mobile app metadata in `index.html`

The service worker caches only the app shell for basic offline loading. It does not cache random feeds or external content.

## Add a Vehicle, Tool, Machine, or Game

Edit the relevant data file:

- `src/data/vehicles.js`
- `src/data/tools.js`
- `src/data/constructionMachines.js`
- `src/data/garbageTrucks.js`
- `src/data/spinners.js`
- `src/data/videos.js`
- `src/data/games.js`
- `src/data/screwdrivers.js`

Each item should include:

- `id`
- `title`
- `emoji`
- `description`
- `fact`
- `image`
- `sound`
- `category`

For home dashboard cards, edit:

```text
src/data/sections.js
```

## Project Structure

```text
src/
  App.jsx
  components/
    Layout.jsx
    HomeCard.jsx
    SectionPage.jsx
    BackButton.jsx
    BigButton.jsx
    MuteToggle.jsx
    FeedbackBubble.jsx
    VehicleCard.jsx
    ToolCard.jsx
    MachineCard.jsx
    VideoCard.jsx
    InteractiveSpinner.jsx
    MiniGameShell.jsx
    GameCard.jsx
  data/
    sections.js
    vehicles.js
    tools.js
    constructionMachines.js
    garbageTrucks.js
    spinners.js
    videos.js
    games.js
    screwdrivers.js
```

## Child-Safety Notes

- Keep videos parent-reviewed.
- Keep real-world tool play supervised.
- Avoid adding external links to the child UI.
- Avoid flashing animations or loud surprise sounds.
- Test on a phone or tablet before handing it to a child.
