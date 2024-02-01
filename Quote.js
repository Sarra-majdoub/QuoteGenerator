/*var countDownDate = new Date("Jan 30, 2024 15:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy Birthday ayoudaaa";
  }
}, 1000);*/

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
