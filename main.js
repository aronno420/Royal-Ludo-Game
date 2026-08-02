import { Ludo } from './asset/Ludo.js';


// =====================================
// GET SCREENS
// =====================================

const welcomeScreen =
    document.getElementById("welcome-screen");


const introScreen =
    document.getElementById("intro-screen");


const rulesScreen =
    document.getElementById("rules-screen");


const gameScreen =
    document.getElementById("game-screen");


// =====================================
// GET BUTTONS
// =====================================

const startIntroBtn =
    document.getElementById("start-intro-btn");


const rulesBtn =
    document.getElementById("rules-btn");


const playNowBtn =
    document.getElementById("play-now-btn");


// =====================================
// INITIAL STATE
// =====================================

// শুরুতে শুধু Welcome Screen

welcomeScreen.style.display = "flex";

introScreen.style.display = "none";

rulesScreen.style.display = "none";

gameScreen.style.display = "none";


// =====================================
// START GAME
// =====================================

// START GAME চাপলে Introduction আসবে

startIntroBtn.addEventListener(

    "click",

    function () {


        welcomeScreen.style.display = "none";


        introScreen.style.display = "flex";


    }

);


// =====================================
// PLAY RULES
// =====================================

// PLAY RULES চাপলে Rules আসবে

rulesBtn.addEventListener(

    "click",

    function () {


        introScreen.style.display = "none";


        rulesScreen.style.display = "flex";


    }

);


// =====================================
// PLAY NOW
// =====================================

// PLAY NOW চাপলে আসল Ludo Game আসবে

playNowBtn.addEventListener(

    "click",

    function () {


        rulesScreen.style.display = "none";


        gameScreen.style.display = "block";


        // Original Ludo Game Start

        const ludo = new Ludo();


    }

);
