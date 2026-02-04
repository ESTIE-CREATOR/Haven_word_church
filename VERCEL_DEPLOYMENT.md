# Vercel Deployment Guide - YouTube Environment Variables

## Quick Setup for Vercel

To fix the "Neither YouTube Channel ID nor Playlist ID is configured" error on Vercel, you need to add environment variables in your Vercel project settings.

## Step-by-Step Instructions

### Step 1: Go to Vercel Dashboard
1. Log in to [vercel.com](https://vercel.com)
2. Select your **Haven Word Church** project

### Step 2: Navigate to Environment Variables
1. Click on your project
2. Go to **Settings** tab (top navigation)
3. Click on **Environment Variables** in the left sidebar

### Step 3: Add Environment Variables
Add these **4 environment variables** one by one:

#### Variable 1: YouTube API Key
- **Name:** `VITE_YOUTUBE_API_KEY`
- **Value:** `AIzaSyDBthbpKTQYjHHN9RRzuI6ciFUblWtakPs`
- **Environment:** Select all (Production, Preview, Development)

#### Variable 2: YouTube Channel ID
- **Name:** `VITE_YOUTUBE_CHANNEL_ID`
- **Value:** `UC37hP1WUA-buGilwQEE5PnA`
- **Environment:** Select all (Production, Preview, Development)

#### Variable 3: YouTube Playlist ID (Optional but recommended)
- **Name:** `VITE_YOUTUBE_PLAYLIST_ID`
- **Value:** `UU37hP1WUA-buGilwQEE5PnA`
- **Environment:** Select all (Production, Preview, Development)

#### Variable 4: Max Results
- **Name:** `VITE_YOUTUBE_MAX_RESULTS`
- **Value:** `12`
- **Environment:** Select all (Production, Preview, Development)

### Step 4: Redeploy
After adding all environment variables:
1. Go to the **Deployments** tab
2. Click the **three dots** (⋯) on your latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic redeployment

## Quick Copy-Paste Values

Copy these exact values:

```
VITE_YOUTUBE_API_KEY=AIzaSyDBthbpKTQYjHHN9RRzuI6ciFUblWtakPs
VITE_YOUTUBE_CHANNEL_ID=UC37hP1WUA-buGilwQEE5PnA
VITE_YOUTUBE_PLAYLIST_ID=UU37hP1WUA-buGilwQEE5PnA
VITE_YOUTUBE_MAX_RESULTS=12
```

## Visual Guide

1. **Settings** → **Environment Variables**
2. Click **Add New**
3. Enter the **Name** and **Value**
4. Select **Environment** (check all: Production, Preview, Development)
5. Click **Save**
6. Repeat for all 4 variables

## Important Notes

- ✅ Make sure to select **all environments** (Production, Preview, Development) for each variable
- ✅ After adding variables, you **must redeploy** for changes to take effect
- ✅ Environment variables are case-sensitive - use exact names shown above
- ✅ The `VITE_` prefix is required for Vite to expose these variables to your app

## Troubleshooting

### Still seeing the error after adding variables?
1. Make sure you clicked **Save** for each variable
2. **Redeploy** your application (don't just wait - actively redeploy)
3. Check that all variables have the correct names (case-sensitive)
4. Verify the values don't have extra spaces

### How to verify variables are set?
1. Go to **Settings** → **Environment Variables**
2. You should see all 4 variables listed
3. Each should show "Production, Preview, Development" under Environment

## After Deployment

Once deployed with environment variables:
- Your YouTube videos will automatically sync
- Visit `/messages` page to see your videos
- New videos uploaded to YouTube will appear automatically

---

**Need help?** Check that all 4 variables are added and redeploy your application.
