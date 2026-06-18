//Displays wecome message
alert("Welcome to My School!");

//Quote Generator
const quotes = [
"Keep going! - Winston Churchill",
"Practice makes perfect. - Benjamin Franklin",
"Never stop learning.",
"You can totally do this.",
"No pressure, no diamonds. - Thomas Carlyle",
"Impossible is for the unwilling.",
"Stay afraid, but do it anyway. - Carrie Fisher",
"If you dream of becoming an eagle, you follow your dreams and not the words of a bunch of chickens. - Penny Johnson Jerald",
"Sometimes you never realize the value of a moment until it becomes a memory. - Dr. Seuss",
"Life is a tragedy when seen in close-up, but a comedy in a long-shot. - Charlie Chaplin",
"I always wonder why birds choose to stay in the same place when they can fly anywhere on earth. Then I ask myself the same question. - Harun Yahya",
"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"It always seems impossible until it's done. - Nelson Mandela",
"Do what you can, with what you have, where you are. - Theodore Roosevelt",
"The only way to do great work is to love what you do. - Steve Jobs",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"Dream big and dare to fail. - Norman Vaughan",
"Everything you've ever wanted is on the other side of fear. - George Addair",
"Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
"The best way to predict the future is to create it. - Peter Drucker",
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"The journey of a thousand miles begins with one step. - Lao Tzu",
"Act as if what you do makes a difference. It does. - William James",
"Start where you are. Use what you have. Do what you can. - Arthur Ashe",
"Quality is not an act, it is a habit. - Aristotle",
"Great things are done by a series of small things brought together. - Vincent van Gogh",
"The secret of getting ahead is getting started. - Mark Twain",
"You miss 100% of the shots you don't take. - Wayne Gretzky",
"Fall seven times and stand up eight. - Japanese Proverb",
"Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
];

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random];
}

//Simple Calculator
function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent =
        "Result: " + (num1 + num2);
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent =
        "Result: " + (num1 - num2);
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent =
        "Result: " + (num1 * num2);
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (num2 === 0) {
        document.getElementById("result").textContent =
            "Cannot divide by zero!";
    } else {
        document.getElementById("result").textContent =
            "Result: " + (num1 / num2);
    }
}

// Checks form 
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Thank you " + name + "! Your message has been sent.");
    }
});