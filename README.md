# Bijak's Portofolio

Short portfolio of Bijak Assidik Putu Riki — a student actively exploring the digital world, dreaming of studying abroad with a fully funded Computer Science scholarship.

## Structure

- `index.html` — the entire site. Projects are hardcoded as static HTML (`article.project-slide` inside `#projectTrack`), so they render with zero JavaScript data loading.
- `admin.html` — local dashboard (login + auto-encrypted drafts) to add/edit/delete projects and generate paste-ready card HTML. Keep it local, never deploy or link it.
- `images/` — static assets
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Edit projects (via dashboard)

1. Open `admin.html` locally, unlock, manage projects.
2. Click **Copy ALL cards HTML**, then in `index.html` replace everything between `PROJECTS-START` and `PROJECTS-END`.
3. Commit & push.

## Publish (GitHub Pages)

1. Edit `index.html` as needed.
2. Commit & push: `git add -A && git commit -m "Update portfolio" && git push`. Pages redeploys automatically.
