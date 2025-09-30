const questions = [
  {
    question: "Quanto é 7 × 8?",
    options: ["54", "56", "58", "60"],
    answer: 1
  },
  {
    question: "Qual é a raiz quadrada de 144?",
    options: ["10", "11", "12", "13"],
    answer: 2
  },
  {
    question: "Qual é o valor de π (pi) arredondado?",
    options: ["3.14", "3.15", "3.13", "3.12"],
    answer: 0
  },
  {
    question: "Quanto é 25% de 200?",
    options: ["40", "45", "50", "55"],
    answer: 2
  },
  {
    question: "Qual é o próximo número primo após 7?",
    options: ["9", "10", "11", "13"],
    answer: 2
  }
  // Adicione mais perguntas aqui até chegar a 100
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(index);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "Quiz finalizado!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  }
};

showQuestion();
