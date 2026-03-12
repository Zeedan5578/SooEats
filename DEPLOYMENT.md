# Deployment Guide

This guide covers deploying the Cafe4Good website to production.

## Pre-Deployment Checklist

- [ ] All tests passing (`npm run test:run`)
- [ ] Production build successful (`npm run build`)
- [ ] Environment variables configured
- [ ] Images optimized and in place
- [ ] Content reviewed and approved
- [ ] Accessibility tested
- [ ] Performance tested (Lighthouse)

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Future pushes to main branch will auto-deploy

#### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect GitHub repository
   - Configure build settings
   - Deploy

### Option 3: Self-Hosted

#### Requirements:
- Node.js 18+
- PM2 or similar process manager

#### Steps:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use PM2 for production**
   ```bash
   npm install -g pm2
   pm2 start npm --name "cafe-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx (optional)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

For production, set environment variables in your hosting platform.

## Post-Deployment

### Verify Deployment

1. **Check all pages load**
   - Home: `/`
   - Menu: `/menu`
   - Catering: `/catering`
   - Meal Plan: `/meal-plan`
   - SooEats: `/soo-eats`
   - Nutrition: `/nutrition`
   - About: `/about`, `/about/mission`, `/about/vision`, `/about/story`
   - Contact: `/contact`

2. **Test functionality**
   - Menu carousel autoplay and navigation
   - Catering chat interface
   - Contact form validation and submission
   - Mobile responsiveness
   - Keyboard navigation

3. **Run Lighthouse audit**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit for Performance, Accessibility, SEO
   - Target: 90+ scores

### Monitoring

- Set up error tracking (Sentry, LogRocket)
- Monitor performance (Vercel Analytics, Google Analytics)
- Set up uptime monitoring

## Troubleshooting

### Build Fails

1. Check Node.js version (18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Images Not Loading

1. Verify images are in `/public` directory
2. Check image paths in components
3. Ensure Next.js Image component is used

### Styles Not Applied

1. Verify TailwindCSS is configured correctly
2. Check `globals.css` is imported in `layout.tsx`
3. Clear browser cache

## Rollback

If deployment fails:

**Vercel:**
- Go to Deployments
- Find previous working deployment
- Click "Promote to Production"

**Self-Hosted:**
```bash
git revert HEAD
npm run build
pm2 restart cafe-website
```

## Support

For deployment issues, contact the development team or refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
