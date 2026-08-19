# The Subreddit Vibe Check

A full-stack web application that analyzes the sentiment and overall "vibe" of a subreddit based on its hot posts.

## Features

- Search for a subreddit
- Analyze 50 posts
- Client-side sentiment analysis
- Positive / Neutral / Negative classification
- Overall sentiment summary
- Sentiment percentages
- Pagination (10 posts per page)
- Responsive dark-themed UI

## Tech Stack

**Frontend:** React, Vite, JavaScript, CSS, Lucide React  
**Backend:** Node.js, Express.js  
**Sentiment Analysis:** Client-side sentiment analysis library  
**Deployment:** Vercel + Render

## Architecture

```text
User
 ↓
React Frontend
 ↓
Express Backend
 ↓
Data Service
 ↓
50 Posts
 ↓
Client-Side Sentiment Analysis
 ↓
Vibe Summary + Paginated Posts
```
## Project Structure

subreddit-vibe-check/
├── backend/
│   ├── server.js
│   ├── redditService.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md

## Reddit API Status
The project was designed to fetch the top 50 hot posts using Reddit's:

/r/{subreddit}/hot

A Reddit Data API access request was submitted, but Reddit declined the request due to its Responsible Builder Policy and/or insufficient details.

Therefore, the current deployed version uses a representative 50-post dataset. The data-fetching logic is isolated in backend/redditService.js, so the 

Reddit API can be integrated later without changing the core frontend, sentiment analysis, or dashboard.

No unauthorized API access or bypass methods are used.

## Run Locally
## Backend

cd backend

npm install

node server.js

## Frontend

cd frontend

npm install

npm run dev

Create frontend/.env:

VITE_API_URL=http://localhost:5000

## Live Links

Live Demo: https://subreddit-vibe-check-henna.vercel.app/

Source Code: https://github.com/Anjali536/subreddit-vibe-check.git
