# Thilaknath Ashok Kumar - Personal Website

A minimalist, professional portfolio and blog built with pure HTML and CSS.

## Design Philosophy

This site follows an "Academic Minimalist" aesthetic:
- **Typography**: Monospace headers (Courier New) + Serif body (Georgia)
- **Colors**: Warm white background (#fffff8), near-black text (#111111)
- **Layout**: Single column, 750px max-width, brutally simple
- **No JavaScript**: Pure HTML/CSS for maximum performance and accessibility
- **File size**: ~10KB total page weight

## Structure

```
/
├── index.html          # Home page
├── about.html          # About page
├── blog.html           # Blog listing
├── style.css           # Global stylesheet
└── blog/
    ├── llm-security-review.html
    ├── launch-github-site.html
    ├── florence-food.html
    ├── liver-health.html
    ├── graph-search.html
    ├── society.html
    └── memory-forensics.html
```

## Local Development

Start a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment to GitHub Pages

This site is deployed to `https://thilaknath.github.io/bio/`

To deploy changes:

```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Pages will automatically serve the site from the `main` branch.

## Features

- Blog with 7 posts spanning 2012-2024
- Professional bio and experience
- External links to GitHub, LinkedIn
- Fully responsive design
- SEO optimized with meta tags
- Zero build step required

## Legacy

The previous version used Docusaurus. If you need to reference it, check the git history or the archived `docusaurus.config.js` file.