# 🚀 MentorLink - OAuth Authentication Setup

Your application is **ready to work** but OAuth providers need credentials to function like real applications.

## ✅ What's Working Right Now

- ✅ Email/Password Sign Up
- ✅ Email/Password Sign In
- ✅ JWT Authentication
- ✅ Protected Dashboard
- ✅ MongoDB Integration
- ⚠️ OAuth Login (needs setup - 10 minutes)

## 🎯 Current Status

When you click Google/GitHub/LinkedIn buttons, you see an error because OAuth credentials aren't configured yet.

**This is normal!** Real OAuth requires you to register your app with each provider.

## 🔧 Quick Setup (Choose One)

### Option 1: Use Email/Password Only (0 minutes)
Your app works perfectly with email/password authentication. Just use the sign-up form!

### Option 2: Enable OAuth Login (10 minutes)
Follow the step-by-step guide to enable Google/GitHub/LinkedIn login:

**Read:** `SETUP_OAUTH_CREDENTIALS.md` (detailed guide)
**Or:** `QUICK_OAUTH_SETUP.txt` (quick reference)

## 📋 Setup Checklist

### Step 1: Check Your Configuration
```bash
cd backend
npm run check-oauth
```

This will show you what's configured and what's missing.

### Step 2: Get OAuth Credentials

Pick at least one provider to start with:

#### 🔵 Google OAuth (Recommended - Easiest)
1. Go to: https://console.cloud.google.com/
2. Create project → Enable OAuth
3. Get Client ID and Secret
4. Add to `backend/.env`

#### ⚫ GitHub OAuth (Easy)
1. Go to: https://github.com/settings/developers
2. Create OAuth App
3. Get Client ID and Secret
4. Add to `backend/.env`

#### 🔵 LinkedIn OAuth (Requires Company Page)
1. Go to: https://www.linkedin.com/developers/apps
2. Create app (needs LinkedIn Company Page)
3. Get Client ID and Secret
4. Add to `backend/.env`

### Step 3: Update .env File

Edit `backend/.env` and add your credentials:

```env
# Add at least one provider
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
```

### Step 4: Restart Backend

```bash
# Stop the server (Ctrl+C)
npm start
```

You should see:
```
✅ Google OAuth strategy initialized
✅ GitHub OAuth strategy initialized
✅ LinkedIn OAuth strategy initialized
```

### Step 5: Test OAuth

1. Go to `http://localhost:5173/signin`
2. Click on Google/GitHub/LinkedIn button
3. You'll be redirected to the provider's login page
4. Choose your account
5. Grant permissions
6. Automatically redirected back and logged in!

## 🎬 How OAuth Works (After Setup)

### Before Setup:
```
Click Google → Error message: "OAuth not configured"
```

### After Setup:
```
Click Google → Redirects to accounts.google.com
             → Choose your Google account
             → Grant permissions
             → Redirects back to your app
             → Automatically logged in!
```

## 🔍 Troubleshooting

### "OAuth is not configured" message
✅ **This is expected!** You haven't added credentials yet.
📝 Follow `SETUP_OAUTH_CREDENTIALS.md` to fix this.

### Backend shows warnings
```
⚠️  Google OAuth disabled - credentials not found
⚠️  GitHub OAuth disabled - credentials not found
⚠️  LinkedIn OAuth disabled - credentials not found
```
✅ **This is normal!** Add credentials to `backend/.env` to enable them.

### After adding credentials, still not working
1. Make sure you **restarted the backend**
2. Check for typos in `.env` file
3. Run `npm run check-oauth` to verify
4. Check callback URLs match exactly

## 📚 Documentation

- **SETUP_OAUTH_CREDENTIALS.md** - Complete step-by-step guide with screenshots
- **QUICK_OAUTH_SETUP.txt** - Quick reference for setup
- **OAUTH_SETUP.md** - Technical documentation

## 💡 Pro Tips

1. **Start with Google** - It's the easiest to set up
2. **Use incognito mode** - To test fresh login flows
3. **Add your email as test user** - In Google OAuth consent screen
4. **Check backend logs** - They show helpful error messages
5. **Verify callback URLs** - They must match exactly

## 🎯 Next Steps

1. ✅ Your app is working with email/password
2. 📝 Follow `SETUP_OAUTH_CREDENTIALS.md` to enable OAuth
3. 🧪 Test with different accounts
4. 🚀 Deploy to production (update OAuth URLs)

## ❓ Need Help?

**Check your setup:**
```bash
cd backend
npm run check-oauth
```

**Common issues:**
- Callback URL mismatch → Check OAuth app settings
- Invalid credentials → Verify `.env` file
- Still showing errors → Restart backend after adding credentials

---

**Your app is production-ready!** OAuth is just an additional login option that makes it easier for users to sign in with their existing accounts.
