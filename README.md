# 📚 Bookstore REST API

A full-featured RESTful API for managing a bookstore with user authentication and role-based authorization. Built with Node.js, Express, MongoDB, and JWT. This API allows users to register, log in, and perform CRUD operations on books they've created.

## 🚀 Features

- JWT-based Authentication
- User Registration and Login
- CRUD operations on books
- Only book creators can update/delete their books
- MongoDB for data persistence
- Modular folder structure (MVC pattern)

## 🗂 Folder Structure


backend/
├── config/             # MongoDB connection
│   └── db.js
├── controller/         # Logic for API endpoints
│   └── bookController.js
├── middleware/         # Auth middleware
│   └── authMiddleware.js
├── routes/             # Routes for auth and books
│   ├── authRoutes.js
│   └── bookRoutes.js
├── schema/             # Mongoose models
│   ├── bookModel.js
│   └── userModel.js
├── .env                # Environment variables
├── package.json
└── server.js           # Entry point


## 📦 Installation

1. Clone the repo

git clone [https://github.com/your-username/bookstore-api.git](https://github.com/your-username/bookstore-api.git)
cd bookstore-api/backend

2. Install dependencies

npm install



3. Create `.env` file

MONGO_URI=mongodb+srv://eshakar001:J8JKYdK44q423Ll8@cluster0.kcxp63f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=64f692b7b5d92162364a1976b5641e9446fc0eafb7d89a2fec3d840bb6d66122f12fd0bf55e927ddc6f2991557be3bc0052869cfb76c60eb1d34f7201ca6fc44
PORT=3000



4. Run the app

npm run dev

## 🔐 Authentication Endpoints

| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| POST   | /auth/register   | Register new user       |
| POST   | /auth/login      | Login and get JWT token |

## 📚 Book Endpoints (Protected)

You must send JWT in the `Authorization` header as `Bearer <token>`

| Method | Endpoint      | Description                |
|--------|----------------|----------------------------|
| GET    | /books         | Get all books              |
| GET    | /books/:id     | Get a book by ID           |
| POST   | /books         | Create a new book          |
| PUT    | /books/:id     | Update book (owner only)   |
| DELETE | /books/:id     | Delete book (owner only)   |

## 🧪 Example API Calls (Using curl)

Register:

curl -X POST [http://localhost:3000/auth/register](http://localhost:3000/auth/register)&#x20;
-H "Content-Type: application/json"&#x20;
-d '{"email":"[test@example.com](mailto:test@example.com)", "password":"123456"}'


Login:

curl -X POST [http://localhost:3000/auth/login](http://localhost:3000/auth/login)&#x20;
-H "Content-Type: application/json"&#x20;
-d '{"email":"[test@example.com](mailto:test@example.com)", "password":"123456"}'

{
  "_id": "68651df039ce14d7442da846",
  "title": "As you like it",
  "author": "William Shakespeare",
  "genre": "Romantic",
  "publishedYear": 1842,
  "userId": "68651be639ce14d7442da83f",
  "__v": 0
}



curl -X POST [http://localhost:3000/books](http://localhost:3000/books)&#x20;
-H "Authorization: Bearer <TOKEN>"&#x20;
-H "Content-Type: application/json"&#x20;
-d '{"title":"1984", "author":"George Orwell", "genre":"Dystopian", "publishedYear":1949}'


## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv

## 🛡️ Security & Best Practices

- Passwords hashed using bcrypt
- JWT secret stored in `.env` file
- `.env` is added to `.gitignore`
- Authorization enforced on book updates/deletions

 🧱 Future Improvements

- Swagger/OpenAPI docs
- Book search and pagination
- Roles and permissions
- Jest tests for controllers and middleware

Postman Link: https://lucioteam.postman.co/workspace/Lucio_team-Workspace~29fca7d8-6483-4479-8a2c-5905a9f986c8/collection/45675496-5c66af3b-8466-44fa-bf97-fdfffa24a57b?action=share&creator=45675496
