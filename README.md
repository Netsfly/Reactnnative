# React Native Lesson Starter

This repository is a starter project for class exercises using Expo, React Native, Expo Router, and TypeScript.

## Prerequisites

- Node.js LTS
- npm
- Git
- Expo Go app on your phone (optional, but recommended)

## Clone and Run

```bash
git clone <repository-url>
cd lesson
npm install
npm run start
```

After the dev server starts:

- Scan the QR code in the terminal/browser with Expo Go (Android) or Camera (iOS).
- Or press `a` for Android emulator, `i` for iOS simulator (macOS only), `w` for web.

## Useful Commands

```bash
npm run start     # Start Expo dev server
npm run android   # Open on Android
npm run ios       # Open on iOS (macOS only)
npm run web       # Open in browser
npm run lint      # Run lint checks
```

## Project Structure

- `src/app`: File-based routes and screens (Expo Router)
- `src/components`: Reusable UI components
- `src/hooks`: Shared hooks
- `src/constants`: App constants (theme/colors)
- `src/assets`: Images and static assets

## Notes for Students

- Use `@/` imports for paths under `src` (for example: `@/components/themed-text`).
- Keep new screens inside `src/app` so Expo Router can detect routes.
- If Metro cache causes issues, run:

```bash
npx expo start -c
```
