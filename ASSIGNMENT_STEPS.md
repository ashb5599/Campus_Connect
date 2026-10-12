# Working with Git — completion checklist

## 1. Initialize Git
```bash
git init
git branch -M main
git status
```

## 2. Add `.gitignore`
The project already includes `.gitignore`. Confirm it exists before staging files.

## 3. First commit
```bash
git add .
git commit -m "Initial commit: Campus Connect application"
```

## 4. Work with branches
```bash
git switch -c feature/member-form
```
Make a small improvement (for example, edit a heading in `public/index.html`), then:
```bash
git add .
git commit -m "Improve member form"
git switch main
git merge feature/member-form
```

## 5. Push to GitHub
Create an empty GitHub repository named `campus-connect` in your own account. Do not initialize it with a README if you already have this local README.
```bash
git remote add origin https://github.com/YOUR-USERNAME/campus-connect.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username.

## 6. Deploy
Use a deployment platform that supports Node.js/Express. Configure the project using the platform's current Node.js instructions, then test the public URL and `/api/health` endpoint. Deployment configuration can vary by provider, so follow the provider's current setup guidance.

## 7. Evidence screenshots
Capture:
- project files in VS Code
- local app in browser
- `git status`
- commit history (`git log --oneline`)
- branch list (`git branch`)
- successful merge output
- GitHub repository page
- deployed app and health endpoint

## Before submission
- [ ] Replace any sample values with your own details if needed.
- [ ] Verify all Git commands ran successfully.
- [ ] Add your actual GitHub URL and deployed URL to your report.
- [ ] Do not claim deployment succeeded until you have tested the live URL.
