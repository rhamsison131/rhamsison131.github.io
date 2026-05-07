# Rham Sison — Portfolio

Personal graphic design portfolio. Built with **TypeScript** and **HTML/CSS**, no frameworks or dependencies.

## 🚀 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**
4. Select branch: `main` / folder: `/ (root)` if you're hosting from `dist/`, or configure accordingly
5. Your site will be live at `https://yourusername.github.io/your-repo-name`

> **Tip:** If you want GitHub Pages to serve from the `dist/` folder, move the contents of `dist/` to the repo root, or use the `docs/` folder method.

## 📁 Project Structure

```
portfolio/
├── src/                  # TypeScript source files
│   ├── main.ts           # Entry point
│   ├── data.ts           # All your personal data (edit this!)
│   ├── canvas.ts         # Generative canvas artwork
│   ├── animations.ts     # Cursor, scroll, nav animations
│   └── renderer.ts       # DOM rendering from data
├── dist/                 # Compiled output (deploy this folder)
│   ├── index.html
│   ├── css/style.css
│   └── js/               # Compiled JS from TypeScript
├── package.json
└── tsconfig.json
```

## ✏️ Customizing Your Portfolio

All content is in **`src/data.ts`** — edit this file to update:

- Your name, role, bio
- Projects (add real ones when ready!)
- Services
- Contact info and social links
- Stats

After editing, recompile with:

```bash
npm install
npx tsc
```

Then push the updated `dist/` folder to GitHub.

## 🛠 Local Development

```bash
npm install
npx tsc --watch   # Watch for TypeScript changes
# Open dist/index.html in your browser
```

## 📌 GitHub Pages Quick Setup

The simplest way:

1. Rename `dist/` to `docs/`
2. Push to GitHub
3. In repo Settings → Pages → Source: `main` branch, `/docs` folder
4. Done!

---

Made with care by Rham Sison · Cebu City, Philippines
