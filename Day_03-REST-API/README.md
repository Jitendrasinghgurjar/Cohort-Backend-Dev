# 📝 Notes REST API (Day 3: REST APIs and HTTP Methods)

This is a simple **Express.js** project demonstrating **REST APIs** and **HTTP methods** like `GET` and `POST` using **Postman** for testing.

---

## 🚀 Features
- Simple server built with **Express.js**
- `GET` routes for static pages
- `POST` route for adding notes
- Data handling using `req.body`

---

## 📂 Project Structure

DAY_03-REST-API/
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
├── Notes.md

## 🛠️ Installation & Setup

1. **Clone the repository**  

   git clone https://github.com/Jitendrasinghgurjar/Cohort-Backend-Dev
Navigate into the project folder


cd Cohort-Backend-Dev

Install dependencies


npm install express

Run the server


node server.js
📌 API Endpoints


1️⃣ GET /home
Returns a home page message.
Example Response:

this is home page


2️⃣ GET /about
Returns an about page message.
Example Response:

this is about page


3️⃣ POST /notes
Adds a new note to the server.



Request Body (JSON)

json
{
  "title": "test-title",
  "description": "test-content"
}


Example Response:

json
{
  "message": "Notes added successfully"
}


📬 How to Test with Postman
Open Postman

Create a POST request to:

http://localhost:3000/notes
Go to Body → raw → JSON and enter:

json


{
  "title": "test-title",
  "description": "test-content"
}
Click Send — You should see:



json
{
  "message": "Notes added successfully"
}



📚 Learning Concepts
req.body → For sending JSON data in POST requests

req.query → For sending optional URL parameters

req.params → For sending path parameters



Understanding GET, POST, PATCH, DELETE



🖥️ Tech Stack
Node.js

Express.js

Postman (for testing)

