# 🎓 Quiz Web App — Interactive Learning Platform

An interactive full-stack quiz application that allows users to register, log in, take topic-based quizzes, and review results with detailed feedback. Built with **React**, **Spring Boot**, and **PostgreSQL**.


## 📸 Screenshots

### 🧾 Quiz List
![Снимок экрана (828)](https://github.com/user-attachments/assets/475729f5-97b7-45c3-994a-5e9ce41c2b70)

### 🧠 Active Quiz with Timer
![Снимок экрана (832)](https://github.com/user-attachments/assets/3fc98078-26fd-429f-b50f-3295b45adc46)

### ✅ Results Page
![Снимок экрана (827)](https://github.com/user-attachments/assets/3a740c34-9998-4cfb-b334-fa65edc8d4d7)

### 🔐 Authentication
![Снимок экрана (830)](https://github.com/user-attachments/assets/cd5c7a7a-5527-494a-ae30-1972017f193f)
![Снимок экрана (832)](https://github.com/user-attachments/assets/cb6d5429-40ad-421a-868e-6d50f9c740fb)

### ⚙️ Admin Panel
![Снимок экрана (832)](https://github.com/user-attachments/assets/33cc031d-66f9-47b0-8f17-c3ce4f12a287)


## 🚀 Features

✅ **User Authentication** (Register/Login)  
🧩 **Take quizzes** on various topics  
⏱️ **Per-question countdown timer**  
🟢 **Correct / Incorrect answer feedback** after each quiz  
📊 **Track completed quizzes and results**  
📁 **Admin dashboard** to create and manage quizzes  
🎨 **Clean, responsive UI** (mobile-friendly)  
🔐 **Secure backend API** with user roles and validations


## 🛠️ Tech Stack

| Layer         | Technology             |
|---------------|-------------------------|
| Frontend      | React, CSS Modules      |
| Backend       | Spring Boot (REST API)  |
| Database      | PostgreSQL              |
| Auth & Tokens | JWT                     |
| API Testing   | Postman                 |


🧪 How to Run the Project
1. Clone the Repository
bash
Копировать
Редактировать
git clone https://github.com/your-username/quiz-app.git
2. Set Up PostgreSQL
Create a PostgreSQL database: quizdb

Update database credentials in backend/src/main/resources/application.yml


spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/quizdb
    username: your_user
    password: your_password
3. Run Backend

cd backend
./mvnw spring-boot:run
4. Run Frontend

cd frontend
npm install
npm start
Access the app at http://localhost:3000

📬 API Testing with Postman
Used Postman for:

Testing authentication flows (Login/Register)

Creating and verifying quizzes

Submitting user scores

Checking quiz results and user roles

🔒 Authentication Flow
JWT-based authentication

Role-based access for Users and Admins

Secure endpoints using Spring Security

✨ Future Improvements
📈 Add a Leaderboard to compare top users

📚 Add more question types (image-based, true/false, drag & drop)

🌍 Multi-language support

📱 Native mobile app version (React Native)

📄 License
This project is open source and free to use. Contributions welcome!

👤 Author
Shugyla

📧 shugyla.assan@gmail.com
