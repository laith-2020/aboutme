'use strict';

var score = 0;
var name = '';

welcome();  //welcome function


function welcome(){
    alert('Welcome To My Web Site ');
    name = prompt('Enter Your Name');
    console.log(name);
    alert('Welcome ' + name);
    
    alert('i would like to ask you 7 questions please answer with y/n or yes/no To get the score');
    Question1(); //question1 
    Question2(); //question2
    Question3();
    Question4();
    Question5();
    Question6();
    Question7();
    lastAlert();
    
}
//Question 1

function Question1(){
    var hunt = prompt(' Q1 Do i love hunting ? ');
    var hunt2 = hunt.toLowerCase();
    console.log(hunt2);
    
    if (hunt2 == 'y' || hunt2 == 'yes') {
        alert('your answer is true i love hunting ');
        score++;
    }
    else if (hunt2 == 'n' || hunt2 == 'no') {
        alert('your answer is false ');
    }
    else {
        alert('you should enter y/n or yes/no');
    }
}


//question 2

function Question2(){
    var coffie = prompt(' Q2 Do i love coffie ? ');
    var coffie2 = coffie.toLowerCase();
    console.log(coffie2);
    
    if (coffie2 == 'y' || coffie2 == 'yes') {
        alert('your answer is false');
    }
    else if (coffie2 == 'n' || coffie2 == 'no') {
        alert('your answer is true i don\'t like coffie ');
        score++;
    }
    else {
        alert('you should enter y/n or yes/no');
    }
    
}

// //question 3
function Question3(){
    var mansaf = prompt(' Q3 Do i love mansaf ? ');
    var mansaf2 = mansaf.toLowerCase();
    console.log(mansaf2);

    if (mansaf2 == 'y' || mansaf2 == 'yes') {
        alert('your answer is true i love Mansaf ');
        score++;
    }
    else if (mansaf2 == 'n' || mansaf2 == 'no') {
        alert('your answer is false ');
    }
    else {
        alert('you should enter y/n or yes/no');
    }

}


// //Question 4
function Question4(){
    var playgame = prompt(' Q4 Do i love playing game ? ');
    var playgame2 = playgame.toLowerCase();
    console.log(playgame2);
    
    if (playgame2 == 'y' || playgame2 == 'yes') {
        alert('your answer is true i play game');
        score++;
    }
    else if (playgame2 == 'n' || playgame2 == 'no') {
        alert('your answer is false');
    }
    else {
        alert('you should enter y/n or yes/no');
    }
    
}

// //Question 5
function Question5(){
    var playf = prompt(' Q5 Do i love play football ? ');
    var playf2 = playf.toUpperCase();
    console.log(playf2);

    if (playf2 == 'Y' || playf2 == 'YES') {

        alert('your answer is false i hat playing football');

    }
    else if (playf2 == 'N' || playf2 == 'NO') {
        alert('your answer is true ');
        score++;
    }
    else {
        alert('you should enter y/n or yes/no');
    }
}

// // in concatination way
// //alert('Welcome to my web site ' + ' ( ' + name + ')' + ' and thank you for your Time ');

// //in string interpolation way 
// // we called backtic for `
// //alert (`Welcome to my web site(  ${name}  )  and thank you for your Time` );


// //Question 6
function Question6(){
        var counter = 1;
    var answerWrong = false;
    var myHeight = 165;

    while (counter < 5) {
        var number = parseInt(prompt('Q 6 Guess My Height'));

        if (number > myHeight) {
            alert('You guessed too high! Guess again ');

        }
        else if (number < myHeight) {
            alert('You guessed too low! Guess again ');

        }
        else if (number == myHeight) {
            alert('That is correct! my height is 165!');
            score++;
            answerWrong = true;
            break;
        }
        console.log(counter);
        console.log(number);
        counter++;
    }
    if (!answerWrong) {
        alert('Sorry you run out of guesses My height Is 165 ');
    }
}


//Question 7
function Question7(){
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++) {
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Sorry wrong answer, try again');
        } 
        console.log(userAnsw);
    }

}

function lastAlert(){
    alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

    alert(` Thank You  ${name} For Answer The Questions You got  ${score} / 7 `);
}
