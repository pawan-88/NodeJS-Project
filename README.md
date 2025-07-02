#  Node.js + TypeScript Authentication API

A secure and modular **Authentication API** built using **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **JWT (JSON Web Token)**.

---

##  Features

✅ User Registration (`/auth/register`)  
✅ User Login (`/auth/login`)  
✅ Protected User Profile (`/profile`)  
✅ Passwords hashed with **bcryptjs**  
✅ JWT-based Authentication  
✅ MongoDB integration via **Mongoose**  
✅ Scalable project structure (controllers, routes, middleware)

---

## 📬 API Endpoints

###  1. Register a New User

**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "Test One",
  "email": "test1@gmail.com",
  "password": "password123"
}
