# Overview

Circla App is a WhatsApp-like chat application that provides real-time messaging capabilities with a modern, responsive user interface. The application features direct messaging, group chats, file sharing, and real-time communication through WebSocket connections. Built as a full-stack web application, it combines a React-based frontend with an Express.js backend, utilizing PostgreSQL for data persistence and Google Cloud Storage for file management.

**Production-Ready Status (January 2025):** The application has been completely migrated from Replit Auth to Supabase Auth and is now fully production-ready for deployment. Live Supabase credentials are integrated and authentication is fully functional. The UI features a modern Material + WhatsApp-inspired interface using Tailwind CSS and Framer Motion animations.

**Deployment Ready:** App is configured for Vercel deployment with:
- Live Supabase authentication (https://cdcippxqcfvjmemfqsmj.supabase.co)
- Production environment variables configured
- No Replit dependencies
- Responsive design for all devices
- Complete deployment documentation and configuration files
- Twilio phone authentication ready (+1 959 335 0372)

**Ready for Production:** All files prepared for Vercel deployment including vercel.json, environment variables, and Supabase configuration updates.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Full-Stack Structure
The application follows a monorepo structure with clear separation between client, server, and shared components:
- **Client**: React-based frontend using TypeScript and Vite for build tooling
- **Server**: Express.js backend with TypeScript support
- **Shared**: Common schema definitions and types used across both client and server

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens for WhatsApp-like theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Real-time**: WebSocket integration for live messaging

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Authentication**: OpenID Connect with Replit Auth integration
- **Session Management**: Express sessions with PostgreSQL storage
- **Real-time Communication**: WebSocket server for live messaging
- **File Upload**: Integration with Google Cloud Storage via Uppy

## Database Design
- **Users**: Profile information, online status, and authentication data
- **Channels**: Support for both direct messages and group chats
- **Messages**: Text messages and file attachments with sender tracking
- **Channel Members**: Many-to-many relationship between users and channels
- **Sessions**: Persistent session storage for authentication

## Real-time Communication
- WebSocket server integrated with Express for real-time messaging
- Connection management with heartbeat/ping-pong for connection health
- User presence tracking and online status updates
- Message broadcasting to channel participants

## File Storage Strategy
- Google Cloud Storage integration for file uploads and downloads
- Custom ACL (Access Control List) system for object-level permissions
- Uppy-based file upload interface with progress tracking
- Support for various file types including images and documents

## Authentication & Security
- **Live Supabase Authentication** fully configured and functional
- **Email Magic Link** authentication active with real email delivery
- **Phone OTP** authentication configured (optional feature)
- **Session Management** with automatic redirects and persistence
- **Production Credentials** integrated (cdcippxqcfvjmemfqsmj.supabase.co)
- Custom authentication components with modern UI/UX
- Automatic session refresh and error handling
- CORS configuration for secure cross-origin requests
- **Replit Auth Removed** - fully migrated to Supabase

## Development Environment
- Hot module replacement with Vite in development
- TypeScript compilation with shared type definitions
- Database migration system using Drizzle Kit
- Environment-based configuration management

## Responsive Design
- Mobile-first approach with responsive breakpoints
- Adaptive UI that switches between desktop and mobile layouts
- Touch-friendly interface elements
- WhatsApp-inspired visual design language

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database queries and schema management

## Authentication
- **Replit Auth**: OpenID Connect provider for user authentication
- **Passport.js**: Authentication middleware with OpenID Connect strategy

## File Storage
- **Google Cloud Storage**: Object storage for file uploads and downloads
- **Uppy**: File upload library with dashboard interface and progress tracking

## UI Components
- **Radix UI**: Headless UI primitives for accessible components
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework for styling

## Real-time Communication
- **WebSocket (ws)**: Native WebSocket implementation for real-time messaging
- **TanStack Query**: Server state management and caching

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds