# Circla Chat App

A modern, real-time chat application with Supabase authentication and WhatsApp-inspired UI.

## Features

- 🔐 **Supabase Authentication** - Email magic links and phone OTP
- 💬 **Real-time Messaging** - WebSocket-powered chat
- 📱 **Responsive Design** - Mobile-first with modern UI
- 🎨 **WhatsApp-inspired Interface** - Familiar and intuitive
- ☁️ **Production Ready** - Configured for Vercel deployment

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, WebSocket
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (Supabase)
- **Deployment**: Vercel

## Quick Start

### Development

1. Clone the repository: `git clone https://github.com/fanoskasim/Circla-Chat-App.git`
2. Install dependencies: `npm install`
3. Set up environment variables (see below)
4. Start development server: `npm run dev`
5. Visit `http://localhost:5000`

### Environment Variables

Create `.env.local` with:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# For Vercel deployment, also add:
NEXT_PUBLIC_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment to Vercel

### 1. Environment Variables in Vercel

Add these environment variables in your Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://cdcippxqcfvjmemfqsmj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Supabase Configuration

Update your Supabase project settings:

**Authentication → URL Configuration:**
- Site URL: `https://your-app-name.vercel.app`
- Redirect URLs: `https://your-app-name.vercel.app/auth/callback`

### 3. Deploy

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Authentication Setup

### Email Authentication (Ready)
- Magic links work out of the box
- Update redirect URLs in Supabase for production

### Phone Authentication (Requires Twilio Setup)
- Configure Twilio in Supabase Auth settings
- Add Twilio credentials (Account SID, Auth Token, Message Service SID)
- Test number available: +1 959 335 0372

## Testing

Visit `/test` route to verify:
- Supabase connection
- Email authentication
- Phone authentication (after Twilio setup)
- User session management

## Project Structure

```
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities and configuration
│   │   ├── pages/        # Route components
│   │   └── providers/    # Context providers
├── server/               # Express backend
├── shared/               # Shared types and schemas
├── vercel.json          # Vercel deployment config
└── SUPABASE_SETUP.md    # Detailed setup guide
```

## Support

For detailed setup instructions, see `SUPABASE_SETUP.md`.

## License

MIT License