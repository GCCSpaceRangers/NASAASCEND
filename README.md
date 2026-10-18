# Space Rangers — NASA ASCEND (GCC) Team Website

Plain HTML, CSS and JavaScript. No build step, no frameworks, no accounts. If you can open a file in a text editor, you can edit this site.

## Project layout

```
index.html          Home page
team.html           Our Team
payload.html        Our Payload
progress.html       Weekly progress log
calibration.html    Sensor calibration equations
flight.html         Flight day
results.html        Results
css/styles.css      All styling (colors and fonts are at the top, in :root)
js/main.js          Navigation links + the header and footer shared by every page
assets/images/      Logo and photos
scripts/            One-time helper scripts
```

## Run it on your computer

Open the folder in VS Code and use the **Live Server** extension (right-click `index.html` → *Open with Live Server*), or from a terminal in this folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000. Double-clicking `index.html` also works.

## How to make common changes

**Add a weekly progress entry** — open `progress.html`, find the "Coming Soon" or "Upcoming" entry for the week, and fill it in. To start from scratch, copy a whole `<div class="entry">…</div>` block and edit the text. Photos go in `assets/images/progress/week-N/` and are added like this:

```html
<p class="eyebrow">Photos</p>
<div class="photos">
  <img alt="Describe the photo" src="assets/images/progress/week-8/photo-1.jpg" loading="lazy">
</div>
```

**Change a status badge** — use `complete`, `active` or `upcoming` in the badge class, e.g. `<span class="badge complete">Complete</span>`.

**Edit a team member** — `team.html` (full profile) and `index.html` (home page strip). Drop their photo in `assets/images/team/`.

**Add a new page** — copy an existing page, change the `<title>` and `<body data-page="...">`, then add one line to the `NAV` list in `js/main.js`. The link appears on every page.

**Change colors or fonts** — edit the `:root { … }` block at the top of `css/styles.css`.

**Edit the header or footer** — `js/main.js` (one place, appears on every page).

## Working together on GitHub

1. **Everyone gets access.** Repo → *Settings → Collaborators* (or create a GitHub Organization for the team and add members there).
2. **Don't edit `main` directly.** Make a branch, change files, open a Pull Request, and have one teammate look at it before merging. Smallest version of this: on github.com, open a file, click the pencil, and choose *"Create a new branch and start a pull request"*.
3. **Protect `main` (recommended).** *Settings → Branches → Add rule* for `main` → require a pull request before merging. This stops accidental breakage of the live site.
4. **Keep changes small.** One week's progress entry or one fix per pull request makes review quick.
5. **Check before you merge.** Open the changed page in Live Server and click through it, including on a narrow window (phone size).

## Hosting on GitHub Pages

*Settings → Pages → Build and deployment → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)` → Save.*

The site is published at `https://<org-or-username>.github.io/<repo-name>/` within a minute or two of every merge to `main`. All links in the site are relative, so it works from that sub-path with no changes.

To use the custom domain (gccazascendspacerangers.com), you first need to control its DNS. It is likely registered through Airo, so check who owns it. If you can control it, add it under *Settings → Pages → Custom domain* and follow GitHub's DNS instructions.

## Notes

- Fonts (Inter and Space Grotesk) load from Google Fonts. Everything else is in this repo.
- Dates and statuses in the text (launch date, "In Progress" labels) are hand-written. Update them as the semester moves along. The home page and flight page currently list different launch dates (Nov 14 vs Dec 5), so confirm the correct one.
