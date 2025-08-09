#!/usr/bin/env node

// Custom build script for Vercel deployment
// This script only builds the frontend React app

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('Starting Vercel build for frontend only...');

try {
  // Check if client directory exists
  if (!existsSync('./client')) {
    throw new Error('Client directory not found');
  }

  // Run Vite build which will handle the client build
  console.log('Building frontend with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('✅ Frontend build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
