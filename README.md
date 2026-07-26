# Baghban – AI Plant Care Assistant

Baghban is an AI-powered plant care assistant that helps users learn about plants and maintain healthy gardens. It provides reliable gardening guidance through an intelligent chatbot with bilingual support in English and Urdu.

## Problem Statement

Many home gardeners and beginners find it difficult to access reliable and easy-to-understand information about plant care. Gardening advice is often scattered across multiple websites, making it time-consuming to find accurate information.

Baghban solves this problem by providing a single platform where users can ask gardening questions and receive instant AI-powered guidance about watering, sunlight, soil, fertilizers, seasonal care, and general plant maintenance.

**Target Users**

- Home gardeners
- Students
- Plant enthusiasts
- Beginner gardeners
- Families maintaining home gardens

---

# Live Demo

**Deployed Application**

https://baghban-gbl6dpb4q-jawairiamushtaq1.vercel.app/

---

# Features

- AI-powered gardening assistant
- Plant care guidance
- Watering recommendations
- Sunlight requirements
- Soil recommendations
- Fertilizer suggestions
- Seasonal care tips
- Garden maintenance advice
- Information about common garden plants
- Natural language conversations
- Bilingual support (English and Urdu)
- Responsive design for desktop and mobile devices
- Fast AI-generated responses

---

# AI Feature

Baghban includes an AI gardening assistant that answers users' questions related to plants and gardening.

### Capabilities

- Provides plant care recommendations
- Suggests watering schedules
- Recommends suitable sunlight conditions
- Advises on soil and fertilizer selection
- Shares seasonal gardening tips
- Explains common plant problems
- Supports conversations in both English and Urdu
- Restricts responses to gardening-related topics

### System Prompt

```text
You are Baghban, an AI gardening assistant.

Your purpose is to help users care for plants by providing accurate, beginner-friendly, and practical gardening advice.

Guidelines:

- Answer only plant and gardening-related questions.
- Support both English and Urdu.
- Keep responses clear, concise, and easy to understand.
- Provide watering, sunlight, soil, fertilizer, pruning, and seasonal care recommendations whenever relevant.
- If a question is unrelated to gardening, politely explain that Baghban is designed only for plant care assistance.
- Never generate harmful, misleading, or unsafe advice.
- Encourage sustainable gardening practices.
```

---

# Technologies Used

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## AI

- Google Gemini API
- Gemini 2.5 Flash

## Development Tools

- Google Stitch (UI Design)
- Visual Studio Code
- Git
- GitHub

## Deployment

- Vercel

---

# Screenshots

## Home Screen

![Home Screen](Screenshots/home.png)

```text
/screenshots/home.png
```

---

## AI Chat Assistant

![Chatbot screen](Screenshots/chatbot.png)

```text
/screenshots/chatbot.png
```

---

## Plant Information Screen

![Plant details Screen](Screenshots/plant_details.png)

```text
/screenshots/plant_details.png
```

---

## Reminders

![Reminder Screen](Screenshots/reminder.png)

```text
/screenshots/remider.png
```

---

# Project Structure

```text
Baghban/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

# Getting Started

## Prerequisites

- Node.js (v18 or later)
- npm

## Installation

Clone the repository.

```bash
git clone https://github.com/yourusername/baghban.git
```

Navigate to the project folder.

```bash
cd baghban
```

Install dependencies.

```bash
npm install
```

Create a `.env` file and add your Gemini API key.

```env
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```text
http://localhost:5173
```

---

# Production Build

Build the application.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

# License

This project was developed for educational purposes.

---

# Author

Jawairia Mushtaq

BS IT
