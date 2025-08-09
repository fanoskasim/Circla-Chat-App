# Deployment Guide for Vercel

## Pre-deployment Checklist

✅ **App Status**: Production-ready with Supabase authentication
✅ **Configuration**: All environment variables configured
✅ **Authentication**: Email magic links functional
✅ **Phone Auth**: Twilio integration ready
✅ **UI**: WhatsApp-inspired responsive design complete

## Deployment Steps

### 1. Prepare Repository

1. Ensure all code is committed to Git
2. Push to GitHub (public or private repository)

### 2. Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository: `https://github.com/fanoskasim/Circla-Chat-App`
5. Configure as follows:

**Project Settings:**
- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node.js Version: `18.x`

### 3. Environment Variables

Add these in Vercel dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkY2lwcHhxY2Z2am1lbWZxc21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzY5NzMsImV4cCI6MjA3MDI1Mjk3M30.rTzTFqWUYQ4aRdkU2bK8k6g8pA9I6_Z3FQy5V9Pz8WI

VITE_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkY2lwcHhxY2Z2am1lbWZxc21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzY5NzMsImV4cCI6MjA3MDI1Mjk3M30.rTzTFqWUYQ4aRdkU2bK8k6g8pA9I6_Z3FQy5V9Pz8WI
```

### 4. Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Get your production URL (e.g., `https://your-app-name.vercel.app`)

### 5. Update Supabase Configuration

After deployment, update Supabase settings:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Authentication → URL Configuration
4. Update:
   - **Site URL**: `https://your-app-name.vercel.app`
   - **Redirect URLs**: `https://your-app-name.vercel.app/auth/callback`

### 6. Test Production App

1. Visit your Vercel URL
2. Test email authentication
3. Check `/test` route for connection status
4. Verify chat functionality

## Post-Deployment Configuration

### Email Authentication
- Should work immediately after Supabase URL update
- Magic links will redirect to production domain

### Phone Authentication (Optional)
1. Enable Phone provider in Supabase
2. Configure Twilio:
   - Account SID: `[Your Twilio Account SID]`
   - Auth Token: `[Your Twilio Auth Token]`
   - Message Service SID: `[Your Message Service SID]`
3. Test with: +1 959 335 0372 (Twilio number)

## Troubleshooting

### Build Errors
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check environment variables are set

### Authentication Issues
- Verify Supabase URLs are updated
- Check redirect URLs match exactly
- Confirm environment variables are set correctly

### Performance Optimization
- Vercel automatically optimizes static assets
- CDN distribution included
- Automatic HTTPS enabled

## Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Update Supabase URLs to match custom domain

## Monitoring

- View deployment logs in Vercel dashboard
- Monitor performance in Vercel Analytics
- Check function logs for backend issues

Your app is now live and production-ready! 🚀