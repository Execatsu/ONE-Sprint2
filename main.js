let words = ["teste", "alura", "forca", "execatsu"];
let word = "";
let life = 6;
let possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

possibleLetters.forEach(letter => {
    const options = document.querySelector("#options");
    let div = document.createElement('div');
    div.textContent = letter;
    options.appendChild(div);
});

function randomInt(max) {
    return parseInt(Math.random() * max);
}

function start() {
    word = words[randomInt(words.length)];
    const lettersDisplay = document.querySelector("#letters");

    for (letter in word) {
        let div = document.createElement("div");
        lettersDisplay.appendChild(div);
    }
}

document.querySelector("#options").addEventListener("click", event => {
    if (word === "") return;
    if (event.target == document.querySelector("#options")) return;
    if (event.target.classList != "") return;
    let letter = event.target.textContent;

    if (word.includes(letter)) {
        event.target.classList.add("correct");1
        for (let i = 0; i < word.length; i++) {
            if (word[i] == letter) {
                let lettersDisplay = document.querySelector(`#letters div:nth-child(${i + 1})`);
                lettersDisplay.textContent = word[i];
            }
        }
    }
    else { 
        event.target.classList.add("error");
        --life;
        draw();
    }
    
    if (life == 0) alert("SE FUDEU");
});

function draw() {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
}