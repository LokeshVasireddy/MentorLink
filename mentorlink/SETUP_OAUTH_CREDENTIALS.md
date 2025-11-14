# Complete OAuth Setup - Step by Step

Follow these exact steps to get Google, GitHub, and LinkedIn OAuth working like real applications.

---

## 🔵 GOOGLE OAUTH - Complete Setup (5 minutes)

### Step 1: Create Google Cloud Project

1. Go to: https://console.cloud.google.com/
2. Click **"Select a project"** → **"New Project"**
3. Project name: `MentorLink`
4. Click **"Create"**
5. Wait for project creation, then select it

### Step 2: Enable Google+ API

1. In the search bar, type **"Google+ API"** or go to: https://console.cloud.google.com/apis/library/plus.googleapis.com
2. Click **"Enable"**

### Step 3: Configure OAuth Consent Screen

1. Go to: https://console.cloud.google.com/apis/credentials/consent
2. Select **"External"** user type
3. Click **"Create"**

**Fill in the form:**
- **App name**: `MentorLink`
- **User support email**: Your email address
- **App logo**: (optional, skip for now)
- **App domain**: Leave blank for development
- **Authorized domains**: Leave blank for development
- **Developer contact information**: Your email address
- Click **"Save and Continue"**

**Scopes page:**
- Click **"Add or Remove Scopes"**
- Search and select:
  - `userinfo.email`
  - `userinfo.profile`
- Click **"Update"** → **"Save and Continue"**

