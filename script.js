const moodResponses = {
  happy: [
    "Yay! Your happiness is contagious 😆✨",
    "Keep smiling, you’re making the world brighter 🌞",
    "Dance break! 💃🕺 Just because you’re happy",
    "Your vibe today could light up a whole city 🌟"
  ],
  
  sad: [
    "Aw, it’s okay… even superheroes have rough days 😢💪",
    "Here’s a virtual hug 🤗 — better days are coming!",
    "Wanna hear a joke? Why don’t scientists trust atoms? Because they make up everything 😄",
    "Try smiling right now 😁 …I bet it helps a little!"
  ],
  
  angry: [
    "Take a deep breath… now imagine a kitten on your keyboard 🐱⌨️",
    "Anger detected 🚨… time to dance it out? 💃🕺",
    "Oops, someone’s boiling! Let’s chill with a cool meme ❄️",
    "Remember: even lava cools down 🌋 …you got this"
  ],
  
  normal: [
    "Just a regular day… but that’s okay! 🙂",
    "Everything’s calm and steady today 🌿",
    "Sometimes normal is perfect 👍",
    "A quiet day can be a happy day too 🌸"
  ]
};

localStorage.setItem("moodResponses", JSON.stringify(moodResponses));

const themecolors = {
  happy: "bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400",
  sad: "bg-gradient-to-r from-blue-400 to-indigo-500",
  angry: "bg-gradient-to-r from-red-500 to-orange-500",
  normal: "bg-gradient-to-r from-green-400 to-blue-400"
}


function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
    // adding a random number to the minimum value
}

let buttons = document.querySelectorAll(".mood-btn");
let quotebox = document.querySelector(".quote-box");
const baseClasses = "font-comic flex flex-col items-center bg-pink-50 min-h-screen";
let currMood;

function changeTheme(mood){
   // remove all the other classes except the classes of current mood
   document.body.className = baseClasses; // className is the string of classes of an element, baseClasses represents className of body, resetting to default classes
   
   const classes = themecolors[mood]; // add class of current mood
   document.body.classList.add(...classes.split(" "));
}

buttons.forEach(btn => {
    btn.addEventListener("click", () =>{
        const mood = btn.id;
        currMood = mood;
       
        let indx = getRandomInt(0,3);
        // console.log(indx);
        // let moodResponses = JSON.parse(localStorage.getItem("moodResponses"));
        // let currentMood = JSON.parse(localStorage.getItem("currMood"));
        // console.log(currentMood);
        // console.log(moodResponses);
        let quote = moodResponses[currMood][indx];

        localStorage.setItem("currMood", JSON.stringify(currMood));
        localStorage.setItem("currQuote", JSON.stringify(quote));

        // console.log(quote);
        quotebox.textContent = quote;  
        
        changeTheme(currMood);
    

    })
});

function LoadMood(){
  let savedMood = JSON.parse(localStorage.getItem("currMood"));
  let savedQuote = JSON.parse(localStorage.getItem("currQuote"));

  if (savedMood){
  quotebox.textContent = savedQuote;
  changeTheme(savedMood);
  }

}
LoadMood();

function LoadNotes(){
     
}

function clearMood(){
    localStorage.removeItem("currMood");
    localStorage.removeItem("currQuote");
    location.reload();
}






