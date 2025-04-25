# Job Tracking Backend

This repository contains the backend for the **Job Tracking Application**, a Node.js and Express-based REST API for managing job application data. The backend is designed to handle CRUD operations (Create, Read, Update, Delete) for job applications and is connected to a MongoDB database for data persistence.

If you're looking for the **frontend repository**, you can find it here:  
[Job Tracking Frontend Repository](https://github.com/snehalsaurabh/JobTracker-Client)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
  - [Sample Requests](#sample-requests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The backend provides a RESTful API for managing job applications. It allows users to:

- Add new job applications.
- Retrieve all job applications.
- Update the status or details of a job application.
- Delete job applications.

---

## Features

- CRUD Operations (Create, Read, Update, Delete)
- MongoDB Atlas integration
- Mongoose schema validation
- Environment-based configuration
- CORS support
- Error handling middleware

---

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- nodemon

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm
- MongoDB Atlas

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-tracking-backend.git
   cd job-tracking-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory:
```properties
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
NODE_ENV=development
```

### Running the Server

1. Start the server in development mode:
   ```bash
   npm run dev
   ```

2. Start the server in production mode:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## API Documentation

### Endpoints

| Method | Endpoint     | Description                  |
|--------|-------------|------------------------------|
| POST   | `/api/jobs` | Create a new job application |
| GET    | `/api/jobs` | Retrieve all job applications|
| PUT    | `/api/jobs/:id` | Update a job application |
| DELETE | `/api/jobs/:id` | Delete a job application |

### Sample Requests

#### 1. Create a Job Application
**Request**:
```http
POST /api/jobs
Content-Type: application/json

{
  "company": "Google",
  "role": "Software Engineer",
  "status": "Applied",
  "dateApplied": "2025-04-26T00:00:00.000Z",
  "link": "https://careers.google.com",
  "notes": "Excited about this opportunity!"
}
```

#### 2. Retrieve All Job Applications
**Request**:
```http
GET /api/jobs
```

#### 3. Update a Job Application
**Request**:
```http
PUT /api/jobs/:id
Content-Type: application/json

{
  "status": "Interview",
  "notes": "Interview scheduled for next week."
}
```

#### 4. Delete a Job Application
**Request**:
```http
DELETE /api/jobs/:id
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js          # MongoDB connection setup
│   ├── controllers/
│   │   └── jobController.js # Route handlers for job operations
│   ├── models/
│   │   └── Job.js         # Mongoose schema for job applications
│   ├── routes/
│   │   └── jobRoutes.js   # API routes for job operations
│   └── server.js          # Main server file
├── .env                   # Environment variables
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request against the `main` branch of the original repository.
6. Describe your changes and submit the pull request.