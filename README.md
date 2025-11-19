# 🌻 Sunflower – A Local Skill Exchange Platform

## 📘 Project Overview

**Sunflower** is an interactive web application that allows people to share, learn, and trade skills within their local community.  
Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse skill listings, rate experiences, and connect with local skill providers easily.

---

## 🚀 Live Demo

[Live Demo](https://atik-assignment-nine.web.app/)

---

## 🎯 Purpose of the Project

The main goals of this project are:
- To create a platform for local people to exchange their skills.
- To provide an easy-to-use interface for finding and booking skill sessions.
- To implement secure authentication using Firebase.
- To develop a modern and responsive Single Page Application (SPA) using React Router.

---

## 🛠️ Technologies & Tools Used

### 🧩 Frontend:
- **React.js**
- **React Router DOM**
- **Tailwind CSS / DaisyUI**
- **Firebase Authentication**
- **Animate.css / react-hot-toast / Swiper.js**

---

## 📦 NPM Packages Used

| Package Name | Purpose |
|---------------|----------|
| **react-hot-toast** | For showing toast notifications |
| **swiper** | For hero slider section |
| **animate.css** | For simple and clean CSS animations |
| **firebase** | For authentication and user management |

---

## 🧱 Features

✅ Fully responsive (Mobile, Tablet, Desktop)  
✅ Protected Routes (Skill Details Page)  
✅ Login, Signup, Google Authentication  
✅ Password validation & toggle eye button  
✅ Forgot password feature with Gmail redirect  
✅ Update profile (Name & Photo update using `updateProfile()`)  
✅ Toast notifications for success/error messages  
✅ Skill listings loaded from JSON data  
✅ Extra homepage sections:
   - **Top Rated Providers**
   - **How It Works**
   - **Additional Custom Section (Relevant to the platform) = This section name is : Upcoming Workshops & Events**

---

## Installation & Setup
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---
## 📂 Project Structure
```plaintext
│
├── 📁 public/               # Publicly accessible static files (images, fonts, icons) 
│
├── 📁 src/                  # Main application source code 
│   │
│   ├── 📁 assets/           # Local images, icons, SVGs, and media 
│   ├── 📁 auth/             # Authentication logic and hooks 
│   ├── 📁 components/       # Reusable React components 
│   ├── 📁 context/          # React Context providers for state management
│   ├── 📁 layouts/          # Layouts and structural templates for pages 
│   ├── 📁 pages/            # Next.js page routes / main views 
│   ├── 📁 routes/           # Application routing configuration 
│   ├── 📁 utils/            # Utility functions and helpers 
│   │
│   ├── App.jsx              # Main React application component 
│   └── main.jsx             # Entry point of the React application
│
└── 📦 package.json          # Project dependencies and scripts

```

---

## 🛠️ Deployment

1. **Environment Setup**: Ensure all `.env` variables are properly configured.
2. **Production Build**:
   ```bash
   npm run build
   npm start
   ```
3. **Hosting**: Deploy on platforms like Vercel, Netlify, or AWS.

---

