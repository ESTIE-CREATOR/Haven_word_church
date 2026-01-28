# Google Form Setup Instructions

## How to Create a Google Form for Testimony Submissions

Follow these steps to create a Google Form that automatically saves submissions to a Google Sheet:

### Step 1: Create the Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click **"Blank"** to create a new form
3. Name your form: **"Haven Word Church - Testimony Submission"**

### Step 2: Add Form Fields
Add the following questions to your form:

1. **Name** (Short answer, Required)
   - Question: "What is your name?"
   - Mark as Required

2. **Email** (Short answer, Optional)
   - Question: "What is your email address?"
   - Optional field

3. **Phone** (Short answer, Optional)
   - Question: "What is your phone number?"
   - Optional field

4. **Testimony** (Paragraph, Required)
   - Question: "Share your testimony"
   - Mark as Required
   - Add description: "Tell us how God has worked in your life. Your story can inspire others!"

### Step 3: Get the Form Link
1. Click the **"Send"** button (top right)
2. Click the **"Link"** icon (chain link icon)
3. Click **"Shorten URL"** (optional, makes link shorter)
4. Click **"Copy"** to copy the link
5. The link will look like: `https://forms.gle/XXXXXXXXXX`

### Step 4: Update the Code
1. Open `src/pages/Testimonies.tsx`
2. Find the line: `const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_ID_HERE";`
3. Replace `YOUR_FORM_ID_HERE` with your actual Google Form link
4. Example: `const GOOGLE_FORM_URL = "https://forms.gle/AbCdEfGhIjKlMnOp";`

### Step 5: Share Access (Optional)
If you want others to view the responses:
1. In Google Forms, click **"Responses"** tab
2. Click the **Google Sheets icon** (green spreadsheet icon)
3. Choose **"Create a new spreadsheet"** or **"Select existing spreadsheet"**
4. Click **"Create"** or **"Select"**
5. The spreadsheet will automatically update with new submissions

### Step 6: Share the Spreadsheet
To give others access to view the spreadsheet:
1. Open the Google Sheet (from Step 5)
2. Click **"Share"** button (top right)
3. Add email addresses of people who should have access
4. Choose permission level:
   - **Viewer**: Can only view submissions
   - **Editor**: Can edit submissions
   - **Commenter**: Can add comments
5. Click **"Send"**

### Alternative: Direct Spreadsheet Link
If you prefer to link directly to the spreadsheet instead of the form:
1. Open your Google Sheet
2. Click **"Share"** → **"Get link"**
3. Set permission to **"Anyone with the link can view"**
4. Copy the link
5. Update `GOOGLE_FORM_URL` in the code with this spreadsheet link

## Testing
1. Click "Submit Your Testimony" button on the website
2. Click "Open Google Form" in the dialog
3. Fill out and submit a test testimony
4. Check your Google Sheet to verify the submission appears

## Notes
- Google Forms automatically creates a Google Sheet for responses
- Submissions are saved in real-time
- You can customize the form design to match your church branding
- The form link can be shared anywhere (website, social media, etc.)
