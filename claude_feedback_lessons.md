# Lessons Learned (Generalized)

## File handling

## Testing & tooling
- If a website repo only contains exported static files, serve the folder with a lightweight HTTP server first instead of assuming a Node/Vite/Next setup.

## Repo conventions
- If a matching GitHub repo already exists but the local folder is not a checkout, attach the folder to that remote before syncing so you preserve history and avoid pushing a duplicate repo structure.

## Communication & deliverables

## Risk & verification
- Before attempting a remote GCP deploy, verify that the active `gcloud` account has IAM access to the target project, especially when multiple credentialed accounts exist locally.
- If Cloud Run deployment succeeds but `allUsers` invoker binding is blocked by organization policy, use `--no-invoker-iam-check` on the service to make the URL public without relying on forbidden IAM members.
