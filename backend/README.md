MERN Stack Todo App - Backend
A full-stack todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). This repository contains the backend API server.
Features

Authentication System - User registration and login
Task Management - Create, read, update, and delete tasks
JWT Authentication - Secure token-based authentication
CORS Support - Cross-origin resource sharing configured
MongoDB Integration - NoSQL database for data persistence
RESTful API - Clean and organized API endpoints

Tech Stack
Node.js - JavaScript runtime
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
JWT - JSON Web Tokens for authentication
bcrypt - Password hashing
dotenv - Environment variables management
cors - Cross-origin resource sharing

Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas account)
npm or yarn

Installation

Clone the repository
bashgit clone <repository-url>
cd todo-app-backend

Install dependencies
bashnpm install

Set up environment variables
Create a .env file in the root directory and add the following:
envPORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

Environment Variables Explanation:
PORT - Server port (default: 5000)
MONGODB_URI - MongoDB connection string
JWT_SECRET - Secret key for JWT token generation
NODE_ENV - Environment (development/production)
FRONTEND_URL - Frontend application URL for CORS