🎭 Facial Expression Detection

A React-based web application that detects human facial expressions (like happy, sad, angry, surprised, neutral, etc.) in real-time using Face API.js.

---
🚀 Features

Real-time facial expression detection using webcam.

Supports multiple emotions: Happy, Sad, Angry, Surprised, Neutral, Fearful, Disgusted.

Built with React + Face API.js.

Lightweight and runs directly in the browser (no backend required).


---



🛠️ Tech Stack

React.js – Frontend framework

Face API.js – Face detection & expression recognition

JavaScript (ES6+)

HTML5 & CSS3


---




⚙️ Installation & Setup

Clone the repository

git clone https://github.com/Jitendrasinghgurjar/Cohort-Backend-Dev
cd Cohort-Backend-Dev


Install dependencies

npm install

---


Download models and place them in /public/models folder

Models can be downloaded from face-api.js models repo.

Start the development server

npm run dev


Open in browser:

http://localhost:3000


---



🎯 How It Works

The app uses your webcam feed.

Face API.js detects the face and analyzes landmarks.

The face expression model classifies emotions and shows the most probable one.



---




📂 Project Structure
facial-expression-detection/
│── public/
│   └── models/          # Pre-trained models (tinyFaceDetector, landmarks, expressions)
│── src/
│   ├── components/
│   │   └── FacialExpression.jsx
│   └── App.js
│── package.json
│── README.md



---



✨ Future Improvements

Add bounding box around face with detected emotion label.

Support for multiple faces simultaneously.

Store emotion data for analytics.


---




👨‍💻 Author

Jitendra Singh Gurjar

💼 Aspiring Full-Stack Developer

🌐 LinkedIn Profile (https://www.linkedin.com/in/jitendra-singh-gurjar-b8a103302/)

📧 23jitugurjar@gmail.com