const allBtns = document.querySelectorAll('.btn');
const winner = document.querySelector('.winner');
const hands = document.querySelector('.hands');
const score = document.querySelector('.score');
const choice = ['rock','paper','scissor'];
var userChoice,robotChoice,points=0;

const calscore = () =>{
    if((userChoice == 'rock' && robotChoice =='scissor') || (userChoice == 'scissor' && robotChoice == 'paper') || (userChoice == 'paper' && robotChoice == 'rock')){
        points++;
        score.innerText = points;
        hands.innerText = `👱 ${userChoice} VS 🤖 ${robotChoice}`;
        winner.innerText = 'You Won!';
    }
    else if(userChoice == robotChoice){
        score.innerText = points;
        hands.innerText = `👱 ${userChoice} VS 🤖 ${robotChoice}`;
        winner.innerText = 'It\'s a Draw!';
    }
    else {
        points--;
        score.innerText = points;
        hands.innerText = `👱 ${userChoice} VS 🤖 ${robotChoice}`;
        winner.innerText = 'You Lose!';
    }
    
};
const resetgame = () =>{
    points = 0;
    score.innerText = '';
    hands.innerText = '';
    winner.innerText = '';
};
allBtns.forEach(button =>{
    button.addEventListener('click',()=>{
        userChoice = button.value;
        robotChoice = choice[Math.floor(Math.random()*(choice.length))];        
        if(userChoice == 'reset'){
            resetgame();
        }
        else{
            calscore();
        }
    });
});