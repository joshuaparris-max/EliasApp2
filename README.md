# EliasApp

A joyful learning and play app for Elias, built with React and Vite. The app focuses on garbage trucks, construction machines, cars, tools, spinning things, building, fixing, and safe play.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Add the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial toddler learning app for Elias"
git branch -M main
git remote add origin https://github.com/joshualparris/EliasApp.git
git push -u origin main
```

## Media files

Add files under `public/media`:

- `public/media/images/`
- `public/media/sounds/`
- `public/media/videos/`

Missing media shows safe emoji placeholders instead of breaking the app.

## Add a new vehicle, tool, video, or game

- Add vehicles in `src/data/vehicles.js`
- Add tools in `src/data/tools.js`
- Add construction machines in `src/data/constructionMachines.js`
- Add garbage trucks in `src/data/garbageTrucks.js`
- Add videos in `src/data/videos.js`
- Add mini-games in `src/data/games.js`
- Add pages in `src/pages/` and register them in `src/App.jsx`

## Child safety

- No ads
- No external links shown to the child UI
- No autoplay
- No comments
- No tracking
- Videos are parent-controlled placeholders until a parent adds content
