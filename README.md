# Circla-Chat-App
Circla Chat App

A WhatsApp-like chat application built with React, Next.js, and Supabase

Features
Real-time messaging with typing indicators

Secure authentication via phone/email with OTP

Media sharing (images, documents)

Group chats with admin controls

Online status indicators

End-to-end encryption for messages

Responsive design for all devices

Push notifications for new messages

Technology Stack
Frontend

React.js with Next.js framework

Tailwind CSS for styling

Realtime communication via Supabase

Backend

Supabase (PostgreSQL database, Auth, Storage)

Row Level Security for data protection

Postgres functions for realtime updates

Infrastructure

Replit for deployment and hosting

Supabase for backend services

Setup Instructions
1. Create Repository
bash
git clone https://github.com/fanoskasim/circla-chat-app
cd circla-chat-app
2. Set Up Supabase
Create account at supabase.io

Create new project (note project URL and anon key)

Run database setup:

sql
-- Create tables
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT NOT NULL,
  avatar_url TEXT,
  online BOOLEAN DEFAULT false,
  last_seen TIMESTAMPTZ
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES users(id) NOT NULL,
  receiver_id UUID REFERENCES users(id),
  group_id UUID REFERENCES groups(id),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'sent' -- sent/delivered/read
);

CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable realtime
ALTER TABLE messages REPLICA IDENTITY FULL;
CREATE PUBLICATION supabase_realtime FOR TABLE messages;
3. Configure Environment
Create .env.local file:

env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
4. Install Dependencies
bash
npm install
5. Run Development Server
bash
npm run dev
Replit Deployment Command
Run this single command in Replit shell to deploy:

bash
git clone https://github.com/your-username/circla-chat-app && cd circla-chat-app && \
echo "NEXT_PUBLIC_SUPABASE_URL=$YOUR_SUPABASE_URL" > .env.local && \
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=$YOUR_SUPABASE_KEY" >> .env.local && \
npm install && npm run build && npm run start
Replace placeholders:

$YOUR_SUPABASE_URL - Your Supabase project URL

$YOUR_SUPABASE_KEY - Your Supabase anon key

Production Configuration
Enable Row Level Security in Supabase for all tables

Configure Authentication Providers in Supabase dashboard

Set Up Storage for media files in Supabase

Enable SSL in Supabase settings

Configure Custom Domain in Replit

Project Structure
text
circla-chat-app/
├── components/
│   ├── chat/
│   │   ├── ChatWindow.js
│   │   ├── MessageBubble.js
│   │   └── TypingIndicator.js
│   ├── contacts/
│   │   ├── ContactList.js
│   │   └── ContactItem.js
│   ├── groups/
│   │   ├── GroupCreator.js
│   │   └── GroupSettings.js
│   └── ui/
│       ├── EncryptionBadge.js
│       └── OnlineIndicator.js
├── lib/
│   ├── supabaseClient.js
│   └── encryption.js
├── pages/
│   ├── index.js (main chat)
│   ├── auth.js
│   └── groups/
│       └── [groupId].js
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── .env.local
└── package.json
Security Features
End-to-end message encryption using WebCrypto API

Row Level Security in Supabase

JWT token authentication

Rate limiting on authentication endpoints

Input sanitization for all user-generated content

Automatic session timeout after 24 hours

Contributing
Fork the repository

Create feature branch (git checkout -b feature/your-feature)

Commit changes (git commit -am 'Add feature')

Push to branch (git push origin feature/your-feature)

Open pull request

License
Circla is MIT licensed.

Production Checklist
 Enable Supabase Realtime
 Configure SMS provider (Twilio) for OTP
 Set up backup retention policies
 Enable error tracking (Sentry)
 Implement rate limiting
 Add monitoring (Logflare)
