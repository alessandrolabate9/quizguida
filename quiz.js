window.onload = ()=> {
  //variables
var questions = [
  {
      question: "La fermata è consentita allo sbocco dei passi carrabili?",
      choices: ["V", "F"],
      answer: "V"
    },
    {
        question: "Nel caso in cui la sosta è espressamente vietata da una norma del codice stradale, l'osservanza di tale divieto non è condizionata dalla presenza di cartelli segnaletici?",
        choices: ["V", "F"],
        answer: "F"
      },
      {
          question: "In caso di sosta in un centro abitato, il conducente deve collocare il veicolo il più vicino possibile al margine destro della carreggiata, anche dove non esiste il marciapiede rialzato",
          choices: ["V", "F"],
          answer: "F"
        },
        {
            question: "La sosta e la fermata sono sempre vietate sugli attraversamenti pedonali",
            choices: ["V", "F"],
            answer: "V"
          },
          {
              question: "La sosta e la fermata sono vietate in corrispondenza dei segnali orizzontali di preselezione e lungo le corsie di canalizzazione",
              choices: ["V", "F"],
              answer: "V"
            },
            {
                question: "È consentito il sorpasso in prossimità o in corrispondenza di passaggi a livello senza barriere se la circolazione è regolata da semafori",
                choices: ["V", "F"],
                answer: "V"
              },
              {
                  question: "Su strade extraurbane principali il limite massimo di velocità è di 70 km/h per autovettura che traina caravan da 900 chilogrammi",
                  choices: ["V", "F"],
                  answer: "V"
                },
                {
                    question: "Sulla distanza di sicurezza influisce l'efficienza del freno di servizio",
                    choices: ["V", "F"],
                    answer: "V"
                  },
                  {
                      question: "Il cono si usa per indicare un parcheggio riservato",
                      choices: ["V", "F"],
                      answer: "F"
                    },
                    {
                        question: "I motocicli con cilindrata di almeno 150 cm3 possono circolare in autostrada",
                        choices: ["V", "F"],
                        answer: "V"
                      },
                      {
                          question: "L'attraversamento pedonale è una parte della carreggiata sulla quale è vietata la fermata dei veicoli",
                          choices: ["V", "F"],
                          answer: "V"
                        },
                        {
                            question: "Quando la carreggiata extraurbana è occupata da ciclisti o pedoni, è consigliabile suonare il clacson prima di sorpassarli",
                            choices: ["V", "F"],
                            answer: "V"
                          },
                          {
                              question: "L'isola di traffico è una zona destinata al parcheggio dei veicoli",
                              choices: ["V", "F"],
                              answer: "F"
                            }, //false da 69 in poi
                            {
                                question: "Il pannello integrativo raffigurato segnala che la carreggiata è occupata da veicoli incidentati",
                                choices: ["V", "F"],
                                answer: "V"
                              },
                              {
                                  question: "Il delineatore raffigurato ha le punte delle frecce che segnalano le direzioni possibili",
                                  choices: ["V", "F"],
                                  answer: "V"
                                },
                                {
                                    question: "Il delineatore raffigurato è posto all'ingresso di una galleria",
                                    choices: ["V", "F"],
                                    answer: "F"
                                  },
                                  {
                                      question: "La barriera raffigurata può utilizzarsi nei passaggi a livello quando le sbarre sono guaste",
                                      choices: ["V", "F"],
                                      answer: "V"
                                    },
              {
                  question: "Il segnale raffigurato raccomanda l'uso delle catene o di pneumatici invernali fino a Trafoi",
                  choices: ["V", "F"],
                  answer: "V",
                  image: "img/stelvio.png"
                },
                {
                    question: "Il segnale raffigurato indica che non è possibile viaggiare ad una velocità più bassa di quella indicata",
                    choices: ["V", "F"],
                    answer: "F",
                    image: "img/sessa.png"
                  },
                  {
                      question: "Il segnale raffigurato è posto all'inizio di una strada extraurbana principale",
                      choices: ["V", "F"],
                      answer: "V",
                      image: "img/extra_princ.png"
                    },
                    {
                        question: "Il segnale raffigurato invita a fare particolare attenzione in caso di forte vento",
                        choices: ["V", "F"],
                        answer: "V",
                        image: "img/ponte.png"
                      },
                      {
                          question: "Quando è accesa la luce verde del semaforo in figura si può impegnare l'incrocio, soltanto avendo la certezza di poterlo sgomberare prima dell'accensione della luce rossa",
                          choices: ["V", "F"],
                          answer: "V",
                          image: "img/semaforo.png"
                        },
                        {
                            question: "L'elemento in figura è posto su un tratto di strada su cui è vietata la sosta",
                            choices: ["V", "F"],
                            answer: "F",
                            image: "img/dosso.png"
                          },
                          {
                              question: "Il segnale raffigurato obbliga a svoltare subito a destra",
                              choices: ["V", "F"],
                              answer: "F",
                              image: "img/svoltadx.png"
                            },
                            {
                                question: "Il segnale raffigurato precede il segnale DARE PRECEDENZA",
                                choices: ["V", "F"],
                                answer: "F",
                                image: "img/ics_pass_livello.png"
                              },
                              {
                                  question: "Le strisce di guida in figura debbono essere lasciate alla sinistra del veicolo quando si svolta a sinistra",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },
                                {
                                  question: "La corsia di mezzo rappresentata in figura consente al conducente solo di proseguire diritto",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il dispositivo luminoso in figura è costituito da luci lampeggianti alternativamente che si accendono durante la fase di apertura (sollevamento) delle semibarriere",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Dovendo attraversare l'incrocio rappresentato in figura il veicolo E deve dare la precedenza al veicolo A",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "In una strada a senso unico di circolazione con la segnaletica indicata in figura per svoltare a sinistra bisogna rimanere nella corsia di destra",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "La striscia bianca trasversale in figura viene abbinata con il segnale di DARE PRECEDENZA",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il bordo del marciapiede come dipinto in figura vieta la sosta anche ai taxi",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Le strisce di delimitazione gialle in figura individuano un'area di parcheggio riservata a persone invalide",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Le strisce di guida in figura, di norma, si trovano dove la svolta a sinistra si effettua lasciando alla nostra destra il centro dell'incrocio",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato è un segnale di precedenza",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato può essere seguito dal segnale FERMARSI E DARE PRECEDENZA",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato è un preavviso di fermarsi e dare precedenza",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica la distanza dall'incrocio in cui dovremo obbligatoriamente fermarci",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "In presenza del segnale raffigurato e del semaforo a tre luci dobbiamo dare la precedenza se il semaforo è a luce lampeggiante gialla",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato vieta il transito a tutti i veicoli",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica la fine di una prescrizione",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                    question: "In presenza del segnale raffigurato un autocaravan di massa a pieno carico superiore a 3,5 tonnellate non può sorpassare veicoli a motore",
                                    choices: ["V", "F"],
                                    answer: "F",
                                    image: "img/strisceguida.png"
                                },   {
                                    question: "Il segnale raffigurato indica direzione obbligatoria a destra",
                                    choices: ["V", "F"],
                                    answer: "F",
                                    image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato segnala la presenza di un comando stazione carabinieri, con posto di blocco",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato obbliga a svoltare a sinistra o a destra all'incrocio",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica che è obbligatorio passare a sinistra dell'ostacolo",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato indica passaggio consentito alla destra ed alla sinistra di un ostacolo",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato presegnala il senso unico di circolazione nella svolta a sinistra",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                    question: "Il delineatore raffigurato è installato ad un incrocio a forma di T",
                                    choices: ["V", "F"],
                                    answer: "V",
                                    image: "img/strisceguida.png"
                                },   {
                                  question: "Il delineatore raffigurato è usato per migliorare la visibilità delle curve",
                                  choices: ["V", "F"],
                                  answer: "V",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "I delineatori raffigurati sono posti ai lati della carreggiata nelle strade a senso unico",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il delineatore raffigurato presegnala una corsia riservata agli autobus o taxi",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "I delineatori raffigurati sono posti su strada a doppio senso",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                },   {
                                  question: "Il segnale raffigurato preavvisa un semaforo che regola il traffico in transito su ponti mobili o girevoli",
                                  choices: ["V", "F"],
                                  answer: "F",
                                  image: "img/strisceguida.png"
                                }                                                                                
];

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click', ()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  }, 610)

  var quiz = document.getElementById('quiz');
  var limite = document.getElementById('limite');
  var questionL = document.getElementById('question');
  var choicesL = document.getElementById('choices');
  var submit = document.getElementById('submit');
  var scoreL = document.getElementById('result');
  var retake = document.getElementById('retake');
    //timing variables
  var interval;
  var second = 00;
  var minute = 00;
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
    //handling questions
  let contaDomande = 1;
  let currentQuestion = 0;
  let score = 0;

  limite.innerHTML = contaDomande + ' di 30';
  retake.addEventListener('click', foo);
  
// functions
clearInterval(interval);
if(contaDomande>=1){
  interval = setInterval(startTime,1000);
  startTime();
}

  
  
  function foo(){
      window.location.reload();
      startTime();
  }
  function loadQuestion() {
    currentQuestion = (Math.floor(Math.random()*(questions.length))+0);
    if (currentQuestion>=questions.length) currentQuestion-=1;
    const question = questions[currentQuestion];
    questionL.textContent = question.question;
  
    choicesL.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.value = choice;
      button.classList.add("choice");
      button.dataset.index = index;
      button.addEventListener("click", selectAnswer);
      choicesL.appendChild(button);
    });
    if (question.image!= null){
      const image = document.createElement('img');
      image.setAttribute('src', question.image);
      choicesL.appendChild(image);
    }else{
      const image = document.createElement('img');
      image.setAttribute('src', "img/sfondo.png");
      choicesL.appendChild(image);
    }
  }
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
    }
  })
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.value;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }

    contaDomande++;
    limite.innerHTML = contaDomande + ' di 30';
  
    if (contaDomande <= 30){
      loadQuestion();
    } else {
      showScore();
      clearInterval(interval);
    }
}

function startTime(){
  second++;
  /*console.log("Prova -->" + second);*/
  if(second>0)
      sec.innerHTML= "0" + second;
  if(second>9)
      sec.innerHTML = second;
  if(second>59) {
      second = 00;
      minute++;
      min.innerHTML = "0" + minute; 
  }
  if(minute==1)
  showScore();
  
}
  function showScore() {
    quiz.innerHTML = "";
    if (score>=26)
      scoreL.textContent = `Congratulations! You've passed the exam simulation: ${score} out of ${contaDomande-1}!`;
    else
      if (minute==1)
      scoreL.textContent = 'Oh no! Time is out ' + String.fromCodePoint('128549');
      else  
        scoreL.textContent = `Oh no! You've only scored ${score} out of 30!` + String.fromCodePoint('128553');
        // ${contaDomande-1}!`;
    retake.style='display:block';
    quiz.appendChild(scoreL);
    quiz.appendChild(retake);
  }
    loadQuestion();
    submit.addEventListener("click", selectAnswer);
  });  
}