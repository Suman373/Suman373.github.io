
document.addEventListener('DOMContentLoaded', ()=>{


    const imageList = [
        {
            name: 'earth',
            image: 'images/Earth.jpg'
        },
        {
            name: 'earth',
            image: 'images/Earth.jpg'
        },
        {
            name: 'moon',
            image: 'images/Moon.jpeg'
        },
        {
            name: 'moon',
            image: 'images/Moon.jpeg'
        },
        {
            name: 'mars',
            image: 'images/Mars.jpg'
        },
        {
            name: 'mars',
            image: 'images/Mars.jpg'
        },
        {
            name: 'io',
            image: 'images/IO.jpeg'
        },
        {
            name: 'io',
            image: 'images/IO.jpeg'
        },
        {
            name: 'titan',
            image: 'images/Titan.jpeg'
        },
        {
            name: 'titan',
            image: 'images/Titan.jpeg'
        }
    ];
    imageList.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board');

    let chosenCards = []// empty array to store the chosen cards
    let chosenId = []// empty array to store the chosen card's ids
    const cardsInGame = 5;
    let score = 0;
    let tries = 8;
    const triesCount = document.querySelector('.tries-count');
    const scoreCount = document.querySelector('.score-count');

    triesCount.textContent = tries;
    scoreCount.textContent = score;


    

    function startBoard() {
        for(let i = 0; i < imageList.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/placeholder.gif');
            card.setAttribute('data-id',i);
            
            card.addEventListener('click', flip);
            board.appendChild(card);
        }
    };
    

    function flip() {
      

        if (chosenCards.length != 2) {
            let cardId = this.getAttribute('data-id');
            if (this.getAttribute('src') != 'images/blank.png'){
                chosenCards.push(imageList[cardId].name);
                chosenId.push(cardId);
                this.setAttribute('src', imageList[cardId].image);
                if (chosenCards.length === 2) {
                    setTimeout(() => {
                        checkMatch();
                    }, 400);

                }
            }
        }

    }
    function checkMatch(){
        tries--;
        let cards = document.querySelectorAll('img');
        let firstCard = chosenId[0];
        let secondCard = chosenId[1];
        console.log(`${firstCard}`);
        if(chosenCards[0]===chosenCards[1]){
            score++;
            cards[firstCard].setAttribute('src','images/blank.png');
            cards[secondCard].setAttribute('src','images/blank.png');
        }
        else{
            cards[firstCard].setAttribute('src','images/placeholder.gif');
            cards[secondCard].setAttribute('src','images/placeholder.gif');
            console.log("Else part");
        }
        //refactoring as empty array for the next tries 
        chosenCards=[];
        chosenId=[];
        triesCount.textContent=tries;
        scoreCount.textContent=score;
        if(score === cardsInGame){
            alert("You have won!");
            setTimeout(()=>{
                location.reload();
            },2000);
        }
        else if(tries===0){
            alert(`You are out of attempts.Your score is ${score}`);
            setTimeout(()=>{
                location.reload();
            },3000);
        }
    }

    startBoard();

});
