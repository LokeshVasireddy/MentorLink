# MentorLink - Quick Start Guide

Get your OAuth authentication working in 5 minutes!

## Step 1: Setup Environment Variables

### Backend Setup
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` and add your OAuth credentials (see OAUTH_SETUP.md for detailed instructions):
- Get Google credentials from: https://console.cloud.google.com/apis/credentials
- Get GitHub credentials from: https://github.com/settings/developers
- Get LinkedIn credentials from: https://www.linkedin.com/developers/apps

**Minimum required for testing:**
```env
MONGO_URI=mongodb://localhost:27017/mentorlink
PORT=5001
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your_random_secret_key_here
SESSION_SECRET=your_random_session_key_here

# Add at least one OAuth provider
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Frontend Setup
```bash
# In root directory
cp .env.example .env
```

The default values should work for local development.

## Step 2: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
# In root directory
npm install
```

## Step 3: Start MongoDB

Make sure MongoDB is running:
```bash
# If using local MongoDB
mongod

# Or if using MongoDB as a service
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
```

## Step 4: Start the Application

### Terminal 1 - Backend
```bash
cd backend
npm start
```

You should see: `🚀 Server running on port 5001`

### Terminal 2 - Frontend
```bash
# In root directory
npm run dev
```

You should see: `Local: http://localhost:5173/`

## Step 5: Test Authentication

1. Open browser to `http://localhost:5173`
2. You'll be redirected to the Sign In page
3. Try signing up with email/password OR
4. Click on a social login button (Google/GitHub/LinkedIn)

## OAuth Callback URLs

When setting up OAuth apps, use these callback URLs:

- **Google**: `http://localhost:5001/api/auth/google/callback`
- **GitHub**: `http://localhost:5001/api/auth/github/callback`
- **LinkedIn**: `http://localhost:5001/api/auth/linkedin/callback`

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify all required env variables are set
- Check port 5001 is not already in use

### Frontend won't start
- Check port 5173 is not already in use
- Try deleting `node_modules` and running `npm install` again

### OAuth not working
- Verify callback URLs match exactly in OAuth provider settings
- Check browser console for errors
- Check backend logs for detailed error messages
- Make sure `.env` file exists and has correct values

### "Redirect URI mismatch"
- The callback URL in your OAuth app must exactly match: `http://localhost:5001/api/auth/{provider}/callback`
- No trailing slashes
- Must be `http://` for localhost (not `https://`)

## What's Working

✅ Email/Password Sign Up
✅ Email/Password Sign In
✅ Google OAuth Login
✅ GitHub OAuth Login
✅ LinkedIn OAuth Login
✅ JWT Token Authentication
✅ Protected Routes
✅ User Session Management

## Next Steps

- Read `OAUTH_SETUP.md` for detailed OAuth configuration
- Customize the dashboard in `src/pages/Dashboard.jsx`
- Add more features to your application
- Deploy to production (update OAuth callback URLs!)

## Need Help?

Check the detailed setup guide: `OAUTH_SETUP.md`
