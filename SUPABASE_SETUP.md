# Supabase Configuration Guide

## Quick Setup Checklist

### 1. Authentication URL Configuration
Go to your Supabase Dashboard → Authentication → URL Configuration:

**Development Settings:**
- Site URL: `http://localhost:5000`
- Redirect URLs: `http://localhost:5000/auth/callback`

**Production Settings (for Vercel deployment):**
- Site URL: `https://your-app-name.vercel.app`
- Redirect URLs: `https://your-app-name.vercel.app/auth/callback`

### 2. Email Authentication (✅ Ready)
- Email provider is enabled by default
- Magic links are configured
- Test with any email address

### 3. Phone Authentication (Twilio Setup Required)
**Your Twilio Configuration:**
- Twilio Number: `+1 959 335 0372`
- Webhook URL: `https://demo.twilio.com/welcome/sms/reply/`

**Supabase Phone Setup:**
1. Go to Authentication → Providers → Phone
2. Enable Phone provider
3. Configure Twilio:
   - Account SID: [Your Twilio Account SID]
   - Auth Token: [Your Twilio Auth Token]
   - Message Service SID: [Your Twilio Message Service SID]

### 4. Test Numbers
- Your Phone: `+251922220726` (Ethiopia)
- Twilio Test: `+1 959 335 0372` (US)

### 5. Environment Variables
```bash
# Already configured in .env.local
NEXT_PUBLIC_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Testing Steps

1. **Test Connection**: Visit `/test` to verify basic connection
2. **Email Auth**: 
   - Enter email address
   - Check inbox for magic link
   - Click link to authenticate
3. **Phone Auth** (requires Twilio setup):
   - Configure Twilio credentials in Supabase
   - Test with either your number or Twilio test number

## Deployment to Vercel

1. **Environment Variables in Vercel:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

2. **Update Supabase URLs:**
   - Add your Vercel domain to Supabase redirect URLs
   - Update site URL to your Vercel domain

3. **Deploy:**
   - Push to GitHub
   - Connect to Vercel
   - Deploy automatically

## Troubleshooting

**"localhost refused to connect"**
- Update Supabase URL configuration with correct localhost port
- Ensure redirect URL includes `/auth/callback`

**"Unsupported phone provider"**
- Enable Phone provider in Supabase
- Configure Twilio credentials
- Verify phone number format includes country code

**Magic link not working**
- Check spam folder
- Verify email is sent from Supabase
- Confirm redirect URLs are configured correctly