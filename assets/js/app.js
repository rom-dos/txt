document.getElementById("heading").innerHTML =
  localStorage["title"] || "Enter title"; // default text
document.getElementById("content").innerHTML = 
  localStorage["text"] || "Text input is saved to localStorage every second"; // default text

setInterval(function() {
  localStorage["title"] = document.getElementById("heading").innerHTML;
  localStorage["text"] = document.getElementById("content").innerHTML;
}, 1000);

const area = document.getElementById('content');
const callback = counter => document.getElementById("count").innerHTML = `Words: ${counter.words}`;

const changeThemeBtn = document.querySelector('button');
const topBar = document.getElementById('top-bar');

changeThemeBtn.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
  topBar.classList.toggle('top-bar-dark');
  // topBar.classList.toggle('top-bar-light');
});

Countable.on(area, callback);
