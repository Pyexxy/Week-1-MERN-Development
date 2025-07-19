# Week-1-MERN-Development
# PLP Bookstore – MongoDB Project

## 📖 Project Overview
This project demonstrates the use of MongoDB for managing bookstore data using CRUD operations, advanced queries, aggregation pipelines, and indexing techniques.

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- MongoDB installed locally (or MongoDB Atlas account).
- MongoDB Shell (`mongosh`) or MongoDB Compass.

### 2️⃣ Steps to Run

#### **Using MongoDB Shell:**

1. **Start MongoDB Server:**
```bash
mongod --dbpath C:\data\db
```

2. **Open a New Terminal and Connect:**
```bash
mongosh
```

3. **Switch to Project Database:**
```js
use plp_bookstore
```

4. **Run Insert Script:**
- Copy contents of `insert_books.js` and paste into `mongosh`.

5. **Run Queries Script:**
- Copy commands from `queries.js` and execute them in `mongosh` to test CRUD, advanced queries, and aggregation pipelines.

#### **Using MongoDB Compass (Optional):**
- View inserted documents.
- Run queries via GUI.

### 3️⃣ Project Files
- `insert_books.js`: Script to populate database with 10 books.
- `queries.js`: Contains all MongoDB queries and commands.
- `README.md`: Guide to setup and usage.

### 4️⃣ Expected Outcome
- A functioning MongoDB bookstore database.
- Demonstrated CRUD operations, advanced filtering, aggregation, and indexing.

---

## 📷 Submission
- Upload `insert_books.js`, `queries.js`, and `README.md` to your GitHub repository.
- Include a screenshot of your database in MongoDB Compass or Atlas showing the `books` collection populated with sample data.

---

## ✅ Author
Vincent Kipyegon – MongoDB Developer Essentials Assignment
