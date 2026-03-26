# Deployment Guide

## Quick Start Deployment

### Option 1: GitHub Pages (Recommended for GitHub)

```bash
# 1. Build the project
npm run build

# 2. Commit the 'out' directory
git add out/
git commit -m "Deploy portal"

# 3. Push to GitHub
git push origin main

# 4. Enable Pages in repo settings
# Settings → Pages → Deploy from a branch → main/out
```

**URL**: `https://yourusername.github.io/superapp-portal/`

### Option 2: Netlify (Drag & Drop)

```bash
# 1. Build locally
npm run build

# 2. Drag 'out' folder to Netlify.com
# It will auto-deploy!
```

**URL**: `https://your-site.netlify.app/`

### Option 3: Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
```

**URL**: `https://superapp-portal.vercel.app/`

### Option 4: Traditional Hosting (Shared Hosting, VPS)

```bash
# 1. Build locally
npm run build

# 2. Upload 'out' directory contents to:
# /public_html/ on your server

# 3. Serve with any web server:
# - Apache
# - Nginx
# - Node.js static server
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Check `out/` directory is created
- [ ] No TypeScript errors: `npm run build` completes
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Updated metadata in `layout.tsx`
- [ ] Verified all 16 superapps display correctly
- [ ] Search and filter working
- [ ] All links are correct
- [ ] Footer credits visible

## Environment Setup

### GitHub Setup

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: out/
```

2. Configure repo settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Or use Actions tab for automated deployment

### Netlify Setup

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Setup

Vercel auto-detects Next.js projects. No configuration needed!

```bash
vercel
# Follow the CLI prompts
```

## Custom Domain Setup

### For GitHub Pages

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add DNS records:
   - Type: A
   - Value: `185.199.108.153`
   - Repeat for: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. GitHub Settings → Pages → Custom domain
4. Add your domain

### For Netlify

1. Domain → Domain Settings
2. Enter domain name
3. Update DNS records as shown

### For Vercel

1. Project Settings → Domains
2. Add custom domain
3. Update DNS records as shown

## Monitoring & Analytics

### Google Analytics

Add to `src/app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Vercel Analytics

Automatically included with Vercel hosting!

## Performance Optimization

The project is already optimized for:
- ✅ Static export (no server needed)
- ✅ CSS minification (Tailwind)
- ✅ Image optimization
- ✅ Font loading optimized
- ✅ Zero JavaScript frameworks overhead
- ✅ ~50KB initial load (gzipped)

### Further Optimization

1. **Compress images**:
```bash
# Convert images to WebP
cwebp image.png -o image.webp
```

2. **Enable GZIP** on server:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

3. **Cache headers**:
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Troubleshooting

### Build fails with TypeScript errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 404 errors on refresh
Your hosting needs to serve `index.html` for all routes:
- **GitHub Pages**: Add `.nojekyll` file to root
- **Netlify**: Already configured in `netlify.toml`
- **Vercel**: Automatic
- **Other**: Configure server to serve `/index.html` for all 404s

### Slow performance
1. Check: DevTools → Network tab
2. Enable compression on server
3. Use CDN (Cloudflare, CloudFront)
4. Check cache headers are set

### Search/Filter not working
The app is fully client-side. Check:
1. JavaScript is enabled
2. No console errors
3. Browser supports ES2020+ (Chrome 90+, Firefox 88+, Safari 14+)

## Rollback

If something goes wrong:

```bash
# Revert to previous version
git revert <commit-hash>
git push origin main

# Or rollback deployment
# - GitHub Pages: Revert commit
# - Netlify: Go to Deploys, select previous deploy
# - Vercel: Go to Deployments, redeploy previous
```

## Maintenance

### Update dependencies
```bash
npm update
npm run build
npm run dev  # Test locally
git push     # Deploy
```

### Add a new superapp
1. Edit `src/app/page.tsx`
2. Add to `superapps` array
3. Build and test: `npm run build && npm run dev`
4. Deploy: `git push origin main`

### Monitor uptime
- Use Pingdom, UptimeRobot, or similar
- Set alerts for downtime
- Monitor error rates in analytics

## Security Best Practices

✅ Already implemented:
- No database (static site)
- No user authentication needed
- No environment variables with secrets
- No backend vulnerabilities
- HTTPS on all platforms
- CSP headers configured

Additional steps:
- Enable HSTS header on server
- Monitor for vulnerabilities: `npm audit`
- Keep dependencies updated: `npm update`
- Regular security audits

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion

---

**Status**: Ready for Production Deployment
