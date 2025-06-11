// 🔊 Sound setup
const audio = new Audio("click.mp3");

// 📖 Full scene list
const scenes = [
  {
    img: "lobster1.jpg",
    text: "This is what my brain sees at 3AM...",
    subtitle: "It's lobster party time...",
    choices: ["Join in!", "Go offline"]
  },
  {
    img: "lobster2.jpg",
    text: "The king, he knows your name!",
    subtitle: "He learned it from the toaster above the fridge.",
    choices: ["Whisper", "Run"]
  },
  {
    img: "lobster3.jpg",
    text: "You try to skate. But it’s not too late.",
    subtitle: "Your feet are spaghetti.",
    choices: ["Accept fate", "Call mom"]
  },
  {
    img: "milkcarton.jpg",
    text: "Why is the milk floating? The god of breakfast and coffee",
    subtitle: "YOU MUST LISTEN TO IT",
    choices: ["Drink it", "Scream"]
  },
  {
    img: "bed.jpg",
    text: "You wake up. The bed feels... wrong.",
    subtitle: "There's an extra pillow with eyes. And it’s breathing.",
    choices: ["Sleep on it", "Talk to it"]
  },
  {
    img: "scene1.jpg",
    text: "There’s somethingss in the wallsss.",
    subtitle: "Read to invest into the next world miracle Spagetti.",
    choices: ["Listen closer", "Prefer milk"]
  },
  {
    img: "scene2.jpg",
    text: "Le scooterasso",
    subtitle: "Don't blink twice, it will dissapear",
    choices: ["Hop on", "Hop on"]
  },
  {
    img: "scene3.jpg",
    text: "This isn’t your house anymore.",
    subtitle: "Thief policeman is ready to spill the pizza",
    choices: ["Apologize to the pizza", "Accept the new reality"]
  }
];

let current = 0;

function nextScene() {
  audio.play();

  const image = document.getElementById("scene");
  image.classList.add("glitch");
  setTimeout(() => image.classList.remove("glitch"), 300);

  current++;
  if (current >= scenes.length) current = 0;

  const scene = scenes[current];

  // Set image and text
  document.getElementById("scene").src = scene.img;
  document.getElementById("caption").innerText = scene.text;

  // NEW: Set subtitle
  document.getElementById("subtitle").innerText = scene.subtitle || "";

  // NEW: Render choices
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = ""; // Clear old choices

  if (scene.choices) {
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice;
      btn.onclick = () => nextScene(); // All choices lead to next scene for now
      btn.classList.add("choice-btn");
      choicesDiv.appendChild(btn);
    });
  }
}

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    sessionStorage.setItem("username", name);
    window.location.href = "book.html";
  } else {
    alert("Please enter your BrainRot name!");
  }
}

function logout() {
  // Optional: trigger a glitch or screen flash
  document.body.classList.add("shutdown");

  // Clear session
  sessionStorage.clear();

  // Delay before redirecting
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000); // 1 second delay
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
      nextScene(); // <- This is the missing line that triggers the first scene
    }
  }
};

