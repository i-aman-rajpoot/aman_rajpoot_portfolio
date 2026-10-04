# Aman Rajpoot — Portfolio Website

A responsive dark-premium portfolio built with React + Vite and prepared for Netlify hosting.

## Included
- Home / introduction
- About
- Skills
- Project cards for analytics, automation, ETL, AI, and web apps
- Resume download button
- LinkedIn, GitHub, Instagram, YouTube, WhatsApp, and email links
- Buy Me a Coffee support section with QR code
- Portrait avatar favicon and brand mark
- Netlify Forms contact form and success page
- Responsive mobile navigation
- Netlify build configuration

## 1. Run locally

Install Node.js (LTS), then from this folder:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## 2. Personalize the website

Edit the `PROFILE` object in `src/App.jsx` to update your email and social account links.

Update the `PROJECTS` array with your real demo URLs and GitHub repository URLs. Empty URLs are deliberately shown as disabled links.

Add your résumé PDF to `public/resume.pdf`. The download buttons already point to `/resume.pdf`.

Update the About and Experience copy if you want to include exact employer names, job dates, education, or measurable achievements.

## 3. Push to GitHub

Create an empty repository on GitHub, then run:

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the repository URL with your actual repository URL.

## 4. Deploy on Netlify

1. Sign in at https://app.netlify.com/.
2. Choose **Add new site** → **Import an existing project**.
3. Connect GitHub and select your portfolio repository.
4. Set build command to `npm run build`.
5. Set publish directory to `dist`.
6. Deploy the site.

`netlify.toml` already defines these settings. Future pushes to your connected branch trigger a new deployment.

## 5. Make the contact form work

The form uses Netlify Forms attributes and includes a hidden spam-trap field.

1. Deploy the website to Netlify.
2. In the Netlify site dashboard, open **Forms** and ensure form detection is enabled if the option is shown.
3. Trigger a new production deployment after enabling form detection, if requested.
4. Submit a test message from the deployed website.
5. Confirm that a `portfolio-contact` submission appears under Forms.
6. In site settings, find **Forms → Form notifications** (menu names can change) and add an email notification to your Gmail address.
7. Submit another test and check Gmail, including Spam.

**Important:** Netlify Forms stores form submissions; email notifications are a separate configuration. The frontend cannot guarantee Gmail delivery until notifications are configured and tested. Review your current Netlify plan's form-submission limits.

## 6. Local form testing limitation

The contact form is intended to be handled by Netlify's production form processing. It will not send email when running only on `npm run dev`. Test submissions on the deployed Netlify site, or use Netlify CLI local development if you need to test Netlify features locally.

## Project structure

```text
aman-netlify-portfolio/
├── public/
│   ├── Professional Portrait Avatar Badge.png
│   ├── Coffee Fuels Productivity Sticker Portrait.png
│   ├── buymeacoffee_QR.png
│   ├── robots.txt
│   ├── resume.pdf          # Add your own résumé
│   └── success.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
└── README.md
```

## Security & privacy notes

- Never put API keys, passwords, or private tokens in frontend code.
- Only publish a résumé and contact details you are comfortable making public.
- Consider a privacy notice and CAPTCHA/spam controls if spam becomes an issue.
- Test the form and email notification before sharing the site with recruiters.
