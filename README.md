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

## Add a Vehicle, Tool, Machine, or Game

Edit the relevant data file:

- `src/data/vehicles.js`
- `src/data/tools.js`
- `src/data/constructionMachines.js`
- `src/data/garbageTrucks.js`
- `src/data/spinners.js`
- `src/data/videos.js`
- `src/data/games.js`

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
```

## Child-Safety Notes

- Keep videos parent-reviewed.
- Keep real-world tool play supervised.
- Avoid adding external links to the child UI.
- Avoid flashing animations or loud surprise sounds.
- Test on a phone or tablet before handing it to a child.
