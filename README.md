# 💰 Finance Dashboard Backend with Access Control

## 📌 Project Overview
This project is a backend-driven finance dashboard system designed to manage financial records and provide summary insights through APIs.

It supports user management, role-based access control, financial transactions, and dashboard analytics.

This project was adapted from a base finance dashboard template and enhanced with backend logic, APIs, and access control mechanisms as per assignment requirements.

---

## 🚀 Features

### 👤 User & Role Management
- Create and manage users
- Assign roles:
  - Admin → Full access
  - Analyst → View + insights
  - Viewer → Read-only access
- Enable/disable users

---

### 💵 Financial Records Management
- Create transactions
- View transactions
- Update transactions
- Delete transactions
- Filter by:
  - Date
  - Category
  - Type (income/expense)

---

### 📊 Dashboard APIs
- Total income
- Total expenses
- Net balance
- Category-wise totals
- Recent transactions
- Trends and analytics

---

### 🔐 Access Control (RBAC)
- Middleware-based authorization
- Role-based restrictions:
  - Viewer → Read only
  - Analyst → Read + insights
  - Admin → Full CRUD access

---

### ⚙️ Validation & Error Handling
- Input validation
- Proper status codes
- Error handling for invalid requests

---

## 🛠 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend:
- React.js
- Vite
- Redux Toolkit

---

## 📂 Project Structure


finance-app/
│
├── client/ # Frontend (React)
├── server/ # Backend (Node + Express)
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/anu2005-debug/finance-dashboard-final.git

cd finance-app


---

### 2️⃣ Backend Setup

cd server
npm install


Create `.env` file:

MONGO_URL=mongodb://127.0.0.1:27017/financeDB
PORT=9000


Run backend:

npm run dev


---

### 3️⃣ Frontend Setup

cd ../client
npm install


Create `.env` file:

VITE_BASE_URL=http://localhost:9000


Run frontend:

npm run dev


---

## 🌐 API Endpoints

### User Routes
- POST `/api/users/create`
- GET `/api/users`

---

### Transaction Routes
- GET `/transaction/transactions`
- POST `/transaction/transactions`

---

### KPI & Product Routes
- GET `/kpi/kpis`
- GET `/product/products`

---

## 🧠 Assumptions

- Roles are predefined (admin, analyst, viewer)
- MongoDB is running locally
- Authentication is simplified for demonstration

---

## ✨ Improvements Added

- Role-based access control (RBAC)
- User management APIs
- Secure route handling using middleware
- Improved backend structure
- Integration with frontend dashboard

---

## 📌 Notes

- This project is for evaluation purposes
- Focus is on backend design and API structure
- Not intended as production-ready system

---

## 👩‍💻 Author

**Anushka Keshri**
