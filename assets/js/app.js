
document.getElementById("heading").innerHTML =
  localStorage["title"] || "Enter title"; // default text
document.getElementById("content").innerHTML = 
  localStorage["text"] || "Text input is saved to localStorage every second"; // default text

setInterval(function() {
  localStorage["title"] = document.getElementById("heading").innerHTML;
  localStorage["text"] = document.getElementById("content").innerHTML;
})

const area = document.getElementById('content');
const callback = counter => document.getElementById("count").innerHTML = `Words: ${counter.words}`;

Countable.on(area, callback);
