
console.log("hello");

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("timer").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function generateRandomQuote() {
  const quotes = [
    `"Be yourself; everyone else is already taken."`,
    `"Life is what happens when you're busy making other plans."`,
    `"The only limit to our realization of tomorrow will be our doubts of today."`,
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function updateQuote() {
  const newQuote = document.getElementById("quote");

  newQuote.textContent = generateRandomQuote();
}

const btn = document.getElementById("newQuote");

btn.addEventListener("click", updateQuote);

document.addEventListener("DOMContentLoaded", updateQuote);
