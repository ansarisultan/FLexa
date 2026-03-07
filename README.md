## FLexa – Your Virtual Assistant 🤖🎤  
*A part of the Funclexa Project*

FLexa is an advanced AI-powered **voice assistant web application** that allows users to interact using natural voice commands. It supports **English and Hindi**, performs real-world actions, and answers general questions intelligently using an AI language model.

---

## 🚀 Features

- 🎤 Voice input using Web Speech API  
- 🔊 Voice output with speech synthesis  
- 🌐 Open popular apps/websites via voice (YouTube, Instagram, WhatsApp, GitHub, Flipkart, Hotstar, etc.)  
- 🔍 Voice-based web search  
- 🎵 Play media using voice commands  
- 📅 Date & time queries  
- 🧭 Page navigation (scroll, reload, back)  
- 🤖 AI-powered responses for general questions  
- 🌍 English + Hindi command support  
- 📱 Mobile & desktop browser compatible  

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Voice:** Web Speech API (SpeechRecognition & SpeechSynthesis)  
- **AI:** Groq LLM  
- **State Management:** React Context API  
- **Styling:** CSS  

---

## 📂 Project Structure

src/
│── assets/ # Images & GIFs
│── context/
│ └── UserContext.jsx # Core voice & command logic
│── groq.js # AI integration
│── App.jsx
│── main.jsx
│── index.css

yaml
Copy code

---

## 🎙️ Example Voice Commands

### App / Website Opening
- “Open YouTube” / “YouTube kholo”
- “Open Instagram” / “Instagram kholo”
- “Open WhatsApp” / “WhatsApp kholo”
- “Open GitHub” / “GitHub kholo”

### General Commands
- “What is the time”
- “Tell me the date”
- “Search React hooks”
- “Play motivational song”

### AI Questions
- “Explain JavaScript promises”
- “What is MERN stack”
- “Tell me about Funclexa”

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ansarisultan/2.0-Lexai---A-Funclexa-Project.git
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run the Project
bash
Copy code
npm run dev
🔐 Environment Variables
Create a .env file in the root directory:

env
Copy code
VITE_GROQ_API_KEY=your_groq_api_key_here
⚠️ Do not commit .env to GitHub.

🌐 Deployment
The project can be deployed on platforms like Netlify or Vercel.

Build command:

bash
Copy code
npm run build
Publish directory:

nginx
Copy code
dist
📌 Project Level
Advanced AI Voice Assistant Web Application
This project demonstrates real-world AI integration, voice-based UX, and browser automation.

📧 Contact
Project: Funclexa

Email: funclexa.app@gmail.com

Website: https://funclexa.me

⭐ Acknowledgement
Built with dedication and consistency by Sultan Salauddin Ansari as part of the Funclexa initiative.
