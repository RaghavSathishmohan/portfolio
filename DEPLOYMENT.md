# Vercel Deployment Guide with IONOS Domain

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Make it public
4. Don't initialize with README (we already have one)

## Step 2: Push Your Code to GitHub

```bash
cd /Users/raghavsathishmohan/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/raghavmohan/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd /Users/raghavsathishmohan/portfolio
vercel --prod
```

### Option B: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"

## Step 4: Connect Your IONOS Domain

### In Vercel Dashboard:

1. Go to your project → Settings → Domains
2. Click "Add" and enter your IONOS domain (e.g., `raghavmohan.dev`)
3. Vercel will provide DNS configuration instructions

### Typical DNS Records to Add in IONOS:

**A Records:**
- Type: A
- Host: @
- Points to: 76.76.21.21

**CNAME Record:**
- Type: CNAME
- Host: www
- Points to: cname.vercel-dns.com

### In IONOS Dashboard:

1. Log in to your [IONOS Control Panel](https://login.ionos.com)
2. Go to Domains & SSL
3. Select your domain
4. Go to DNS settings
5. Add the records as specified by Vercel:
   - Add an A record pointing to Vercel's IP
   - Add a CNAME record for www subdomain
6. Save changes

## Step 5: SSL Certificate (Auto)

Vercel automatically provisions SSL certificates for your domain. This may take a few minutes after DNS propagation.

## Step 6: Verify Deployment

1. Visit your domain (e.g., `https://raghavmohan.dev`)
2. Check that the site loads correctly
3. Test the command palette (⌘K)
4. Verify all links work

## Troubleshooting

### DNS Propagation
DNS changes can take 24-48 hours to propagate globally. Be patient!

### SSL Issues
If SSL doesn't auto-provision:
1. Ensure DNS records are correctly configured
2. Wait 24 hours
3. Try removing and re-adding the domain in Vercel

### Build Failures
If the build fails:
1. Check `next.config.ts` has `output: 'export'`
2. Ensure `distDir: 'dist'` is set
3. Verify all dependencies are installed

## Additional Resources

- [Vercel Custom Domains Docs](https://vercel.com/docs/concepts/projects/custom-domains)
- [IONOS DNS Configuration](https://www.ionos.com/help/domains/configuring-your-ip-address/)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

---

Your portfolio will be live at your custom domain once DNS propagates!
