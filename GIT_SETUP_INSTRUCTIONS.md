# Git Setup Instructions for Circla Chat App

## Problem
Your Replit project isn't connected to your GitHub repository properly. The "origin" remote is missing.

## Solution Options

### Option 1: Import from GitHub to Replit (Recommended)

1. **Create a new Replit** from your GitHub repository:
   - Go to [replit.com](https://replit.com)
   - Click "Create Repl"
   - Choose "Import from GitHub"
   - Enter: `https://github.com/fanoskasim/Circla-Chat-App`
   - This will create a properly connected Replit

2. **Copy the updated files** from this current Replit to the new one:
   - `vercel.json` (most important fix)
   - `DEPLOYMENT.md`
   - `VERCEL_FIX.md`
   - `README.md`
   - `SUPABASE_SETUP.md`

### Option 2: Manual Upload to GitHub

1. **Copy the fixed vercel.json content**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

2. **Go to your GitHub repository**:
   - https://github.com/fanoskasim/Circla-Chat-App
   - Edit the `vercel.json` file directly
   - Replace content with the above
   - Commit the changes

### Option 3: Download and Re-upload

1. **Download this Replit project**:
   - Click the 3 dots menu in Replit
   - Choose "Export" → "Download as zip"

2. **Extract and push to GitHub**:
   - Extract the zip file
   - Copy the updated files to your local repository
   - Push using your local Git client

## Most Important File: vercel.json

The key fix is the `vercel.json` file. This single change will fix your Vercel deployment. Here's what it should contain:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## After Updating GitHub

1. **Vercel will auto-deploy** with the new configuration
2. **The build should succeed** now
3. **Update Supabase** redirect URLs with your Vercel domain
4. **Test your app** - authentication should work

## Quick Fix for Vercel

If you want the fastest solution:
1. Go to your GitHub repository
2. Edit `vercel.json` file directly on GitHub
3. Replace with the content above
4. Commit
5. Vercel will redeploy automatically

This single file change will fix the "vite: command not found" error you encountered.