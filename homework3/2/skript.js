let currentQuestion = 1;
let score = 0;
const labelAnswerOne = document.getElementById('labelAnswerOne');
const labelAnswerTwo = document.getElementById('labelAnswerTwo');

function changeImage() {
    document.getElementById('myImage').src = "measf.png"; 
    labelAnswerOne.innerText = "bitch ass cuck hobo ant";
    labelAnswerTwo.innerText = "t̵̲̦͔̃͋͆̃͝h̴͈̺͎̗͚̱͚̱͙̠̗̳̠͉̾͒̿̋͂͂́͐̇̾́e̶͚̝͚͛ ̶̧͍̳̋̈́̈́͊͒̑̇͝ͅf̵̦̪͈̮͖̖̖͍̊͐̇̓͒̑ő̸̹̤̏̊̅̿̓̚r̵̩̼͕͈̬̂g̵̛̫̲̺̖̟̅͒̏o̷̬̦̜̫̱̜̲̤͓͈̩̜̻̓͂͆̔̀̔͝ͅt̵̡̰͇͇̺̦̟́͊̂́̾̇̏͗̋͆t̴̢͔͚̜͕̟̮̥̭̻͖͍̀͊͆̓̓̌͜e̶̙͙̼͗͋̐̇̔̑̒̎͆͗͝ͅn̶̲͎̹͚̪̰̘̮̑ ̸̠͍͓̤͚̦̟͉̹͈̈̑̌̓̐̎̀ỏ̶̡̧͇̺̺̜͙̙̯͎̠͕̊̑͆͝n̶̢̨̛̼̤͎̱̦͙̲͖͔̎͗͑̎̽̓̆̈́́̊̃e̵̙̼̘̰͙̋͝";

}

function checkAnswer() {
    const answerOneChecked = document.getElementById('answerOne');
    const answerTwoChecked = document.getElementById('answerTwo');


    if (currentQuestion === 1 && answerTwoChecked) {
        score++;
    } else if (currentQuestion === 2 && answerOneChecked) {
        score++;

    }

    currentQuestion++;
    if (currentQuestion <= 2) {
        changeImage();
        answerOneChecked.checked = false;
        answerTwoChecked.checked = false;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('score').innerText = score;

    const resultText = (score === 2) ? "Yippee ai reusit!" : " Wippee nu ai reusit!";
    document.getElementById('question').innerText = resultText;
}
