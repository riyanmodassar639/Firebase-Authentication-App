# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler# 🔐 Firebase Authentication Notes App

## Overview

Firebase Authentication Notes App is a modern React application built with **React**, **Vite**, and **Firebase Authentication**. The project implements a complete user authentication system, allowing users to sign up, log in, reset their passwords, and securely access the application. After successful authentication, users are redirected to the home page where their email is displayed.

---

## Features

* User Registration with Email & Password
* Secure User Login
* Firebase Authentication Integration
* Forgot Password (Password Reset Email)
* Logout Functionality
* Protected Home Page
* Display Logged-in User's Email
* Firebase Error Handling
* Responsive User Interface
* Fast Performance with Vite

---

## Technologies Used

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM

### Backend / Authentication

* Firebase Authentication

---

## Project Structure

```text
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── firebase/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/riyanmodassar639/firebase-auth-notes-app.git
```

Navigate to the project

```bash
cd firebase-auth-notes-app
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Firebase Setup

1. Create a project in **Firebase Console**.
2. Enable **Email/Password Authentication**.
3. Create a `firebase.js` configuration file.
4. Add your Firebase configuration keys.
5. Start the application using `npm run dev`.

---

## Future Improvements

* Google Sign-In
* GitHub Authentication
* Email Verification
* User Profile Management
* Firestore Database Integration
* Notes CRUD Functionality
* Dark Mode
* Remember Me Option

---

## Live Demo

🌐 

---

## Author

**Riyan Modassar**

GitHub:
https://github.com/riyanmodassar639

---

## License

This project is created for learning, portfolio, and full-stack web development practice.


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
