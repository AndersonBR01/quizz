//1°
const $startGameButton = document.querySelector(".start-quiz");

//°2
const $questionContainer = document.querySelector(".questions-container");

//3°
const $answersContainer = document.querySelector(".answers-container");

//4°
const $questionText = document.querySelector(".questions");

//5°
const $nextQuestionButton = document.querySelector(".next-question");

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);




//variavel auxiliar
let currentQuestionsIndex = 0;
let totalCorrect = 0;

//1 e 2°
function startGame() {
  $startGameButton.classList.add("hide");
  $questionContainer.classList.remove("hide");
  displayNextQuestion();
}

function displayNextQuestion() {
  resetState();
 //6° fin 
  if (questions.length === currentQuestionsIndex){
    return finishGame();
  }

  $questionText.textContent = questions [currentQuestionsIndex].question;
  questions[currentQuestionsIndex].answers.forEach(answers => {
    const newAnswers = document.createElement("button");
    newAnswers.classList.add("button", "answers")
    newAnswers.textContent = answers.text

    if(answers.correct){
        newAnswers.dataset.correct = answers.correct
    }
    $answersContainer.appendChild(newAnswers);

    newAnswers.addEventListener("click", selectAnswers)
  })
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);

  }

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

function selectAnswers(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct){
        document.body.classList.add("correct");
        totalCorrect++

    }else{
        document.body.classList.add("incorrect");
        
    }

    document.querySelectorAll(".answers").forEach(button =>{
      if (button.dataset.correct){
        button.classList.add("correct");
      }else {
        button.classList.add("incorrect");
      }

      button.disabled =true;
    });

    $nextQuestionButton.classList.remove("hide");
    currentQuestionsIndex++
}

function finishGame (){
  const totalQuestion = questions.length
  const performance = Math.floor(totalCorrect *100 / totalQuestion);

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente você salvou o Planeta Namekusei😁";
      break;
    case (performance >= 70):
      message = "Muito bom ainda da tempo de salvar o Planeta Namekusei 😅";
      break;
    case (performance >= 50):
    message ="Bom, o Planeta Namekusei ainda pode ser salvo "
    break
    default:
      message ="Planeta Namekusei foi destruido!!! 🙁"

  };

  $questionContainer.innerHTML = 
  
  `
    <p class = "final-message">
      Você acertou ${totalCorrect} de ${totalQuestion} questões!!
      <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class=button>
      Refazer Teste
    </button>
  `
}











const questions = [
  {
    question: "Quem e o filho Vegeta ?",
    answers: [
      { text: "Trunks", correct: true },
      { text: "Gohan", correct: false },
      { text: "Goten", correct: false },
      { text: "Bills", correct: false },
    ],
  },
  {
    question: "Qual o nome do Lendario Super Sayadin?",
    answers: [
      { text: "Trunks", correct: false },
      { text: "Gohan", correct: false },
      { text: "Goku", correct: false },
      { text: "Brolly", correct: true},
    ],
  },
  {
  question: "Quem venceu a luta contra o Raditz?",
    answers: [
      { text: "Bulma e Titi", correct: false },
      { text: "Goku e Piccolo", correct: true},
      { text: "Vegeta", correct: false },
      { text: "Gonha", correct: false},
    ],
  },
  {
    question: "Quanto tempo o Goku tinha pra treinar com Sr.Kaioh?",
      answers: [
        { text: "3 Anos", correct: false },
        { text: "1 Ano", correct: false},
        { text: "5 Dias", correct: false },
        { text: "158 Dias", correct: true},
      ],
    },

    {
      question: "Qual transformação que Goku usa para impedir o Nappa?",
        answers: [
          { text: "Super Saiyajin", correct: false },
          { text: "Kaioken", correct: true},
          { text: "Fusão", correct: false },
          { text: "Instinto Superior", correct: false},
        ],
      },

      {
        question: "Os amigos de Goku perde ou vence contra as forças Ginyu?",
          answers: [
            { text: "Perde", correct: true },
            { text: "Vence", correct: false},
            { text: "Morrem", correct: false },
            { text: "Nenhuma das opções", correct: false},
          ],
        },

        {
          question: "O Goku vira Super Saiyajn por causa da ....",
            answers: [
              { text: "morte Gohna", correct: false },
              { text: "morte de Kuririn", correct: true},
              { text: "morte de Titi", correct: false },
              { text: "morte de Goten", correct: false},
            ],
          },

          {
            question:"Qual das sagas abaixo não fazem parte do cânone da obra?",
            answers:[
            { text: "Dragon Ball Z", correct: false},
            { text: "Dragon Ball Super", correct: false},
            { text: "Dragon Ball GT", correct: true},
            { text: "Dragon Ball Clássico", correct: false},
            ],
          },
          {
            question:"Qual o nome da forma animal de Goku?",
            answers:[
            { text: "Oozaru", correct: true },
            { text: "Son Goku",correct: false },
            { text: "Crazy Monkey",correct: false },
            { text: "Hiyomary",correct: false},
            ],
          },
          
          {
            question:"Qual a comida favorita de Bulma?",
            answers:[
            { text: "Lámen", correct: false},
            { text: "Morango", correct: true},
            { text: "Churrasco", correct: false}, 
            { text: "Maça", correct: false},
            ],
          },
          
          {
            question:"Quando se comemora o 'Dia do Goku' no Japão?",
            answers:[
            { text: "16 de Abril", correct: false},
            { text: "09 de Março", correct: false},
            { text: "10 de Fevereiro", correct: false },
            { text: "09 de Maio", correct: true},
            ],
          },
          
          {
            question:"Em qual episodio e capítulo do manga o Freeza aparece pela primeira vez?",
            answers:[
            { text: "Episodio 44 e capitulo 131", correct: true },
            { text: "Episodio 36 e capitulo 120", correct: false},
            { text: "Episodio 22 e capitulo 131", correct: false },
            { text: "Episodio 98 e capitulo 180", correct: false},
            ],
          },
          
          {
            question:"Qual o nome do Avô adotivo terráqueo de Goku?",
            answers:[
            { text: "Gorou", correct: false},
            { text: "Gon", correct: false},
            { text: "Gohan", correct: true },
            { text: "Goiki", correct: false},
            ],
          },
          
];
