# ai-content-generator
Frontend assessment – AI content generator built with Next.js


A modern, responsive AI content generation interface built with **Next.js 14**, designed to demonstrate strong frontend fundamentals, clean architecture, and production-ready UI/UX practices.

This project focuses on **responsiveness, accessibility, component reusability, and scalable design**, while simulating real AI workflows using mock APIs.

---

## 🔍 Project Objective

* Demonstrate frontend engineering skills using modern tools
* Build a real world inspired AI content generation interface
* Showcase responsive design, state management, and UI polish
* Follow best practices expected in professional frontend teams

---

## 🚀 Key Features

* **Responsive UI**

  * Mobile first design
  * Optimized for mobile, tablet, and desktop
  * No horizontal scrolling at any breakpoint

* **Dark / Light Mode**

  * Smooth theme transitions
  * Centralized theme state
  * Easily extendable to persistent storage

* **AI Image Generation (Mocked)**

  * Prompt-based generation
  * Configurable image count, aspect ratio, and model
  * Simulated progress and loading states

* **Generation History**

  * Scrollable thumbnail gallery
  * Represents real world usage history
  * Data fetched via mock API

* **Polished UX**

  * Hover effects and transitions
  * Clear empty, loading, and error states
  * Touch friendly interactions

---

## 🧰 Tech Stack

* **Framework:** Next.js 14 (App Router compatible structure)
* **Language:** JavaScript 
* **Styling:**

  * Tailwind CSS (utility-first styling)
  * CSS Modules (scoped, component-level styles)
* **Image Optimization:** Next.js `<Image />`
* **API Simulation:** Next.js API routes

---

## 🛠️ Installation & Setup

### Prerequisites

* Node.js 18+
* npm 

### Steps

```bash
cd ai-content-generator
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
ai-content-generator/
├── components/        
│   ├── Navigation.js
│   ├── InputPanel.js
│   ├── GeneratedContent.js
│   └── HistorySection.js
│
├── pages/
│   ├── api/            
│   │   ├── generate.js
│   │   └── history.js
│   ├── _app.js
│   └── index.js
│
├── styles/             
│   ├── globals.css
│   └── *.module.css
│
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🧩 Component Breakdown

### Navigation

* Branding & layout container
* Dark mode toggle
* Generation progress indicator
* Navigation icons
* User profile placeholder

### Input Panel

* Image / Video tab selector
* Prompt input field
* Generation settings:

  * Number of images
  * Aspect ratio
  * Model selection
* Advanced options (collapsible)
* Generate button with loading & disabled states

### Generated Content

* Responsive image grid
* Optimized image rendering
* Empty and loading states
* Description text container

### History Section

* Scrollable thumbnail list
* Fetches data from `/api/history`
* Designed for scalability and persistence

---

## 🔌 API Endpoints (Mocked)

### `POST /api/generate`

Simulates AI image generation.

**Request Parameters**

* Prompt
* Number of images
* Aspect ratio
* Model name

**Response**

* Array of generated image URLs with metadata

---

### `GET /api/history`

Returns previously generated content.

**Response**

* Thumbnail image list

---

## 📱 Responsive Design Strategy

* **Mobile (320px – 767px)**

  * Single-column layout
  * Simplified controls
  * Stacked navigation

* **Tablet (768px – 1023px)**

  * Two-column layout
  * Balanced spacing

* **Desktop (1024px+)**

  * Full-width two-column layout
  * Max container width: 1600px

---

## 🧪 Testing & Validation

* Browser DevTools (responsive mode)
* Manual window resizing
* Tested across standard breakpoints
* Verified:

  * Layout consistency
  * Button accessibility
  * Image loading performance

---

## 🧼 Code Quality & Best Practices

* Modular, reusable components
* Consistent naming conventions
* Semantic HTML structure
* Accessibility considerations:

  * Alt text
  * Labels
  * ARIA attributes
* Optimized images using Next.js
* Clear separation of concerns

---

## 🎨 Design & Engineering Decisions

* **Tailwind CSS** for rapid, consistent styling
* **CSS Modules** for scoped component styles
* **Mobile-first approach** to ensure usability
* **Mock APIs** to simulate real backend workflows
* **Scalable architecture** ready for real API integration

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/1622e577-21de-4a73-8da8-0d77c7d9f2db" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c9b3520e-f9d1-451e-bd1a-7a0cef893a52" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a31e7431-98c5-4e3e-bec2-41973d9f6270" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/6e265ba2-44b1-475a-abb6-be1e86272d03" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/6e1fbdfa-45fb-45ba-8247-6f08f6c3b86a" />
