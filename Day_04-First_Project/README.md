📝 Notes API — Mini Project (Day 4)

🚀 Overview

A simple Notes API built using Express.js to practice basic RESTful API operations.
This project is part of my daily coding practice to strengthen backend fundamentals and prepare for real-world projects.

✨ Features
➕ Create a Note — Add new notes with a title and content

📄 Get All Notes — Retrieve a list of all saved notes

🗑 Delete a Note — Remove a note by its index

✏ Update a Note — Edit the title of an existing note

🛠 Tech Stack
Node.js — Runtime environment

Express.js — Web framework

📦 Installation & Setup



# 1️⃣ Clone the repository
git clone https://github.com/Jitendrasinghgurjar/Cohort-Backend-Dev


# 2️⃣ Install dependencies
npm install


# 3️⃣ Start the server
node server.js


📌 API Endpoints

Method	Endpoint	Description	Example Body


GET	/	Welcome route	—


POST	/notes	Create a new note	{ "title": "My Note", "content": "Hello World" }


GET	/notes	Get all notes	—


DELETE	/notes/:index	Delete a note by index	—


PATCH	/notes/:index	Update a note’s title	{ "title": "Updated Title" }


🧪 Testing
You can test this API using:

Postman

Thunder Client (VS Code extension)


📚 Learning Outcomes
Understanding CRUD operations

Working with req.params and req.body

Handling JSON data in Express

Practicing REST API structure

