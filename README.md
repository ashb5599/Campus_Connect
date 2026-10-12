# Campus Connect

A simple campus connection and travel buddy web application built with Node.js and Express. This project is prepared as a starter for a practical assignment on Git and GitHub workflows.

## Features
- Campus club member form
- Travel buddy request form
- Express JSON endpoints
- Responsive HTML/CSS/JavaScript frontend
- `.gitignore` for dependencies, logs and environment files

## Requirements
- Node.js 18 or later
- npm
- Git

## Run locally
1. Open this folder in a terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser.
5. Check http://localhost:3000/api/health to verify the API.

## API endpoints
- `GET /api/health`
- `GET /api/members`
- `POST /api/members`
- `GET /api/travel-buddies`
- `POST /api/travel-buddies`

## Git workflow assignment
Suggested evidence to capture:
1. `git init` and `git status`
2. `.gitignore` visible in the project
3. Initial commit and later commits
4. A feature branch and a merge into `main`
5. `git push -u origin main` and the GitHub repository page
6. A working browser screenshot and deployment URL

## Important limitation
This is an educational starter. Submitted form entries are kept in server memory and reset when the server restarts. It does not use a database or user authentication.
