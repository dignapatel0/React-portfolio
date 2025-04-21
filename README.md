# React Portfolio with Express

This project showcases a portfolio built using React for the front-end and Express for the back-end. It includes live links to both the front-end and back-end applications.

## Live Demo

- **Backend**: https://my-portfolio-express-app.onrender.com/admin/login
- **Frontend**: https://react-portfolio-digna-patel.vercel.app

### ⚠️ Important Note

> **Please click the backend link first** to wake up the Render server:
>
> 👉 https://my-portfolio-express-app.onrender.com/admin/login
>
> After that, open the React portfolio site:
>
> 👉 https://react-portfolio-digna-patel.vercel.app

## Project Overview

This project consists of two parts:

1. **Frontend**: Built using React, this serves as the user-facing part of the portfolio. It displays sections such as About, Experience, Projects, and Skills.
   
2. **Backend**: Built with Express, the backend provides an API to manage portfolio data (such as adding experiences, projects, etc.). The admin can log in and manage the content for the portfolio.

### Key Features:

- **Frontend**:
  - Styled with custom CSS and React components
  - Dynamic data fetching from the backend API
  - Sections: About, Experience, Projects, Skills

- **Backend**:
  - Admin panel for adding/editing portfolio content
  - API endpoints for managing data (e.g., experiences, projects)
  - User authentication for admin access

## Technologies Used

- **Frontend**:
  - React
  - CSS (Custom Styling)
  - React Router (if applicable)
  - React Icons

- **Backend**:
  - Express.js
  - MongoDB (or any database used in your backend)
  - Authentication (JWT or session-based)

## Installation Instructions

1. Clone the repository

   ```bash
    git clone https://github.com/dignapatel0/React-portfolio
2. Navigate to project directory
    ```bash
    cd React-portfolio
3. Install dependencies
    ```bash
    npm install
4. Set up environment variables
    ```bash
    cp .env.example .env
5. Start the development server
    ```bash
    npm run dev