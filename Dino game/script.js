
var dino = document.getElementById("dino");
var enemy = document.getElementById("enemy");
var score = document.getElementById("score");

function jump(){
    dino.classList.add('jump_animation');
    setTimeout(() => {
        dino.classList.remove('jump_animation')
    }, 500);
}

document.addEventListener('keypress',() =>{

    if(!dino.classList.contains('jump_animation')){
        jump();
    }
});


setInterval(() => {

    score.innerText++; // updating the score of the user 
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

    if(enemyLeft < 0){ enemy.style.display ='none'; }
    else { enemy.style.display = '';} // this removes the none value and makes the enemy reapper in the animation

    // TO check the collision which is detected by taking the top position of our dio and the left position of our enemy. 
    if(enemyLeft < 150 && enemyLeft > 0 && dinoTop > 200){
        // if the enemy is at the left bottom of the screen i.e. exactly near our dino and the dino top is >150 means near the bottom of the screen i.e., near our enemy --> COLLISION 
        alert('Game over!!\nYour score is: '+ score.innerText+'\nWanna play again? ');
        // if they click OK, we will reload the page so that the animation starts over and the set Interval starts again
        location.reload();
    }

},100);