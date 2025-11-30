# Daily News

A modern, clean, and minimal daily news website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, minimal design
- 📱 Fully responsive (mobile and desktop)
- ⚡ Fast loading with lazy loading
- 🎯 Smooth scrolling
- 📰 Sticky navigation bar
- 🌟 Featured news section
- 📄 Clean article content display

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Your Word Document Content

1. Open `src/components/ArticleContent.jsx`
2. Find the `articleContent` array (around line 5)
3. Replace the placeholder strings with your actual content
4. Each paragraph should be a separate string in the array

Example:
```javascript
const articleContent = [
  "Your first paragraph here...",
  "Your second paragraph here...",
  "Your third paragraph here...",
]
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Inter Font (Google Fonts)

## License

MIT

