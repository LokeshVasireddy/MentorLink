# OAuth Authentication Setup Guide

This guide will help you set up Google, GitHub, and LinkedIn OAuth authentication for MentorLink.

## Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas account
- A deployed URL or use `http://localhost:5173` for development

---

## 1. Google OAuth Setup

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**

### Step 2: Configure OAuth Consent Screen
1. Click **OAuth consent screen** in the left sidebar
2. Choose **External** user type (or Internal if using Google Workspace)
3. Fill in the required fields:
   - App name: `MentorLink`
   - User support email: Your email
   - Developer contact: Your email
4. Add scopes: `email` and `profile`
5. Save and continue

### Step 3: Create OAuth Credentials
1. Click **Create Credentials** > **OAuth client ID**
2. Application type: **Web application**
3. Name: `MentorLink Web Client`
4. **Authorized JavaScript origins**:
   - `http://localhost:5173` (for development)
   - Your production URL (when deployed)
5. **Authorized redirect URIs**:
   - `http://localhost:5001/api/auth/google/callback` (for development)
   - `https://your-backend-domain.com/api/auth/google/callback` (for production)
6. Click **Create**
7. Copy the **Client ID** and **Client Secret**

### Step 4: Add to Environment Variables
Add to `backend/.env`:
```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

---

## 2. GitHub OAuth Setup

### Step 1: Register a New OAuth App
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** > **New OAuth App**

### Step 2: Fill in Application Details
- **Application name**: `MentorLink`
- **Homepage URL**: `http://localhost:5173` (or your production URL)
- **Authorization callback URL**: `http://localhost:5001/api/auth/github/callback`
  - For production: `https://your-backend-domain.com/api/auth/github/callback`
- Click **Register application**

### Step 3: Generate Client Secret
1. After registration, click **Generate a new client secret**
2. Copy the **Client ID** and **Client Secret** immediately (you won't see it again)

### Step 4: Add to Environment Variables
Add to `backend/.env`:
```env
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
```

---

## 3. LinkedIn OAuth Setup

### Step 1: Create a LinkedIn App
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/apps)
2. Click **Create app**

### Step 2: Fill in Application Details
- **App name**: `MentorLink`
- **LinkedIn Page**: Select or create a LinkedIn page (required)
- **App logo**: Upload a logo (optional but recommended)
- **Legal agreement**: Check the box
- Click **Create app**

### Step 3: Configure OAuth Settings
1. Go to the **Auth** tab
2. Under **OAuth 2.0 settings**:
   - **Redirect URLs**: Add `http://localhost:5001/api/auth/linkedin/callback`
   - For production: Add `https://your-backend-domain.com/api/auth/linkedin/callback`
3. Under **OAuth 2.0 scopes**, request:
   - `r_liteprofile` (to read basic profile)
   - `r_emailaddress` (to read email)

### Step 4: Get Credentials
1. Go to the **Auth** tab
2. Copy the **Client ID** and **Client Secret**

### Step 5: Add to Environment Variables
Add to `backend/.env`:
```env
LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
```

---

## 4. Complete Environment Setup

### Backend Environment Variables

Create `backend/.env` file with all required variables:

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
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
```

### Frontend Environment Variables

Create `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:5001
```

---

## 5. Running the Application

### Start MongoDB
```bash
# If using local MongoDB
mongod
```

### Start Backend Server
```bash
cd backend
npm install
npm start
```

The backend should be running on `http://localhost:5001`

### Start Frontend
```bash
# In the root directory
npm install
npm run dev
```

The frontend should be running on `http://localhost:5173`

---

## 6. Testing OAuth Authentication

1. Navigate to `http://localhost:5173/signin`
2. Click on any of the social login buttons (Google, GitHub, or LinkedIn)
3. You'll be redirected to the provider's login page
4. After successful authentication, you'll be redirected back to the dashboard

---

## Troubleshooting

### Common Issues

**1. "Redirect URI mismatch" error**
- Ensure the callback URL in your OAuth app settings exactly matches the one in your code
- Check for trailing slashes and http vs https

**2. "Invalid client" error**
- Verify your Client ID and Client Secret are correct in `.env`
- Make sure there are no extra spaces or quotes

**3. OAuth provider not returning email**
- For GitHub: Some users don't have public emails. The app handles this by creating a placeholder email
- For LinkedIn: Ensure you've requested the `r_emailaddress` scope

**4. Session/Cookie issues**
- Clear browser cookies and try again
- Check that `SESSION_SECRET` is set in backend `.env`

**5. CORS errors**
- Ensure `FRONTEND_URL` in backend `.env` matches your actual frontend URL
- Check CORS configuration in `backend/middleware/corsConfig.js`

### Development vs Production

**Development:**
- Use `http://localhost:5173` for frontend
- Use `http://localhost:5001` for backend
- Callback URLs use `http://localhost:5001/api/auth/{provider}/callback`

**Production:**
- Update all OAuth apps with production URLs
- Use HTTPS for all URLs
- Update `FRONTEND_URL` and callback URLs in OAuth provider settings
- Set `NODE_ENV=production` in backend `.env`

---

## Security Best Practices

1. **Never commit `.env` files** - They're in `.gitignore` for a reason
2. **Use strong secrets** - Generate random strings for `JWT_SECRET` and `SESSION_SECRET`
3. **Enable HTTPS in production** - OAuth providers require HTTPS for production apps
4. **Rotate secrets regularly** - Change your secrets periodically
5. **Limit OAuth scopes** - Only request the permissions you actually need

---

## Additional Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [LinkedIn OAuth Documentation](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication)
- [Passport.js Documentation](http://www.passportjs.org/docs/)

---

## Need Help?

If you encounter any issues not covered in this guide, please check:
1. Backend console logs for detailed error messages
2. Browser console for frontend errors
3. Network tab in browser DevTools to see OAuth redirect flow
