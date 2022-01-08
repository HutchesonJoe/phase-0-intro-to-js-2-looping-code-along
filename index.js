//code your solution in this file
const cardList = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
//console.log(`Thank you, ${names[i]}, for the ${event} card!`);
const newCard = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
cardList.push(newCard)
;

//1. push messages into array(cardList)
//2. Return it. 
    }
//console.log(cardList);    
return cardList;  
}

cardList;
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
    let countdown=number;
    while (countdown >= 0){
        console.log(countdown--);
    }
}

countDown(10);