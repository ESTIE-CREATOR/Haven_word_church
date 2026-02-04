# YouTube Video Sync Setup Guide

This guide will help you set up automatic YouTube video syncing for your Haven Word Church website.

## Prerequisites

✅ You already have your YouTube API key: `AIzaSyDBthbpKTQYjHHN9RRzuI6ciFUblWtakPs`

## Step 1: Get Your YouTube Channel ID or Playlist ID

You need to provide either a **Channel ID** or a **Playlist ID** in your `.env` file.

### Option A: Using Channel ID (Recommended)

1. Go to your YouTube channel
2. Open any video from your channel
3. Click on your channel name
4. Go to the "About" tab
5. Scroll down to find your **Channel ID** (looks like: `UCxxxxxxxxxxxxxxxxxxxxxxxxxx`)
6. Or simply copy it from your channel URL: `https://www.youtube.com/channel/YOUR_CHANNEL_ID`

**Example:** If your channel URL is `https://www.youtube.com/channel/UC1234567890abcdefghijklmnop`, then your Channel ID is `UC1234567890abcdefghijklmnop`

### Option B: Using Playlist ID

1. Create a playlist on YouTube (or use an existing one)
2. Add all your sermon videos to this playlist
3. Open the playlist
4. Copy the ID from the URL: `https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - The part after `list=` is your Playlist ID

**Example:** If your playlist URL is `https://www.youtube.com/playlist?list=PL1234567890abcdefghijklmnop`, then your Playlist ID is `PL1234567890abcdefghijklmnop`

## Step 2: Update Your .env File

Open the `.env` file in the root of your project and add your Channel ID or Playlist ID:

```env
VITE_YOUTUBE_API_KEY=AIzaSyDBthbpKTQYjHHN9RRzuI6ciFUblWtakPs
VITE_YOUTUBE_CHANNEL_ID=YOUR_CHANNEL_ID_HERE
VITE_YOUTUBE_PLAYLIST_ID=YOUR_PLAYLIST_ID_HERE
VITE_YOUTUBE_MAX_RESULTS=12
```

**Important Notes:**
- You only need to fill in **ONE** of these: `VITE_YOUTUBE_CHANNEL_ID` OR `VITE_YOUTUBE_PLAYLIST_ID`
- If you provide both, the playlist will be used (it takes priority)
- `VITE_YOUTUBE_MAX_RESULTS` controls how many videos to fetch per API call (default: 12)

## Step 3: Restart Your Development Server

After updating the `.env` file:

1. Stop your current development server (if running)
2. Restart it with: `npm run dev`
3. Navigate to the Messages page (`/messages`) to see your videos

## How It Works

- **Automatic Sync**: Videos are automatically fetched from your YouTube channel/playlist
- **No Manual Input**: Once configured, new videos uploaded to YouTube will automatically appear on your website
- **View More Button**: If you have more than 6 videos, a "View More" button will appear to load additional videos
- **Pagination**: The system loads videos in batches to keep the page fast and responsive

## Troubleshooting

### "Failed to load videos" Error

1. **Check your API key**: Make sure `VITE_YOUTUBE_API_KEY` is correct in `.env`
2. **Check Channel/Playlist ID**: Verify that you've entered the correct ID
3. **API Quota**: YouTube API has a free quota of 10,000 units per day. If you exceed this, you'll need to wait 24 hours or upgrade your quota
4. **Restart Server**: After changing `.env`, always restart your development server

### Videos Not Showing

1. Make sure your YouTube channel/playlist has videos
2. Check that the videos are public (not private or unlisted)
3. Verify your API key has access to YouTube Data API v3
4. Check the browser console for any error messages

### "Channel not found" Error

- Double-check your Channel ID format (should start with `UC`)
- Make sure the channel exists and is accessible
- Try using a Playlist ID instead

## API Quota Information

- **Free Tier**: 10,000 units per day
- **Cost per operation**:
  - Fetch videos from playlist: 1 unit
  - Get video details: 1 unit
  - For a typical church website, the free quota is more than enough

## Security Note

⚠️ **Important**: Never commit your `.env` file to Git. It's already in `.gitignore` for security.

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your `.env` file configuration
3. Make sure your YouTube channel/playlist is public
4. Ensure your API key is valid and has YouTube Data API v3 enabled
