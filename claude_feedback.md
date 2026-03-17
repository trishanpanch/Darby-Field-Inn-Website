# Priority Rules (Read First)
- (none yet)

---
**Date:** 2026-03-06  
**Task:** Run the website locally and provide a working link  
**Context:** Static site in `stitch_the_darby_estate_landing_page/`; served with `python3 -m http.server 4173`

### What Happened
- The expected feedback files were missing, so they had to be bootstrapped before continuing.
- Repo inspection showed this is a static HTML export, not a Node app, so the fastest correct path was a simple local HTTP server instead of looking for `npm` scripts.
- Verified the served page with `curl -I http://127.0.0.1:4173/code.html` and confirmed `200 OK`.

---
**Date:** 2026-03-06  
**Task:** Sync the website changes to GitHub  
**Context:** Existing GitHub repo `trishan-lunr/Darby-Field-Inn-Website`; local folder was not a git checkout

### What Happened
- The local workspace was not a Git repository, but a matching GitHub repository already existed with tracked root files.
- Safe sync required initializing git locally, attaching the existing remote, fetching `origin/master`, and checking it out before committing.
- The user change had been made in an untracked export folder, so the equivalent hero text readability update had to be copied into tracked `code.html` and `index.html`.
- Staged only the two intended tracked files to avoid committing `.DS_Store`, feedback files, and the export folder by accident.
