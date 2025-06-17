// 🔊 Sound setup
const audio = new Audio("click.mp3");

// 📖 Full scene list
const scenes = [
  {
    img:  "JPG/lobster1.jpg",
    text: "Lobsteroni Supreme",
    subtitle: "Appears at 3AM demanding a dance battle... and orange juice.",
    choices: ["Join in!", "I love to dance"],
    sound: "sounds/lobster1.mp3"
  },
  {
    img: "JPG/lobster2.jpg",
    text: "Giuseppe DunDum Snapolino",
    subtitle: "Claims to know your name. Probably learned it from a ravioli.",
    choices: ["Shout your name!", "You don't know me bro"]
  },
  {
    img: "JPG/lobster3.jpg",
    text: "Lobstuseni Fliporeni",
    subtitle: "Dudum dish...",
    choices: ["Skate in sauce", "Call mom with noodle hands"]
  },
  {
    img: "JPG/milkcarton.jpg",
    text: "Milkerini Drinkenini",
    subtitle: "The god of breakfast...",
    choices: ["Drink it", "Swim in milk"]
  },
  {
    img: "JPG/bed.jpg",
    text: "Beddy McSleepface",
    subtitle: "Pillow has eyes. Blanket has opinions.",
    choices: ["Sleep on it", "Talk to it"]
  },
  {
    img: "JPG/scene1.jpg",
    text: "Whisperooni del Wallissimo",
    subtitle: "You can’t see him, but he’s definitely chewing pasta in there.",
    choices: ["Listen closer", "Prefer milk"]
  },
  {
    img: "JPG/scene2.jpg",
    text: "Blurrito Scootson",
    subtitle: "Blink once: he's gone. Blink twice: you're a spaghettizini",
    choices: ["Hop on", "Hop on"]
  },
  {
    img: "JPG/scene3.jpg",
    text: "Detective Cheez-Hawk",
    subtitle: "Arrested a lasagna for being ‘too mysterious’. You’re next.",
    choices: ["Apologize to the pizza", "Accept the new reality"]
  },
  {
    img: "JPG/giraffe.jpg",
    text: "Meet Turbo Toastneck",
    subtitle: "He honks his way through candy chaos.",
    choices: ["Honk back", "Nice car"]
  },
  {
    img: "JPG/mrspaghetti.jpg",
    text: "Spaghettino Mozzarella",
    subtitle: "Complete with meatball aura and floating cheese drama.",
    choices: ["Love meatballs", "More cheese!!"]
  },
  {
    img: "JPG/waffle.jpg",
    text: "DJ Croak-Waffle 🐸",
    subtitle: "Frog king of brain rot breakfast city!",
    choices: ["Eggy Yolkface", "Frooooog"]
  },
  {
    img: "hJPG/amster.jpg",
    text: "Skatemo Puffzoom 🐹",
    subtitle: "Fueled by neon chaos and unlicensed energy drinks.",
    choices: ["Pump up the chaos", "Catch him if you can"]
  },
  {
    img: "JPG/kroko.jpg",
    text: "Floaty McZoomjaw 🐊",
    subtitle: "Cereal-fueled panic energy!",
    choices: ["Chomp & Dash", "Wave back at Banana"]
  },
  {
    img: "JPG/lama.jpg",
    text: "Llamagician Crumbspark",
    subtitle: "Levitating with a glowing sandwich",
    choices: ["Cast Sandwich Spell", "Duel the Popcorn Machine"]
  },
  {
    img: "JPG/van.jpg",
    text: "Blorpoast Turbo 9000",
    subtitle: "Jellybean-wheeled toaster racer",
    choices: ["Desert of Sticky Doom", "Jam Canyon Rally"]
  },
  {
    img: "JPG/juicebox.jpg",
    text: "Juice Blaster XL",
    subtitle: "Hydrate an entire cartoon planet",
    choices: ["Drift into destiny", "High-five a gummy bear"]
  },
  {
    img: "JPG/cone.jpg",
    text: "Conezo Flipflip",
    subtitle: "Traffic cone breakdancer",
    choices: ["Drop the cheddar beat", "Challenge to a snackdance"]
  },
  {
    img: "JPG/angry.jpg",
    text: "Grumpalon the Rager",
    subtitle: "Screaming his confetti-covered truth",
    choices: ["Launch him anyway", "Join the tantrum"]
  },
  {
    img: "JPG/duck.jpg",
    text: "Undercover duck",
    subtitle: "Banana shield. Cereal city. Trust issues.",
    choices: ["Zoom banana", "Interrogate the jellybean cop"]
  },
  {
    img: "JPG/ghost.jpg",
    text: "Ghost Toastington",
    subtitle: "Interrogate the guilty teacup",
    choices: ["Lick the jelly magnifier", "Lick the jelly magnifier"]
  },
  {
    img: "JPG/snail.jpg",
    text: "Snailio Blingzoom",
    subtitle: "cracker-limo cruisin’, leaving a trail of sparkle and swagger",
    choices: ["Lovely limo", "TOO CHEEESY"]
  },
  {
    img: "JPG/poop.jpg",
    text: "Captain Mcpoopy Creamy",
    subtitle: "ice-scream? YOU SCREAM",
    choices: ["Poopy rocket", "Love chocolate"]
  },
  {
    img: "JPG/lamp.jpg",
    text: "Lampy Bloomcord",
    subtitle: "in a sky island of rainbow snails and bouncing blobs. ☁️",
    choices: ["Watch-out, cactus!", "Not too sharp"]
  },
  {
    img: "JPG/mouse.jpg",
    text: "Mike McMoucy",
    subtitle: "cheese-gadget-loving, hoodie-rockin’, pizza-riding mouse legend",
    choices: ["Too cheesy", "LOVE cheese"]
  },
   {
    img: "JPG/boat.jpg",
    text: "McBoat McBoaty Face",
    subtitle: "100% floating on pure brain rot energy.",
    choices: ["Row, row, row the boat", "Jelly aint sea"]
  },
   {
    img: "JPG/chicken.jpg",
    text: "ChiKEN",
    subtitle: "laundromat legend",
    choices: ["Do-nut watch TV!", "YOU CAN'T WASH DONUTS"]
  },
   {
    img: "JPG/rock.jpg",
    text: "Rockcell Signalblast",
    subtitle: "The mobile legend of the concert circuit 📱🎸",
    choices: ["We-will-rock YOU!", "Do you feel the connection?"]
  }  
];

