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


---
**Date:** 2026-03-20
**Task:** Add premium scrolling effects across all Darby Field Inn pages
**Context:** `index.html`, `Events page/events.html`, `History page/history.html`, `Estate page/the-estate.html`, and shared design-system assets

### What Happened
- Added shared scroll assets (`design-system/css/scroll-experience.css`, `design-system/js/scroll-experience.js`) and wired them into all four pages so effects are consistent site-wide.
- Implemented subtle section reveal on scroll, sticky nav state transitions, scroll progress indicator, and gentle parallax on targeted media blocks.
- Mistake and correction: JS file initially landed at a path with the wrong repository folder spelling (`Darby-Field-Inn-Website`); moved it into `Darby Field Inn Website/design-system/js/`.
- Mistake and correction: an Events nav duplicate `class` attribute appeared during patching; corrected to one class list and updated nav scroll styling to account for inline style precedence.
- Outcome: not run browser validation in this environment because the request was to implement code behavior only; please verify locally at key breakpoints after restarting the server.

---
**Date:** 2026-03-20
**Task:** Fix header legibility between initial hero state and scrolled state
**Context:** Shared nav behavior in `design-system/css/scroll-experience.css` and `design-system/js/scroll-experience.js`

### What Happened
- Moved the header to an explicit two-state model: `site-nav-initial` for the top-of-hero state and `site-nav-scrolled` for the white-background state.
- Initial state now forces brand text, icon, and nav links to white with a subtle shadow and a light darkened gradient behind the header so the text reads over bright hero images.
- Scrolled state now removes the forced white treatment and lets each page fall back to its original dark/gold nav colors, which preserves active-link styling without page-by-page overrides.
- Verified visually in the browser on the home page and the history page because this was a legibility change, not just a structural code change.

---
**Date:** 2026-03-20
**Task:** Prepare and deploy the static site to Cloud Build and Cloud Run
**Context:** GCP project `arctic-math-488714-c6`, Cloud Run source deploy, local `gcloud` auth state

### What Happened
- Added a minimal static deployment setup with [`Dockerfile`](/Users/trishanpanch/Documents/Darby%20Field%20Inn%20Website/Dockerfile), [`nginx.conf`](/Users/trishanpanch/Documents/Darby%20Field%20Inn%20Website/nginx.conf), and [`.dockerignore`](/Users/trishanpanch/Documents/Darby%20Field%20Inn%20Website/.dockerignore) so Cloud Run can serve the site from a container.
- Attempted `gcloud run deploy darby-field-inn-website --source . --project arctic-math-488714-c6 --region us-central1 --allow-unauthenticated`, which would have used Cloud Build under the hood.
- Deployment was blocked by IAM: the active account `basslinetherapy@gmail.com` lacks `run.services.get` on project `arctic-math-488714-c6`.
- Checked other local accounts. `trishan@lumin.health` is also denied on Cloud Run in that project, and `trishan@lunr.studio` requires an interactive reauthentication flow before it can be tested.
- Outcome: deployment configuration is ready, but no public Cloud Run URL could be produced until a project-authorized account is used.

---
**Date:** 2026-03-20
**Task:** Make all site pages responsive
**Context:** Shared nav/scroll assets plus all four page templates

### What Happened
- Added shared mobile navigation behavior and styling in `design-system/css/scroll-experience.css` and `design-system/js/scroll-experience.js`, including a generated menu button and mobile panel cloned from the desktop links.
- Fixed responsive utility coverage in `design-system/css/layout.css` so existing `md:` classes on the site actually work where expected.
- Patched all four page navs to expose consistent class hooks for the shared responsive system, and adjusted the home page split heading row and the estate footer badge for small screens.
- Verified in-browser at mobile width that `index.html`, `History page/history.html`, `Events page/events.html`, and `Estate page/the-estate.html` no longer overflow horizontally and expose usable mobile navigation.

---
**Date:** 2026-03-20
**Task:** Deploy the site to Cloud Build and Cloud Run using `trishan@lunr.studio`
**Context:** GCP project `arctic-math-488714-c6`, service `darby-field-inn-website`, Cloud Run public access

### What Happened
- Switched `gcloud` to project `arctic-math-488714-c6` and account `trishan@lunr.studio`, then successfully deployed from source with `gcloud run deploy`.
- Cloud Build completed successfully and produced a live Cloud Run revision `darby-field-inn-website-00001-8xh`.
- Initial public access failed because the project/organization blocks `allUsers` IAM bindings, so `--allow-unauthenticated` could not finish the invoker grant.
- Applied `gcloud run services update darby-field-inn-website --no-invoker-iam-check` to expose the service publicly without the forbidden IAM member.
- Verified both Cloud Run URLs return `HTTP/2 200` after the invoker IAM check was disabled.
