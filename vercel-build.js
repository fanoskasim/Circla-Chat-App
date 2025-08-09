#!/usr/bin/env node

// Custom build script for Vercel deployment
// This script only builds the frontend React app

import { execSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';

console.log('Starting Vercel build for frontend only...');
console.log('Current directory:', process.cwd());
console.log('Directory contents:', readdirSync('.'));

try {
  // Check current structure and find the correct path
  if (existsSync('./client')) {
    console.log('Found client directory');
  } else if (existsSync('./client/index.html')) {
    console.log('Found client/index.html');
  } else {
    console.log('Directory structure check:');
    if (existsSync('./package.json')) console.log('✓ package.json exists');
    if (existsSync('./vite.config.ts')) console.log('✓ vite.config.ts exists');
    if (existsSync('./client')) console.log('✓ client directory exists');
    else console.log('✗ client directory missing');
  }

  // Run Vite build which will handle the client build based on vite.config.ts
  console.log('Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('✅ Frontend build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
