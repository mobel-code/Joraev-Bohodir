# Bakhodir Juraev — portfolio

Personal website of **Bakhodir Nurmakhamadovich Juraev**, PhD, oral & maxillofacial surgeon,
Head of the Department of Oral and Maxillofacial Surgery at CAMU International University.

Single page, three languages (O‘zbekcha · Русский · English), light/dark theme.
Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

```
index.html        page markup, SEO / Open Graph / JSON-LD
css/styles.css    all styles
js/content.js     ALL TEXT AND DATA — edit this file to change the site
js/main.js        rendering and interactions
assets/           portrait, favicon, social preview, clinical case images
```

## Editing content

Everything visible on the page lives in `js/content.js`:

- text is either a plain string or `{ uz: "...", ru: "...", en: "..." }`
- `publications` — articles, theses and talks (counters update automatically)
- `cases` — clinical cases: `before` / `after` images go in `assets/cases/`
- `contacts` — phone, Telegram, Facebook, Instagram (leave a value `""` to hide it)
- `**double asterisks**` make a phrase bold

After editing CSS or JS, bump the `?v=` number on the `<link>` / `<script>` tags in
`index.html` so browsers load the new files.

Clinical cases are published only with the patient's written consent and anonymised.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000.

## Publish

GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**.

---

made by [Nurmuhammadov.A](https://nurmuhammadov-azizbek.vercel.app)
