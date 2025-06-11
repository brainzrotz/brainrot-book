// 🔊 Sound setup
const audio = new Audio("click.mp3");

// 📖 Full scene list
const scenes = [
  { img: "lobster1.jpg", text: "This is what my brain sees at 3AM..." },
  { img: "lobster2.jpg", text: "He knows your name." },
  { img: "lobster3.jpg", text: "You try to run. But it’s too late." },
  { img: "milkcarton.jpg", text: "Why is the milk floating?" },
  { img: "bed.jpg", text: "You wake up. The bed feels... wrong." },
  { img: "scene1.jpg", text: "There’s something in the walls." },
  { img: "scene2.jpg", text: "It moves when you blink." },
  { img: "scene3.jpg", text: "This isn’t your house anymore." }
];

let current = 0;

function nextScene() {
  audio.play();

  const image = document.getElementById("scene");
  image.classList.add("glitch");
  setTimeout(() => image.classList.remove("glitch"), 300);

  current++;
  if (current >= scenes.length) current = 0;

  document.getElementById("scene").src = scenes[current].img;
  document.getElementById("caption").innerText = scenes[current].text;
}

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    sessionStorage.setItem("username", name);
    showBook(name);
  }
}

function logout() {
  sessionStorage.clear();
  document.getElementById("book").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("username").value = "";
}

function showBook(name) {
  document.getElementById("greeting").innerText = `Welcome, ${name}!`;
  document.getElementById("login").style.display = "none";
  document.getElementById("book").style.display = "block";
}

window.onload = function () {
  const saved = sessionStorage.getItem("username");

  if (!saved) {
    // 🔁 If user has NOT logged in, redirect to login.html
    window.location.href = "login.html";
    return;
  }

  // ✅ If user logged in, show book and greeting
  document.getElementById("greeting").innerText = `Welcome, ${saved}!`;
  document.getElementById("book").style.display = "block";
};
