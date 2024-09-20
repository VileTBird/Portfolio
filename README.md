# Portfolio CRUD App

**A personal portfolio web application with user authentication, allowing users to add, edit, and delete projects and blog posts.** This app is built using Node.js, Express, Handlebars, and MongoDB, with full CRUD functionality and secure user authentication.

## Features
- **User Authentication**: Users can sign up, log in, and manage their own content.
- **CRUD Functionality for Projects & Blogs**:
  - **Create**: Users can create new projects and blog posts.
  - **Read**: Users can view all projects and blog posts.
  - **Update**: Users can edit their existing projects and blogs.
  - **Delete**: Users can delete their projects and blogs.
- **Responsive UI**: The app is built with Bootstrap for responsive design.

## Tech Stack
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **Handlebars (HBS)**: Templating engine for rendering dynamic content.
- **MongoDB**: NoSQL database for storing users, projects, and blogs.
- **Passport.js**: Authentication middleware for managing user sessions.
- **Axios**: Promise-based HTTP client for making API requests.
- **Bootstrap**: CSS framework for responsive design.
- **Font Awesome**: For icons used throughout the app.

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-crud-app.git
cd portfolio-crud-app

```

## Project Structure

```plaintext
Client
│
└─── Content
     └─── Scripts
          └─── app.js
└─── node_modules

Server
│
└─── Config
     └─── app.js
     └─── authCheck.js
└─── Controllers
     └─── auth.js
     └─── blog.js
     └─── index.js
     └─── media.js
└─── Models
└─── Routes
     └─── auth.js
     └─── blog.js
     └─── index.js
     └─── media.js
└─── Views
     └─── auth
     └─── blog
     └─── media
     └─── unusedViews
     └─── about.hbs
     └─── cv.hbs
     └─── error.hbs
     └─── index.hbs
     └─── layout.hbs
```
