# User Authentication and Authorization with Bearer Token

This project is a simple Node.js authentication API built with Express.js, MongoDB, Mongoose, and JWT. It follows a clean MVC structure and demonstrates user registration, login, and protected route access using Bearer tokens.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Postman

## Features

- User registration with hashed password
- User login with JWT generation
- Protected route using Bearer token authentication
- MVC folder structure
- Error handling and basic validation
- Postman collection with sample requests and responses

## Project Structure

```text
config/
controllers/
middleware/
models/
routes/
views/
app.js
server.js
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file based on `.env.example`.

3. Add your MongoDB connection string and JWT secret:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/project2_jwt
JWT_SECRET=your_secret_key
```

4. Start the project:

```bash
npm run dev
```

## API Endpoints

### `POST /api/auth/register`

Registers a new user.

Request body:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Success response:

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "65f2f63ab11d6c0012345678",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### `POST /api/auth/login`

Logs in an existing user and returns a JWT.

Request body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Success response:

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

### `GET /api/auth/me`

Returns the logged-in user's information from the token.

Headers:

```text
Authorization: Bearer your_jwt_token
```

Success response:

```json
{
  "message": "User fetched successfully",
  "user": {
    "userId": "65f2f63ab11d6c0012345678",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

## Postman Documentation

Import `postman_collection.json` into Postman to test all endpoints with sample requests and responses.

## Deployment

Deploy the server on Render:

1. Push this project to GitHub.
2. Create a new Web Service in Render.
3. Connect the GitHub repository.
4. Render should detect the project automatically. Use:

```bash
Build Command: npm install
Start Command: npm start
```

5. Add these environment variables in Render:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

6. `PORT` is not required on Render because Render provides it automatically.
7. If you use MongoDB Compass locally, switch `MONGO_URI` in Render to MongoDB Atlas or another hosted MongoDB database.
8. Use the start command:

```bash
npm start
```

## Submission Checklist

- Push source code to GitHub
- Deploy API to Render
- Export Postman collection
- Submit GitHub URL and Render URL
