# JWT Authentication System

A simple full-stack authentication application built using React and Node.js. It allows users to register, log in, and access a protected dashboard using JSON Web Tokens (JWT).

## Features

- User registration
- User login and credential validation
- Password hashing using bcrypt
- JWT token generation and verification
- Protected API routes
- React frontend with Register, Login, and Dashboard pages
- Logout functionality

## Technologies Used

**Frontend**
- React
- Vite
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- CORS
- dotenv

## Project Structure

```text
JWT-Authentication/
├── backend/
│   ├── middleware/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd JWT-Authentication
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
JWT_SECRET=your_private_secret_key
```

Use your own private secret key.

Start the backend:

```bash
npm run dev
```

The backend runs at `http://localhost:5000`.

### 3. Set up the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| GET | `/api/auth/protected` | Access a protected route using a valid JWT |

## Authentication Flow

1. A user registers with a username and password.
2. The backend hashes the password before storing it.
3. The user logs in with their credentials.
4. The backend returns a JWT after successful login.
5. The frontend uses the token to access the protected dashboard.
6. Logging out removes the token from browser storage.

## Important Note

This demonstration stores users in an in-memory array. User accounts are cleared when the backend restarts. A persistent database is required for permanent user storage.

## License

This project is intended for learning and demonstration purposes.