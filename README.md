# User Management System

A comprehensive user management system built with Next.js, featuring authentication, role-based access control, and admin notifications.

## Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Role-based Authorization**: Admin and user roles with different permissions
- **Admin Dashboard**: User management with data tables, search, and filtering
- **Notifications System**: Admins can create and manage notifications
- **Modern UI**: Built with ShadCN UI components and Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)

### MongoDB Setup

You have two options for MongoDB:

#### Option 1: Local MongoDB
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Update `.env.local` with your local connection string

#### Option 2: MongoDB Atlas (Cloud - Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `.env.local` with your Atlas connection string

### Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/userbase
# OR for Atlas: mongodb+srv://username:password@cluster.mongodb.net/userbase

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Usage

### User Registration
- Visit `/signup` to create a new account
- Default role is 'user'
- Admins can be created through the admin dashboard

### Admin Features
- Login with admin credentials
- Access `/admin/dashboard` for user management
- Access `/admin/notifications` for notification management
- Create, edit, and delete users
- Send notifications to specific users or roles

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification
- `GET /api/users` - Get all users (admin only)
- `POST /api/users` - Create user (admin only)
- `PUT /api/users/[id]` - Update user (admin only)
- `DELETE /api/users/[id]` - Delete user (admin only)
- `GET /api/notifications` - Get notifications
- `POST /api/notifications` - Create notification (admin only)
- `PUT /api/notifications/[id]` - Update notification (admin only)
- `DELETE /api/notifications/[id]` - Delete notification (admin only)

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI**: ShadCN UI, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Styling**: Tailwind CSS

## Project Structure

```
app/
├── api/                    # API routes
│   ├── auth/              # Authentication endpoints
│   ├── users/             # User management
│   └── notifications/     # Notification management
├── admin/                 # Admin pages
│   ├── dashboard/         # User management dashboard
│   └── notifications/     # Notification management
├── login/                 # Login page
├── signup/                # Signup page
└── page.tsx              # Home page

lib/
├── models/               # MongoDB models
├── context/              # React context
└── auth.ts              # Authentication utilities

components/
├── ui/                   # ShadCN UI components
└── frontend/             # App-specific components
```