let current = 0;
let history = [];
let path = [];

function nextScene(index = null) {
  audio.play();

  const image = document.getElementById("scene");
  image.classList.add("glitch");
  setTimeout(() => image.classList.remove("glitch"), 300);

  if (index !== null) {
    current = index;
  } else {
    current++;
  }

  if (current >= scenes.length) current = 0;

  const scene = scenes[current];
  path.push(current);

  document.getElementById("scene").src = scene.img;
  document.getElementById("caption").innerText = scene.text;
  document.getElementById("subtitle").innerText = scene.subtitle || "";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (scene.choices) {
    scene.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.innerText = choice;
      btn.onclick = () => branchLogic(current, i);
      btn.classList.add("choice-btn");
      choicesDiv.appendChild(btn);
    });
  }

  const log = document.getElementById("log");
  if (log) {
    const logItem = document.createElement("div");
    logItem.className = "log-item";
    logItem.innerText = `✔️ ${scene.text}`;
    log.appendChild(logItem);
  }
}

function branchLogic(sceneIndex, choiceIndex) {
  const branches = {
    0: [1, 2],
    1: [3, 4],
    2: [5, 6],
    3: [7, 8],
    4: [9, 10],
    5: [11, 12],
    6: [13, 14],
    7: [15, 16],
    8: [17, 18],
    9: [19, 0]
  };

  const options = branches[sceneIndex];
  if (options && options[choiceIndex] !== undefined) {
    nextScene(options[choiceIndex]);
  } else {
    nextScene();
    if (scene.sound) {
  const sceneAudio = new Audio(scene.sound);
  sceneAudio.play().catch((err) => {
    console.warn("Autoplay blocked or error:", err);
  });
}
  }
}

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    sessionStorage.setItem("username", name);
    window.location.href = "splash.html"; // 🌟 Redirect to splash first
  } else {
    alert("Please enter your BrainRot name!");
  }
}

function logout() {
  document.body.classList.add("shutdown");
  sessionStorage.clear();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

function showBook(name) {
  document.getElementById("greeting").innerText = `Welcome, ${name}!`;
  document.getElementById("book").style.display = "block";
}

window.onload = function () {
  const currentPage = window.location.pathname;
  if (currentPage.includes("book.html")) {
    const saved = sessionStorage.getItem("username");
    if (!saved) {
      window.location.href = "login.html";
    } else {
      showBook(saved);
      nextScene(0);
    }
  }
  
};
