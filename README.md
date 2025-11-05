````markdown
<div align="right">

<a href="README.pt-br.md" alt="Traduzir para o Português Brasil">Traduzir PT-BR</a>

</div>

<p align="center">
  <img width="200px" alt="Campus Fitness App" title="Campus Fitness App" src="./mobile/src/assets/series.svg" />

  <h1 align="center">Campus Fitness App (Ignite Gym Clone)</h1>
</p>

A modern **React Native fitness application** built with **Expo SDK 48**, serving as an open-source clone and enhancement of the _Ignite Gym_ project.  
This app focuses on user authentication, personalized exercise tracking, and history management — all within a responsive, NativeBase-powered UI.

It integrates key technologies such as **React Navigation**, **React Hook Form**, **AsyncStorage**, **Axios**, and **JWT Authentication**, delivering a scalable, maintainable, and production-ready architecture.

---

## 🧭 Table of Contents

- [🎥 Demo](#-demo)
- [🎨 UI Overview](#-ui-overview)
- [⚙️ Features](#️-features)
- [🧠 Technical Learning](#-technical-learning)
- [💡 Technologies Used](#-technologies-used)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end)
  - [Mobile](#mobile)
- [🌎 License](#-license)
- [✒ Author](#-author)

---

## 🎥 Demo

_Implementation video (based on Ignite Gym baseline):_  
[🎞 Watch Demo](https://github.com/VagnerNerves/ignitegym-rn/assets/40831841/2ff96116-98e4-4641-9df6-7fa2c843e7b6)

---

## 🎨 UI Overview

- **Login Screen**

  - Secure authentication via email & password.
  - Option to register for new users.

- **Registration Screen**

  - Simple form using `react-hook-form` + `yup` for validation.
  - Upload profile picture and register instantly.

- **Main Dashboard**

  - Displays categorized exercises.
  - Each exercise includes demonstration video and execution guide.

- **Workout History**

  - Complete timeline of past exercise sessions.
  - Displays workout duration and repetition logs.

- **Profile Screen**
  - Manage personal information and avatar updates.
  - Change password and sync profile to cloud storage.

---

## ⚙️ Features

- ✅ User authentication (JWT + refresh token)
- ✅ Persistent login with AsyncStorage
- ✅ Exercise tracking with local caching
- ✅ Real-time form validation
- ✅ API data fetching with Axios
- ✅ Theme management with NativeBase
- ✅ Dynamic route protection (AuthRoutes & AppRoutes)
- ✅ Integration-ready backend (Node.js Express)

---

## 🧠 Technical Learning

During development, the following concepts were explored and implemented:

- ⚡ Deep integration of **NativeBase** UI theming
- ⚙️ Custom context management with React Context API
- 🔄 Persistent session logic via **AsyncStorage**
- 🧾 Type-safe form handling using **React Hook Form** and **Yup**
- 🪄 File management using **Expo FileSystem**
- 📸 Image uploads using **Expo ImagePicker**
- 🔐 Secure API interaction using **Axios interceptors** with token refresh

---

## 💡 Technologies Used

### 🧱 Core Stack

- **React Native** – Cross-platform UI framework
- **Expo SDK 48** – Unified environment for mobile builds
- **TypeScript** – Strong typing and static analysis
- **NativeBase** – UI component framework
- **React Navigation v6** – Navigation and route handling
- **Axios** – HTTP client with interceptors
- **React Hook Form + Yup** – Validation and controlled inputs
- **AsyncStorage** – Persistent storage

---

## 📂 Folder Structure

```plaintext
mobile/
│
├── assets/                      # Images and static files for Expo
├── src/
│   ├── @types/                  # Global TS types and interfaces
│   ├── assets/                  # App images/icons
│   ├── components/              # Reusable UI components
│   ├── contexts/                # React Context providers
│   ├── dtos/                    # Data models
│   ├── hooks/                   # Custom React hooks
│   ├── routes/                  # App and Auth navigation routes
│   ├── screens/                 # Core application screens
│   ├── services/                # API configuration and requests
│   ├── storage/                 # AsyncStorage management
│   ├── theme/                   # Color and typography theme
│   └── utils/                   # Helper and utility classes
│
└── App.tsx                      # Main entry point
```
````

---

## 🚀 Running the Project

### 🖥 Back-end (Optional)

If you want to use the backend API that the app connects to:

```bash
# Clone repo
git clone https://github.com/VagnerNerves/ignitegym-rn.git

# Navigate to backend directory
cd ignitegym-rn/server

# Install dependencies
npm install

# Run development server
npm run dev
```

Backend uses **Node.js + Express** with JWT authentication and file upload via **Multer**.

---

### 📱 Mobile App

```bash
# Clone project
git clone https://github.com/LesliePaulAjayi/campus-fitness-app.git

# Navigate to mobile directory
cd campus-fitness-app/mobile

# Install dependencies
npm install --legacy-peer-deps

# Start Expo development server
npx expo start
```

> ⚠️ If you face blank screen issues, clear cache:

```bash
expo start -c
```

---

## 🌎 License

This project is licensed under the **MIT License** — free for educational and commercial use.
See the [LICENSE](LICENSE) file for more information.

---

## ✒ Author

<p align="center">
  <img width="200px" alt="Leslie Paul Ajayi" title="Leslie Paul Ajayi" src="https://avatars.githubusercontent.com/u/00000000?s=200&v=4" />
</p>

<h3 align="center">Leslie Paul Ajayi</h3>

<p align="center">
  Software Engineer | IT Student | Creator of <strong>Campus Connect</strong> & <strong>Campus Fitness</strong>
</p>

<div align="center">

[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lesliepaulajayi)](https://www.linkedin.com/in/lesliepaulajayi)
[![Gmail Badge](https://img.shields.io/badge/-lesliepaulajayi@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lesliepaulajayi@gmail.com)](mailto:lesliepaulajayi@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/LesliePaulAjayi)](https://github.com/LesliePaulAjayi)

</div>
```

---

[Back to top](#readme)
