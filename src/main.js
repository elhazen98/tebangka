function print(text) {
  const log = document.getElementById("log");
  const ps = log.querySelectorAll("p");
  if (ps.length > 7) {
    log.firstElementChild.remove();
  }
  const p = document.createElement("p");
  p.textContent = text;
  log.append(p);
}

function generateNumber() {
  let number = Math.floor(Math.random() * 1000);
  const numberDigits = [];
  for (let i = 0; i < 3; i++) {
    const curDigit = number % 10;
    numberDigits.unshift(curDigit.toString());
    number -= curDigit;
    number /= 10;
  }
  return numberDigits;
}

function checkNumber(numberGuessed, numberAnswer) {
  const result = {
    isGuessed: false,
    rightNumber: 0,
    rightPlace: 0,
  };
  for (let i = 0; i < 3; i++) {
    if (numberAnswer.includes(numberGuessed[i])) {
      result.rightNumber++;
    }
    if (numberAnswer[i] === numberGuessed[i]) {
      result.rightPlace++;
    }
  }
  return result;
}

function handleGuess(e) {
  e.preventDefault();

  if (numberAnswer === null) {
    print("Press Start Button");
    e.target.reset();
  } else {
    const numberGuessed = [
      document.getElementById("first-digit").value,
      document.getElementById("second-digit").value,
      document.getElementById("third-digit").value,
    ];

    const result = checkNumber(numberGuessed, numberAnswer);

    if (result.rightNumber === 3 && result.rightPlace === 3) {
      setTrial(trial, "🏆");
      print(`You're correct, the secret number is ${numberGuessed.join("")}!`);
    } else {
      trial--;
      setTrial(trial, "🩷");
      if (trial > 0) {
        print(
          `${numberGuessed.join("")} : ${
            result.rightNumber
          } right numbers and ${result.rightPlace} right places.`,
        );
      } else {
        setTrial(1, "💩");
        print(`Game Over, the secret number is ${numberAnswer.join("")}`);
      }
    }
    e.target.reset();
  }
}

function setTrial(trial, text) {
  document.getElementById("trial").textContent = new Array(trial)
    .fill(text)
    .join("");
}

let numberAnswer = null;
let trial = 0;
const infoContent = [
  "• Press the 'Start' button.",
  "• You have a secret number between 0 & 999.",
  "• If the secret number is less than 100,",
  "it will have a leading zero.",
  "• Guess each digit of the secret number.",
  "• You have 7 chances to guess it.",
];

const start = document.getElementById("start");
const guessForm = document.getElementById("guess-form");
const info = document.getElementById("info");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const ok = document.getElementById("ok");

start.addEventListener("click", () => {
  document.getElementById("log").innerHTML = "";
  numberAnswer = generateNumber();
  trial = 7;
  setTrial(trial, "🩷");
  document.getElementById("first-digit").value = "";
  document.getElementById("second-digit").value = "";
  document.getElementById("third-digit").value = "";
  print("Secret number generated!");
});

guessForm.addEventListener("submit", handleGuess);

info.addEventListener("click", () => {
  popup.style.display = "block";
  popupContent.innerHTML = "";
  infoContent.forEach((text) => {
    const textInfo = document.createElement("p");
    textInfo.classList = "text-info";
    textInfo.textContent = text;
    popupContent.append(textInfo);
  });
});

ok.addEventListener("click", () => {
  popup.style.display = "none";
});
