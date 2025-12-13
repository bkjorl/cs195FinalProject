# Daily Journal

A simple and streamlined app to write reflections about your day

---

## Overview

Daily journal is meant to help people keep their thoughts organized. It is an app that alllows you to input journal entries and track them over time. It is meant to be an easier way to journal than going
through the hassle of writing down all your thoughts and is meant to get people journaling more. I also wanted to make it so you an add as many entries as you wanted for a day so that there was not pressure to get thr first entry "right".

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

I implemented a login feature to allow users to create an account and save their journal entires without worring about other people seeing them. This took me a lot of time and I spent used the youtube tutorials [https://www.youtube.com/watch?v=2-6K-TMA-nw](https://www.youtube.com/watch?v=2-6K-TMA-nw) and [https://www.youtube.com/watch?v=8QgQKRcAUvM](https://www.youtube.com/watch?v=8QgQKRcAUvM) to help me create and understand how to create and store log in information.

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
    /api
      journal.js
      users.js
    /components
      EntryList.jsx
      Journal.jsx
      JournalEntry.jsx
      LoginSignup.jsx
      LoginSignup.css
    /contexts
      AuthContext.jsx
    App.css
    App.jsx
    index.css
    main.jsx
    index.html

/backend
  /models
    Journal.js
    User.js
  /routes
    journals.js
    users.js
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
### **GET /api/journals/user/:userId**

Returns journal entries for a specific user. This is what is used to create the entrylist.

### **POST /api/journal*

Creates a new journal entry.
Body example:

```json
{
  "userId": "userId object",
  "entry": "Journal entry here"
}
```

### **DELETE /api/journal/:id**

Deletes journal entries.

> authentication is used through userId for getting journal entries and is also included in posting entries.

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

---

# 🧠 Reflection

*(This section is required for grading.)*

### **1. What was the hardest part of this project?**

All of this project was really difficult for me. I would say the frontend is definitely where I struggled the most as I had trouble getting things to work
properly. I think this was in part due to me being on a time crunch and never having a react app that we deployed with multiple pages. It took me quite a bit of time to 
sort out how to get the navigation working. 

### **2. What are you most proud of?**

I am proud of how much I learned on this project. I spent a lot of time working on getting the login stuff working and it was very difficult, but it feels really good that I was able to figure it out. 

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

* Used Claude to help debug thoughout the project (also noted in the files)
* debugging delete journal entry route, api, and in Journal.jsx
* debugging scrollbar in Entrylist.jsx
* debugging Journal.jsx loading, error handling, etc.
* debugging JournalEntry.jsx entry text
* debugging LoginSignup
* debugging AuthContext and how that flowed as a whole
* understanding and debugging current date variable 