**Test users page:**
- Click **"Add Users"**
- Add your Gmail address (you'll use this to test)
- Click **"Save and Continue"**

**Summary page:**
- Click **"Back to Dashboard"**

### Step 4: Create OAuth Credentials

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. If prompted, configure consent screen (already done above)
4. Application type: **"Web application"**
5. Name: `MentorLink Web Client`

**Authorized JavaScript origins:**
```
http://localhost:5173
```

**Authorized redirect URIs:**
```
http://localhost:5001/api/auth/google/callback
```

6. Click **"Create"**
7. **COPY** the Client ID and Client Secret immediately

### Step 5: Add to .env

Open `backend/.env` and add:
```env
GOOGLE_CLIENT_ID=paste_your_client_id_here
GOOGLE_CLIENT_SECRET=paste_your_client_secret_here
```

---

## ⚫ GITHUB OAUTH - Complete Setup (3 minutes)

### Step 1: Register OAuth App

1. Go to: https://github.com/settings/developers
2. Click **"OAuth Apps"** in left sidebar
3. Click **"New OAuth App"**

### Step 2: Fill Application Details

**Application name:**
```
MentorLink
```

**Homepage URL:**
```
http://localhost:5173
```

**Application description:** (optional)
```
MentorLink - Connect mentors and mentees
```

**Authorization callback URL:**
```
http://localhost:5001/api/auth/github/callback
```

4. Click **"Register application"**

### Step 3: Generate Client Secret

1. After registration, you'll see your **Client ID**
2. Click **"Generate a new client secret"**
3. **COPY** both Client ID and Client Secret immediately (you won't see the secret again!)

### Step 4: Add to .env

Open `backend/.env` and add:
```env
GITHUB_CLIENT_ID=paste_your_client_id_here
GITHUB_CLIENT_SECRET=paste_your_client_secret_here
```

---

## 🔵 LINKEDIN OAUTH - Complete Setup (5 minutes)

### Step 1: Create LinkedIn App

1. Go to: https://www.linkedin.com/developers/apps
2. Click **"Create app"**

### Step 2: Fill Application Details

**App name:**
```
MentorLink
```

**LinkedIn Page:** 
- You MUST select or create a LinkedIn Company Page
- If you don't have one, click **"Create a new LinkedIn Page"**
- Create a simple company page (can be for testing)

**Privacy policy URL:** (use a placeholder for development)
```
http://localhost:5173/privacy
```

**App logo:** (optional but recommended)
- Upload any logo image (200x200px minimum)

**Legal agreement:**
- Check the box to agree
- Click **"Create app"**

### Step 3: Verify Your App

1. You'll see a verification page
2. Click on the **"Verify"** button next to your company page
3. Follow the verification steps (usually email verification)

### Step 4: Request API Access

1. Go to the **"Products"** tab
2. Find **"Sign In with LinkedIn"**
3. Click **"Request access"**
4. Wait for approval (usually instant for development)

### Step 5: Configure OAuth Settings

1. Go to the **"Auth"** tab
2. Under **"OAuth 2.0 settings"**:

**Redirect URLs:**
```
http://localhost:5001/api/auth/linkedin/callback
```
Click **"Add redirect URL"** → **"Update"**

### Step 6: Get Credentials

1. Still in the **"Auth"** tab
2. Under **"Application credentials"**:
   - Copy **Client ID**
   - Copy **Client Secret** (click "Show" if hidden)

### Step 7: Add to .env

Open `backend/.env` and add:
```env
LINKEDIN_CLIENT_ID=paste_your_client_id_here
LINKEDIN_CLIENT_SECRET=paste_your_client_secret_here
```

---

## ✅ Final Steps

### 1. Complete .env File

Your `backend/.env` should now look like this:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/mentorlink

# Server Configuration
PORT=5001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
SESSION_SECRET=your_session_secret_key_change_in_production

# Google OAuth
GOOGLE_CLIENT_ID=your_actual_google_client_id
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_actual_github_client_id
GITHUB_CLIENT_SECRET=your_actual_github_client_secret

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your_actual_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_actual_linkedin_client_secret
```

### 2. Restart Backend

```bash
# Stop the backend (Ctrl+C)
# Start it again
cd backend
npm start
```

You should see:
```
✅ Google OAuth strategy initialized
✅ GitHub OAuth strategy initialized
✅ LinkedIn OAuth strategy initialized
🚀 Server running on port 5001
```

### 3. Test OAuth Login

1. Go to `http://localhost:5173/signin`
2. Click **Google** button → Should redirect to Google account selection
3. Click **GitHub** button → Should redirect to GitHub authorization
4. Click **LinkedIn** button → Should redirect to LinkedIn authorization

---

## 🎯 What Happens When You Click OAuth Buttons

### Google OAuth Flow:
1. Click "Google" button
2. → Redirects to `accounts.google.com`
3. → Choose your Google account
4. → Grant permissions
5. → Redirects back to your app
6. → Automatically logged in to dashboard

### GitHub OAuth Flow:
1. Click "GitHub" button
2. → Redirects to `github.com/login/oauth/authorize`
3. → Login to GitHub (if not already)
4. → Grant permissions to MentorLink
5. → Redirects back to your app
6. → Automatically logged in to dashboard

### LinkedIn OAuth Flow:
1. Click "LinkedIn" button
2. → Redirects to `linkedin.com/oauth`
3. → Login to LinkedIn (if not already)
4. → Grant permissions to MentorLink
5. → Redirects back to your app
6. → Automatically logged in to dashboard

---

## 🔧 Troubleshooting

### "OAuth is not configured" message
- You haven't added credentials to `.env` yet
- Or you haven't restarted the backend after adding credentials

### "Redirect URI mismatch"
- Make sure callback URL is EXACTLY: `http://localhost:5001/api/auth/{provider}/callback`
- No trailing slash
- Must be `http://` not `https://` for localhost

### Google: "Access blocked: This app's request is invalid"
- Make sure you enabled Google+ API
- Check that redirect URI is added in Google Console
- Add your email as a test user in OAuth consent screen

### GitHub: "The redirect_uri MUST match the registered callback URL"
- Check the callback URL in GitHub OAuth app settings
- Must be exactly: `http://localhost:5001/api/auth/github/callback`

### LinkedIn: "invalid_redirect_uri"
- Make sure you added the redirect URL in LinkedIn app Auth settings
- Must be exactly: `http://localhost:5001/api/auth/linkedin/callback`
- Make sure your app is verified

---

## 📱 Testing Tips

1. **Use Incognito/Private browsing** to test fresh login flows
2. **Clear cookies** between tests
3. **Check browser console** for any errors
4. **Check backend logs** for detailed error messages
5. **Test with different accounts** to ensure it works for all users

---

## 🚀 Ready for Production?

When deploying to production:

1. Update all OAuth apps with production URLs
2. Change `http://` to `https://`
3. Update callback URLs to your production domain
4. Set `NODE_ENV=production` in `.env`
5. Use strong random secrets for `JWT_SECRET` and `SESSION_SECRET`
6. Submit Google app for verification (if needed)
7. Move LinkedIn app from development to production mode

---

## Need Help?

If you're stuck:
1. Check the error message in browser console
2. Check backend terminal for detailed logs
3. Verify all credentials are correct in `.env`
4. Make sure backend restarted after adding credentials
5. Try with a different browser or incognito mode
