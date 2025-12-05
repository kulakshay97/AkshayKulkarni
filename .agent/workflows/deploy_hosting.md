---
description: How to host the website for free using GitHub Pages or Netlify
---

# Option 1: GitHub Pages (Recommended for Developers)

1.  **Initialize Git (if not already done):**
    Open your terminal in the project folder and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a GitHub Repository:**
    - Go to [GitHub.com](https://github.com) and create a new repository (e.g., `my-personal-website`).
    - Do *not* initialize with README, .gitignore, or license (since you have local files).

3.  **Push to GitHub:**
    Follow the instructions shown on GitHub to push your existing repository:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

4.  **Enable GitHub Pages:**
    - Go to your repository **Settings** > **Pages**.
    - Under **Source**, select `main` branch and `/ (root)` folder.
    - Click **Save**.
    - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

# Option 2: Netlify (Easiest Drag-and-Drop)

1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop your entire project folder (`Personal Website`) into the browser window.
3.  Netlify will upload and host it instantly.
4.  You can claim the site to assign a custom name (e.g., `akshay-portfolio.netlify.app`).

# Option 3: Vercel

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in your project folder.
3.  Follow the prompts to deploy.
