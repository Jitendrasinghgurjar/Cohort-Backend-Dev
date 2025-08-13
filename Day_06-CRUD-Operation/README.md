# 📝 CRUD Operation – Project

A simple *Node.js + Express + MongoDB* CRUD API for managing notes.  
Built for practice purposes to understand how to *create, **read, **update, and **delete* data in MongoDB using Mongoose.

---

## 🚀 Features
- 
➕ *Create* a new note (Title + Content)

-📄 *Get all* notes

- ✏ *Update* an existing note

- ❌ *Delete* a note

- 📦 MongoDB integration using *Mongoose*

- ⚡ JSON-based REST API

---


## 🛠 Tech Stack

- *Node.js*

- *Express.js*

- *MongoDB* (Mongoose ODM)

- *dotenv* (Environment Variables)

---


## 📂 Project Structure
├── src
│ ├── db
│ │ └── db.js # MongoDB connection
│ ├── models
│ │ └── note.Model.js # Note schema & model
├── server.js # Main application entry point
├── .env # Environment variables
├── package.json
└── README.md





---

## ⚙ Installation & Setup

1. *Clone this repository*
```bash
git clone https://github.com/Jitendrasinghgurjar/Cohort-Backend-Dev
cd Cohort-Backend-Dev
Install dependencies



npm install
Set up .env file


MONGODB_URL=mongodb://127.0.0.1:27017/crud
PORT=3000
Start the server



npx nodemon server.js


📌 API Endpoints


Method	Endpoint	Description


POST	/notes	Create a new note


GET	/notes	Get all notes


PATCH	/notes/:id	Update a note by ID


DELETE	/notes/:id	Delete a note by ID

📬 Example Request (Create Note)


POST http://localhost:3000/notes

{
    "title": "My First Note",
    "content": "This is a practice note."
}



Response

{
    "message": "note create successfully"
}


🎯 Learning Goals
Understand basic CRUD operations with MongoDB

Practice REST API development with Express

Learn to structure Node.js projects for scalability