const sounds = ['sound1.wav', 'sound2.wav', 'sound3.wav']; // array
let nivel = 0;
let sequence = [];
let userSequence = [];
let isUserTurn = false;

//-----------Start game--------------------------------------
function startGame(){
  document.getElementById('startButton').disabled = true;
  //document.getElementById('nextButton').disabled = false;
  playRandomSound();
  displayVariable();
}

function nextPuzzle(){
  document.getElementById('nextButton').disabled = true;
  console.log('next puzzle');
  playRandomSound();
  displayVariable();
}

function nextLevel(){
  nivel += 1;
}

function displayVariable(){
  const nivelCounter = document.getElementById('nivelCounter');
  nivelCounter.textContent = nivel;
}
//-----------Sounds-------------------------------------------
function playSoundOne(){
  checkSound('sound1.wav');
  var snd = new Audio("sound1.wav");
  snd.play();
}

function playSoundTwo(){
  checkSound('sound2.wav');
  var snd = new Audio("sound2.wav");
  snd.play();
}

function playSoundThree(){
  checkSound('sound3.wav');
  var snd = new Audio("sound3.wav");
  snd.play();
}

function playSound(filename) {
  var snd = new Audio(filename);
  snd.play();
}

//-----------Gameplay  loop--------------------------------------
function checkSound(expectedSound) {
  if (expectedSound === lastPlayedSound) {
    console.log('Corect! Sunetul auzit coincide cu sunetul butonului.');
    document.getElementById('nextButton').disabled = false;
   // const numereSelectate = selectRandomId(buttonIds, 3);
    //console.log('Numerele selectate la întâmplare:', numereSelectate);
    nextLevel()
  } else {
    console.log('Greșit! Sunetul auzit nu coincide cu sunetul butonului.');
    document.getElementById('startButton').disabled = false;
    document.getElementById('nextButton').disabled = true;
    nivel = 0;
  }
}

let lastPlayedSound;

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const randomSound = sounds[randomIndex];
  playSound(randomSound);
  lastPlayedSound = randomSound;
}

