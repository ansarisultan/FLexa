import React, { createContext, useState } from 'react'
import { askGroq } from "../groq";


export const datacontext=createContext()

function UserContext({children}) {
let [speaking,setSpeaking]=useState(false)
let [prompt,setPrompt]=useState("listening...")
let [response,setResponse]=useState(false)

    function speak(text){
  // ✅ STOP any previous speech FIRST
  window.speechSynthesis.cancel();

  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.volume = 1;
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.lang = "hi-GB";

  window.speechSynthesis.speak(text_speak);
}

async function aiResponse(prompt){
    let text = await askGroq(prompt)
    let newText = text
  .replace(/\*\*/g, "")
  .replace(/\*/g, "")
  .replace(/google/gi, "Ayush Sahu");

    setPrompt(newText)
    speak(newText)
    setResponse(true)
    setTimeout(()=>{
     setSpeaking(false)
    },3000)//5k
    
    
}
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.continuous = true;       // ✅ ADD THIS
recognition.interimResults = false;  // ✅ ADD THIS

recognition.onresult=(e)=>{
let currentIndex=e.resultIndex
let transcript=e.results[currentIndex][0].transcript
setPrompt(transcript)
takeCommand(transcript.toLowerCase())
}

recognition.onend = () => {
  if (speaking) {
    recognition.start();   // 🔥 AUTO RESTART
  }
};


function takeCommand(command){
    const respond = (text) => {
  speak(text);
  setResponse(true);
  setPrompt(text);
  setTimeout(() => setSpeaking(false),3000); //8000
};

   
    if(command.includes("open") && command.includes("youtube")){
        window.open("https://www.youtube.com/","_blank")
        speak("opening Youtube")
        setResponse(true)
        setPrompt("opening Youtube...")
        setTimeout(()=>{
            setSpeaking(false)
           },3000)
    // }else if(command.includes("open") && command.includes("google")){
    //     window.open("https://www.google.com/","_blank")
    //     speak("opening google")
    //     setResponse(true)
    //     setPrompt("opening google...")
    //     setTimeout(()=>{
    //         setSpeaking(false)
    //        },5000)
    // }else if(command.includes("open") && command.includes("instagram")){
    //     window.open("https://www.instagram.com/","_blank")
    //     speak("opening instagram")
    //     setResponse(true)
    //     setPrompt("opening instagram...")
    //     setTimeout(()=>{
    //         setSpeaking(false)
    //        },5000)
    // } else if(command.includes("time")){
    //     let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    //     speak(time)
    //     setResponse(true)
    //     setPrompt(time)
    //     setTimeout(()=>{
    //         setSpeaking(false)
    //        },5000)
    //   }
    //   else if(command.includes("date")){
    //       let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    //       speak(date)
    //       setResponse(true)
    //       setPrompt(date)
    //       setTimeout(()=>{
    //           setSpeaking(false)
    //          },5000)
    //     }
}
    else if (
  command.includes("open youtube") ||
  command.includes("youtube kholo")
) {
  window.open("https://www.youtube.com", "_blank");
  respond("Opening YouTube");
}

else if (
  command.includes("open instagram") ||
  command.includes("instagram kholo")
) {
  window.open("https://www.instagram.com", "_blank");
  respond("Opening Instagram");
}

else if (
  command.includes("open whatsapp") ||
  command.includes("whatsapp kholo")
) {
  window.open("https://wa.me", "_blank");
  respond("Opening WhatsApp");
}

else if (
  command.includes("open flipkart") ||
  command.includes("flipkart kholo")
) {
  window.open("https://www.flipkart.com", "_blank");
  respond("Opening Flipkart");
}

else if (
  command.includes("open hotstar") ||
  command.includes("hotstar kholo")
) {
  window.open("https://www.hotstar.com", "_blank");
  respond("Opening Hotstar");
}

else if (
  command.includes("open github") ||
  command.includes("github kholo")
) {
  window.open("https://github.com", "_blank");
  respond("Opening GitHub");
}

else if (
  command.includes("open linkedin") ||
  command.includes("linkedin kholo")
) {
  window.open("https://www.linkedin.com", "_blank");
  respond("Opening LinkedIn");
}

else if (
  command.includes("open facebook") ||
  command.includes("facebook kholo")
) {
  window.open("https://www.facebook.com", "_blank");
  respond("Opening Facebook");
}

else if (
  command.includes("open twitter") ||
  command.includes("twitter kholo")
) {
  window.open("https://twitter.com", "_blank");
  respond("Opening Twitter");
}

else if (
  command.includes("open amazon") ||
  command.includes("amazon kholo")
) {
  window.open("https://www.amazon.in", "_blank");
  respond("Opening Amazon");
}

else if (
  command.includes("open netflix") ||
  command.includes("netflix kholo")
) {
  window.open("https://www.netflix.com", "_blank");
  respond("Opening Netflix");
}

else if (
  command.includes("open spotify") ||
  command.includes("spotify kholo")
) {
  window.open("https://open.spotify.com", "_blank");
  respond("Opening Spotify");
}

else if (
  command.includes("open telegram") ||
  command.includes("telegram kholo")
) {
  window.open("https://t.me", "_blank");
  respond("Opening Telegram");
}

else if (
  command.includes("open snapchat") ||
  command.includes("snapchat kholo")
) {
  window.open("https://www.snapchat.com", "_blank");
  respond("Opening Snapchat");
}

else if (
  command.includes("open gmail") ||
  command.includes("gmail kholo")
) {
  window.open("https://mail.google.com", "_blank");
  respond("Opening Gmail");
}

else if (
  command.includes("open google maps") ||
  command.includes("maps kholo") ||
  command.includes("google maps kholo")
) {
  window.open("https://maps.google.com", "_blank");
  respond("Opening Google Maps");
}


else if (command.includes("open portfolio")) {
  window.open("https://funclexa.me", "_blank");
  respond("Opening your portfolio");
}

            // my command
            else if (command.includes("your name")) {
  respond("My name is FLexa, your personal AI assistant.");
}

else if (command.includes("tell me about sultan")) {
  respond(
    "Sultan Salauddin Ansari is a disciplined and self-motivated computer science student and a MERN stack developer who strongly believes in consistency over shortcuts. He has spent long hours learning, practicing, and building projects, often working late nights to solve real technical problems. His journey reflects patience, persistence, and a deep commitment to self-improvement.\n\n" +

    "Sultan’s approach to technology is practical and thoughtful. He focuses on understanding core concepts rather than memorizing solutions. Whether it is frontend development, backend logic, or system-level thinking, he prefers to learn by doing and refining his work through experience.\n\n" +

    "Beyond coding, Sultan values discipline, mindset, and long-term growth. He believes that success is built slowly through daily effort, learning from mistakes, and staying consistent even when progress feels slow. This mindset defines both his personality and his work."
  );
}
else if (command.includes("who created you") || command.includes("who made you")) {
  respond(
    "I was created by Sultan Salauddin Ansari as part of his personal project called Funclexa. He designed me to be more than just a simple assistant — I represent his vision of building intelligent, interactive, and user-focused web applications.\n\n" +

    "Through me, Sultan experiments with modern web technologies, voice interaction, and AI-driven features. My creation reflects his interest in combining creativity with functionality while continuously learning and improving his skills."
  );
}
else if (command.includes("what is funclexa") || command.includes("explain funlexa")) {
  respond(
    "Funclexa is a personal web application created by Sultan Salauddin Ansari to showcase his development journey, skills, and projects in an interactive way. It is not just a portfolio website, but a living platform that evolves as Sultan grows as a developer.\n\n" +

    "Funclexa brings together modern web technologies, clean design, and intelligent features to create a unique experience. It represents Sultan’s hands-on learning approach, where every feature is built with purpose and understanding rather than copied solutions.\n\n" +

    "The platform also serves as a space for experimentation, innovation, and self-expression. Funclexa reflects Sultan’s belief that real learning happens when you build, break, fix, and improve your own ideas."
  );
}
else if (command.includes("aim funclexa") || command.includes("why funclexa")) {
  respond(
    "The main aim of Funclexa is to provide a single, meaningful platform where Sultan can represent his technical skills, mindset, and growth as a developer. It is designed to show not only what he knows, but how he thinks and builds solutions.\n\n" +

    "Funclexa aims to move beyond traditional resumes by offering an interactive experience that highlights real projects, problem-solving ability, and creativity. It allows visitors to understand Sultan’s journey, work ethic, and passion for technology.\n\n" +

    "Ultimately, Funclexa is meant to grow alongside Sultan — evolving as his skills improve and serving as a foundation for future opportunities, collaborations, and advanced projects."
  );
}

else if (command.includes("about lexa") || command.includes("what can you do")) {
  respond(
    "I am FLexa, a voice-enabled assistant built as a part of the Funclexa platform. My role is to assist users through voice commands, provide information, perform actions, and create an interactive experience within the application.\n\n" +

    "I am designed to understand commands, respond intelligently, and represent Sultan’s vision of integrating AI-style interactions into web applications. Through me, Sultan explores how voice technology and intelligent systems can enhance user experience.\n\n" +

    "As Funclexa evolves, my abilities will continue to expand, making me smarter, more helpful, and more aligned with the goal of creating intuitive and human-friendly digital experiences."
  );
}

else if (command.includes("sultan journey") || command.includes("sultan journey")) {
  respond(
    "Sultan Salauddin Ansari’s journey in technology has been shaped by curiosity, discipline, and long-term consistency. From an early stage, he showed a deep interest in computers and how systems work, which gradually evolved into a passion for software development. Rather than rushing toward results, Sultan focused on understanding fundamentals and building skills step by step.\n\n" +

    "Over the years, he faced multiple challenges . Despite this, he continued to show up daily, learning new concepts, practicing coding, and building projects even during late nights. His journey reflects patience and the belief that progress compounds through consistent effort.\n\n" +

    "Today, Sultan’s journey stands as an example of growth through persistence. Every project he builds and every problem he solves adds another layer to his experience, shaping him into a more confident and capable developer."
  );
}
else if (command.includes("sultan achievements") || command.includes("what has sultan achieved")) {
  respond(
    "Sultan Salauddin Ansari’s achievements are rooted not only in certifications or projects, but in the discipline he has developed over time. He has successfully learned and worked with modern web technologies including frontend development, backend systems, and the MERN stack.\n\n" +

    "One of his key achievements is building real-world projects like Funclexa, where he integrates voice interaction, intelligent commands, and clean UI design. These projects represent his ability to apply theoretical knowledge into practical, working solutions.\n\n" +

    "Beyond technical milestones, Sultan’s greatest achievement is his mindset. His ability to stay consistent, work through frustration, and continue improving despite setbacks defines his growth and sets a strong foundation for future success."
  );
}
else if (command.includes("sultan mindset") || command.includes("how does sultan think")) {
  respond(
    "Sultan’s mindset is centered around discipline, patience, and long-term vision. He believes that real success is not achieved overnight, but built gradually through daily effort and learning from mistakes.\n\n" +

    "Instead of chasing shortcuts, Sultan focuses on understanding concepts deeply and applying them practically. He values consistency over motivation and believes that showing up every day, even when it is difficult, is the key to growth.\n\n" +

    "This mindset influences both his personal life and his development work, allowing him to stay focused, resilient, and continuously improving."
  );
}
else if (command.includes("explain funclexa") || command.includes("tell me about funclexa")) {
  respond(
    "Funclexa is a personal web platform created by Sultan Salauddin Ansari to represent his development journey, creativity, and technical evolution. It is designed as more than a static portfolio — Funclexa is an interactive and intelligent space that grows as Sultan grows.\n\n" +

    "The platform showcases projects, skills, experiments, and ideas in a way that reflects Sultan’s hands-on learning approach. Each feature of Funclexa is built with intention, focusing on clean design, usability, and real-world application.\n\n" +

    "Funclexa also serves as a foundation for innovation, allowing Sultan to experiment with AI-style interactions, voice commands, and smart user experiences."
  );
}
else if (command.includes("funclexa vision") || command.includes("future of funclexa")) {
  respond(
    "The vision of Funclexa is to become a comprehensive personal platform that represents Sultan’s skills, mindset, and growth as a developer. It aims to go beyond traditional resumes by offering an interactive experience that tells a story.\n\n" +

    "Funclexa is envisioned as a space where learning, creativity, and technology come together. As Sultan’s expertise expands, Funclexa will evolve to include more advanced features, smarter interactions, and deeper integrations.\n\n" +

    "Ultimately, Funclexa reflects Sultan’s belief that technology should be personal, meaningful, and continuously improving."
  );
}

// HOW WERE YOU CREATED (Hindi + English)
else if (
  command.includes("kaise tujhe banaya") ||
  command.includes("tumhe kaise banaya") ||
  command.includes("kaise banaye tujhe") ||
  command.includes("how were you created") ||
  command.includes("how did you create you") ||
  command.includes("how were you made")
) {
  respond(
    "I was created by Sultan Salauddin Ansari gradually, not in a single day. He first learned basic web development and then started building me using React and JavaScript.\n\n" +

    "Features like voice recognition, understanding commands, and giving correct responses were built through continuous trial and error. There were many bugs, problems, and moments of frustration, but Sultan never gave up on consistency.\n\n" +

    "The process of creating me reflects Sultan’s discipline and patience. Every feature is the result of hard work and continuous learning."
  );
}


// FAVOURITE ACTOR
else if (
  command.includes("who is your favourite actor") ||
  command.includes("who is your favorite actor") ||
  command.includes("your favourite actor") ||
  command.includes("your favorite actor")
) {
  respond(
    "I don’t have a favourite actor of my own. But Sultan’s favourite actor is Salman Khan."
  );
}

else if (
  command.includes("sultan kon hai") ||
  command.includes("sultan kaun hai") 
 
) {
  respond(
    "Sultan Salauddin Ansari ek computer science student aur MERN stack developer hai jo modern, scalable aur user-centric web applications banane par focus karta hai. Woh mainly JavaScript, React, Node.js aur related technologies ke sath kaam karta hai taake clean aur efficient digital solutions develop kar sake.\n\n" +

    "Sultan ka development approach structured learning aur practical implementation par based hai. Woh concepts ko clearly samajhne, maintainable code likhne aur performance-oriented solutions build karne par zyada tawajjoh deta hai. Uska focus hamesha real-world applications aur problem-solving mindset par hota hai.\n\n" +

    "Funclexa uska personal web platform hai jo uski skills, projects aur ideas ko interactive tareeke se showcase karta hai. Lexa, jo is waqt aap se baat kar rahi hai, Funclexa ka hi ek hissa hai aur voice-based aur intelligent web features ko represent karti hai.\n\n" +

    "Overall, Sultan ek professional developer mindset ko represent karta hai jo continuous growth, innovation aur meaningful digital experiences create karne par believe karta hai."
  );
}
else if (
   command.includes("who is sultan")
) {
  respond(
    "Sultan Salauddin Ansari is a computer science student and a MERN stack developer with a strong focus on building modern, scalable, and user-centric web applications. He works primarily with JavaScript, React, Node.js, and related technologies to create clean and functional digital solutions.\n\n" +

    "He believes in structured learning, practical implementation, and continuously improving his technical skills through hands-on projects. Sultan approaches development with a problem-solving mindset and emphasizes clarity, maintainability, and performance in his work.\n\n" +

    "Funclexa is his personal web platform, designed to showcase his skills, projects, and ideas in an interactive way. Lexa, the assistant you are interacting with, is part of this platform and represents his interest in integrating intelligent and voice-based features into web applications.\n\n" +

    "Overall, Sultan represents a professional developer mindset focused on growth, innovation, and creating meaningful digital experiences."
  );
}

else if (command.includes("how were you created") || command.includes("how are you created")) {
  respond(
    "I was created through a combination of modern web technologies, creativity, and consistent effort by Sultan Salauddin Ansari. My foundation is built using JavaScript, React, browser speech recognition, and intelligent command handling.\n\n" +

    "Sultan designed me step by step, starting from basic voice input, then adding command understanding, responses, and interactive behavior. Instead of copying ready-made solutions, he experimented, failed, fixed issues, and improved my functionality through real debugging experience.\n\n" +

    "My creation represents Sultan’s hands-on learning approach, where building something functional matters more than just theoretical knowledge."
  );
}


else if (command.includes("who am i")) {
  respond("You are Sultan Salauddin Ansari, a dedicated and disciplined MERN stack developer.");
}

else if (command.includes("your purpose")) {
  respond("My purpose is to assist you, automate tasks, and make development easier.");
}


///for searching and playing purpose
        else if (command.startsWith("search")) {
  const query = command.replace("search", "").trim();
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
  respond(`Searching for ${query}`);
}

else if (command.startsWith("play")) {
  const song = command.replace("play", "").trim();
  window.open(`https://www.youtube.com/results?search_query=${song}`, "_blank");
  respond(`Playing ${song} on YouTube`);
}

///date&time
        else if (command.includes("time")) {
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  respond(`The time is ${time}`);
}

else if (command.includes("date")) {
  const date = new Date().toLocaleDateString([], { day: "numeric", month: "long", year: "numeric" });
  respond(`Today's date is ${date}`);
}

//page realated 
        else if (command.includes("reload")) {
  respond("Reloading page");
  window.location.reload();
}

else if (command.includes("go back")) {
  respond("Going back");
  window.history.back();
}

else if (command.includes("scroll down")) {
  window.scrollBy(0, 500);
  respond("Scrolling down");
}

else if (command.includes("scroll up")) {
  window.scrollBy(0, -500);
  respond("Scrolling up");
}

        ///little bit jarvis sytle python old one 

    else if (command.includes("how are you")) {
  respond("All systems are running smoothly.");
}

else if (command.includes("are you listening")) {
  respond("Always listening, sir.");
}

else if (command.includes("activate developer mode")) {
  respond("Developer mode activated.");
}

else if (command.includes("motivate me")) {
  respond("You are disciplined, consistent, and unstoppable. Keep going.");
}


    else{
        aiResponse(command)
    }
}

   let value={
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse
   }
  return (
    <div>
     <datacontext.Provider value={value}>
      {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
