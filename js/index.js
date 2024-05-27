"use strict";
// import { questions } from "./data";

const questions = [
  {
    id: 1,
    question:
      "Я чувствую себя уставшим(ей) даже после длительного сна и отдыха",
    area: "personal",
  },
  {
    id: 2,
    question:
      "Я могу разозлиться без видимой причины, меня раздражают позитивные и успешные люди",
    area: "personal",
  },
  {
    id: 3,
    question: "Мне сложно концентрироваться на задаче больше 5 минут",
    area: "personal",
  },
  {
    id: 4,
    question:
      "Я чувствую собственную беспомощность, кажется, что от меня ничего не зависит",
    area: "personal",
  },
  {
    id: 5,
    question: "Все вокруг кажется пустым и неинтересным",
    area: "personal",
  },
  {
    id: 6,
    question:
      "Я чувствую, что мне не к кому обратиться за помощью и поддержкой в сложной ситуации",
    area: "social",
  },
  {
    id: 7,
    question:
      "Я думаю, что близкие ценят меня за то, что я делаю и как себя веду, а не просто за то, что я есть",
    area: "social",
  },
  {
    id: 8,
    question:
      "В кругу близких и друзей я вынужден(а) играть чужую роль, чтобы меня принимали таким(ой), какой(ая) я есть",
    area: "social",
  },
  {
    id: 9,
    question: "Я чувствую, что никому не нужен (нужна) и никто меня не любит",
    area: "social",
  },
  {
    id: 10,
    question: "Мне кажется, что никто из близких меня не понимает",
    area: "social",
  },
  {
    id: 11,
    question:
      "Я боюсь потерять работу, потому что это приведет к финансовым трудностям",
    area: "career",
  },
  {
    id: 12,
    question:
      "Мне не хватает денег на питание, оплату жилья и на то, чтобы покрыть привычные расходы",
    area: "career",
  },
  {
    id: 13,
    question:
      "Я финансово завишу от других (родителей, супруга(и), босса, партнеров по бизнесу)",
    area: "career",
  },
  {
    id: 14,
    question:
      "Я боюсь, что перемены в стране, отрасли, в которой я работаю, или экономике лишат меня средств к существованию",
    area: "career",
  },
  {
    id: 15,
    question:
      "Мой доход скачет (то густо, то пусто) и находится вне моего контроля",
    area: "career",
  },
];

let personal = 0;
let social = 0;
let career = 0;
let questionIndex = 0;

const greatingSection = document.querySelector("#greatings-section");
const startBtn = document.querySelector("#start");
const questionSection = document.querySelector("#question-section");
const questionContainer = document.querySelector("#question");
const submitBtn = document.querySelector("#submit");
const answersList = document.querySelector("#answersList");
const errorMessage = document.querySelector("#error");
const resultsSection = document.querySelector("#results-section");
const results = document.querySelector("#results");
const dateField = document.querySelector("#date");

startBtn.onclick = showQuestion;
submitBtn.onclick = countAnswer;

function clear() {
  questionContainer.innerHTML = "";
  answersList.querySelector("#none").checked = true;
}

function showQuestion() {
  greatingSection.classList.add("display-none");
  questionSection.classList.remove("display-none");
  const questionText = questions[questionIndex].question;
  questionContainer.innerHTML = questionText;
}

function countAnswer() {
  const checkedAnswer = answersList.querySelector(
    'input[type="radio"]:checked'
  );
  if (checkedAnswer.value === "none") {
    errorMessage.classList.remove("display-none");
    return;
  }
  if (checkedAnswer) {
    errorMessage.classList.add("display-none");
    const area = questions[questionIndex].area;
    const answerValue = Number(checkedAnswer.value);
    switch (area) {
      case "personal":
        personal += answerValue;
        break;
      case "social":
        social += answerValue;
        break;
      case "career":
        career += answerValue;
        break;
      default:
        return;
    }
    if (questionIndex !== questions.length - 1) {
      questionIndex += 1;
      clear();
      showQuestion();
    } else {
      clear();
      showResults();
    }
  }
}

function showResults() {
  questionSection.classList.add("display-none");
  resultsSection.classList.remove("display-none");
  let date = new Date().toLocaleDateString("en-GB");
  dateField.innerHTML = date;
  results.innerHTML = `
            <li>
                <h4>Личная сфера: ${personal} баллов;</h4>
            </li>
            <li>
                <h4>Социальная сфера: ${social} баллов;</h4>
            </li>
            <li>
                <h4> Карьерная сфера: ${career} баллов.</h4>
            </li>
        
 
  `;
}
