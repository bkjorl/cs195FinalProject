# Daily Journal

A simple and streamlined app to write reflections

---

## Overview

Briefly describe:

Daily journal is meant to help people keep their thoughts organized. It is an app that alllows you to input journal entries and track them over time. It is meant to be an easier way to journal than going
through the hassle of writing down all your thoughts and is meant to get people journaling more. 

---

## 🌐 Live Demo

| Type                         | Link                                                           |
| ---------------------------- | -------------------------------------------------------------- |
| **Frontend (Deployed Site)** | [https://your-frontend-url.com](https://your-frontend-url.com) |
| **Backend (API Base URL)**   | [https://your-backend-url.com](https://your-backend-url.com)   |

> Test these in an incognito window before submission.

---

## ✨ Features

List **3–6 key features**, ideally with short bullets:

* Create, read, update, and delete journal entries
* Responsive UI with reusable components
* Backend API with full CRUD operations
* Data persisted in MongoDB
* Advanced feature: login in and out to keep journal entires private
* Error handling on client + server

### **Advanced Feature**

I implemented a login feature to allow users to create an account and save their journal entires without worring about other people seeing them.

---

## 📸 Screenshots

> Include 2–4 screenshots of your app.
> Use relative paths (e.g., `/screenshots/home.png`) or full URLs.

---

## 🏗️ Project Architecture

Describe how the pieces fit together.

```
/frontend
  /src
    /components
    /pages
    App.jsx
    main.jsx

/backend
  /models
  /routes
  server.js
```

Include a sentence explaining the flow:

> The React frontend communicates with the Express backend through API routes. The backend interacts with MongoDB using Mongoose models, and environment variables are used to store secrets.

---

## 📦 Installation & Setup

### **1. Clone the project**

```bash
git clone [https://github.com/your-username/your-project.git](https://github.com/bkjorl/cs195FinalProject.git)
cd your-project
```

---

### **2. Environment Variables**

Include a `.env.example` file in both repos.

**Backend `.env.example`:**

```
MONGO_URI=your_mongodb_url
PORT=4000
JWT_SECRET=your_secret_if_using_auth
API_KEY=if_using_external_apis
```

**Frontend `.env.example`:**

```
VITE_API_URL=https://your-backend-url.com
```

---

### **3. Install Dependencies**

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

#### Backend:

```bash
cd backend
npm install mongodb
npm install
npm start
```

---

### **4. Running Entire App Locally**

1. Start backend on `http://localhost:3000`
2. Start frontend on `http://localhost:5173`
3. Confirm CORS + API requests are working

---

## 🛠 API Documentation

Document the **main 3–5 routes**:

### **GET /api/resource**

Returns all resources.

### **POST /api/resource**

Creates a new resource.
Body example:

```json
{
  "name": "Example",
  "description": "Text here"
}
```

### **PATCH /api/resource/:id**

Updates a resource.

### **DELETE /api/resource/:id**

Deletes a resource.

> Add additional routes if needed (auth, file uploads, WebSockets, etc.).

---

## 🚀 Deployment Notes

Document where/how you deployed:

### **Frontend**

* Vercel / Netlify
* Explain build command if different (`npm run build`)

### **Backend**

* Render / Railway
* Note environment variable setup


---

## 🎥 Video Walkthrough

**Link to Loom/YouTube:**
[https://your-video-link.com](https://your-video-link.com)

Include quick timestamps if you want extra professionalism:

* **0:00–0:30** Overview
* **0:30–1:30** Core features demo
* **1:30–2:30** Advanced feature
* **2:30–3:00** Technical challenge solved

---

# 🧠 Reflection

*(This section is required for grading.)*

### **1. What was the hardest part of this project?**

All of this project was really difficult for me. I would say the frontend is definitely where I struggled the most as I had trouble getting things to work
properly. I think this was in part due to me being on a time crunch and never having a react app that we deployed with multiple pages. It took me quite a bit of time to 
sort out how to get the navigation working. 

### **2. What are you most proud of?**

Could be a feature, a UI improvement, debugging work, or personal growth.

### **3. What would you do differently next time?**

I think I would make sure I start with a more achievable plan. This was something I worried about, but I did not realize how bad it was even with the planning until
finals week which did not give me a lot of time to fix the scope issues. 

### **4. How did you incorporate feedback from the 12/5 check-in gallery?**

The first thing I realized at the 12/5 check-in gallery was how out of scope my project was. While I was really excited to implement a complicated planner system,
I quickly realized that this was not something that I had the time to do for this final. Based on this I tried to simplify my project with the error from that being I 
could not simplify to a to-do list as we had alsready done that in class, and I was having a lot of trouble figuring out how to do a schedule all on its own. This 
made me pivot quite a bit and go back to my project planning. I had put in their making a journal entry section as part of my original planner function, and I decided to 
focus on this as something I could feasibly do in the timeframe.

Once I realized this my next steps were reorganizing my backend and getting to work on rethinking my original project structure.

---

# Acknowledgments / AI Usage Disclosure

> Include a brief note on tools used (per academic integrity guidelines):

Examples:

* “Used Claude to help troubleshoot a issue I had on PUT function for journal entries not working originally”
* “Used Claude for help writing documentation.”
* “Used VSCode Copilot for autocomplete suggestions.”
