let cashText = document.querySelector(".cashText");
const slotText = document.querySelector(".slotText");
const slotText2 = document.querySelector(".slotText2");
const slotText3 = document.querySelector(".slotText3");
const play = document.querySelector(".play");
const winText = document.querySelector(".winText");
const banner = document.querySelector(".banner");

let money = 100;
cashText.innerText = money;

const slots = [
    "7",
    "0",
    "1",
    "-"
];

function randomSelector() {
    let random = [];
    for (let i = 0; i < 3; i++) {
        random.push(Math.floor(Math.random() * 3));
    }
    return random;
}

function slotsGame() {
    slotText.innerText = slots[randomSelector()[0]];
    slotText2.innerText = slots[randomSelector()[1]];
    slotText3.innerText = slots[randomSelector()[2]];
    cashText.innerText = pay();
    if (
        slotText.innerText == 7 &&
        slotText2.innerText == 7 &&
        slotText3.innerText == 7
       ) {
        win();
    }else {
        banner.style.display = "none";
    }
}

function pay() {
    if (money > 0) {
        money -= 5;
        
    }else {
        money = 0;
        slotText.innerText = slots[3];
        slotText2.innerText = slots[3];
        slotText3.innerText = slots[3];
    }
return money
}

function win() {
    money += 100;
    banner.style.display = "block";
    winText.innerText = "JACKPOT!";
    cashText.innerText = money;
}

play.onclick = slotsGame;