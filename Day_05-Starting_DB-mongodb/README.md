
📅 Day 5 – 📒 Notes API – Express + MongoDB


📝 Description

Ye ek backend API project hai jo Express.js aur MongoDB ka use karta hai.

Is project ka purpose notes store karna (title, content) hai.

Folder structure real-world industry standards ke hisaab se banaya gaya hai taaki project scalable ho.

⚙ Setup Instructions

1️⃣ Clone & Install


git clone https://github.com/Jitendrasinghgurjar/Cohort-Backend-Dev

cd Cohort-Backend-Dev

npm install

2️⃣ Create .env File

.env file me MongoDB connection string add karo:

MONGODB_URL=mongodb://127.0.0.1:27017/mydatabase


3️⃣ Start Server

npx nodemon server.js

Server http://localhost:3000 par run hoga.

🔗 Database Connection (src/db/db.js)

Mongoose ka use karke MongoDB connect hota hai.

Connection string .env se read hoti hai.

Connection successful hone par "connected to mongodb" log hota hai.



const mongoose = require('mongoose');
require('dotenv').config();


function connectToDB(){
   
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.error(err));
}

module.exports = connectToDB;



🚀 API Endpoints
GET /
Purpose: Test route

Response: "hello world"



POST /notes
Purpose: New note create karta hai

Request Body Example:

json
{
  "title": "First Note",
  "content": "This is my first note."
}


Output: Title & content console me print hota hai.



🛠 Tech Stack
Node.js – Backend runtime

Express.js – API framework

MongoDB – NoSQL database

Mongoose – ODM library

dotenv – Environment variables