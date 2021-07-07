const choices=document.querySelectorAll('.choice');
const score=document.getElementById('score');
const result=document.getElementById('result');
const restart=document.getElementById('restart');
const modal=document.querySelector('.modal');
const scoreboard={
    player:0,
    computer:0
};
//play game
function play(e){  
restart.style.display='inline-block';
//console.log(e.target.id);
const playerchoice=e.target.id;
const computerChoice=getComputerChoice();
console.log(playerchoice,computerChoice);
const winner=getWinner(playerchoice,computerChoice);
showWinner(winner,computerChoice);
console.log(winner);
}

//get computer choice
function getComputerChoice(){
    const rand=Math.random();
    if(rand<0.34)
    {
        return 'rock';
    }
    else if(rand<=0.67)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}
//get game winner
function getWinner(p,c){
    if(p===c)
    return 'draw';
    else if(p==='rock')
    {
        if(c==='scissors')
    return 'player';
    else if(c==='paper')
    return  'computer';
   }
   else if(p==='scissors')
   {
       if(c==='paper')
       return 'player';
       else if(c==='rock')
       return 'computer';
   }
   else if(p==='paper')
   {
       if(c==='scissors')
       return 'computer';
       else if(c==='rock')
       return 'player';
   }
}
function showWinner(winner,computerChoice){
    if(winner=='player'){
        //Inc player score
        scoreboard.player++;
        //show model result
        result.innerHTML=` <h1 class="text-win">You Win :)</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    else if(winner=='computer')
    {
          //Inc computer score
          scoreboard.computer++;
          //show model result
          result.innerHTML=`
          <h1 class="text-lose">You Lose :(</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer chose <strong>${computerChoice}</strong></p>
          `;

    }
    else
    {
          //show model result
          result.innerHTML=`
          <h1>It's A Draw!!</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer chose <strong>${computerChoice}</strong></p>`;

    }
    //show score
    score.innerHTML=` 
    <p><b>Player:${scoreboard.player}</b></p>
    <p><b>Computer:${scoreboard.computer}</b></p>
    `;
    modal.style.display = 'block';
}
//restart game
function restartGame(){
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML=`<p><b>Player:0</b></p>
    <p><b>Computer:0</b></p>`;
}

//clear modal
function clearModal(e)
{
    if(e.target==modal)
    modal.style.display='none';
}
//event listener
choices.forEach(choice=>{choice.addEventListener('click',play)});
window.addEventListener('click',clearModal);
restart.addEventListener('click',restartGame);