# Portfolio Website - API Contracts

## Overview
Currently implemented as frontend-only with mock data. This document outlines the contracts for potential backend integration.

## Mock Data Location
- **File**: `/app/frontend/src/data/mockData.js`
- **Sections**: About, Skills, Experience, Contact

## Potential API Endpoints (Future Implementation)

### 1. Contact Form Submission
```
POST /api/contact
```
**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### 2. Portfolio Data Retrieval
```
GET /api/portfolio
```
**Response:**
```json
{
  "about": { ... },
  "skills": { ... },
  "experience": { ... },
  "contact": { ... }
}
```

## Current Mock Implementation
- Contact form shows alert on submission
- All content is static from mockData.js
- No backend persistence required for basic functionality

## Frontend Integration Points
- Contact form submission in `ContactSection.js`
- Data fetching in main `Portfolio.js` component
- Environment variables already configured for backend URL

## Notes
- Current implementation is fully functional without backend
- Backend integration optional for contact form processing
- All animations and interactions work client-side