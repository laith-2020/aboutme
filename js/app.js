'use strict';

alert('Welcome To My Web Site ');

var name =prompt('Enter Your Name');
console.log(name);

alert ('Welcome ' + name);

alert('i would like to ask you 5 questions please answer with y/n or yes/no');

var hunt=prompt('Do i love hunting ? ');
var hunt2=hunt.toLowerCase();
console.log(hunt2);

if(hunt2 == 'y' || hunt2 == 'yes')
{
    alert('your answer is true i love hunting ');
}
else if (hunt2 == 'n' || hunt2 == 'no') {
    alert('your answer is false ');
}
else {
    alert('you should enter y/n or yes/no');
}


var coffie=prompt('Do i love coffie ? ');
var coffie2=coffie.toLowerCase();
console.log(coffie2);

if(coffie2 == 'y' || coffie2 == 'yes')
{
    alert('your answer is false');
}
else if (coffie2 == 'n' || coffie2 == 'no') {
    alert('your answer is true i don\'t like coffie ');
}
else {
    alert('you should enter y/n or yes/no');
}


var mansaf=prompt('Do i love mansaf ? ');
var mansaf2=mansaf.toLowerCase();
console.log(mansaf2);

if(mansaf2 == 'y' || mansaf2 == 'yes')
{
    alert('your answer is true i love Mansaf ');
}
    else if (mansaf2 == 'n' || mansaf2 == 'no')
     {
        alert('your answer is false ');
    }
    else {
        alert('you should enter y/n or yes/no');
    }
   

 var playgame=prompt('Do i love playing game ? ');
var playgame2=playgame.toLowerCase();
console.log(playgame2);

if(playgame2 == 'y' || playgame2 == 'yes'){
    alert('your answer is true i play game');
}
else if (playgame2 == 'n' || playgame2 == 'no'){
    alert('your answer is false');
}
else {
    alert('you should enter y/n or yes/no');
}


 var playf=prompt('Do i love play football ? ');
 var playf2=playf.toUpperCase();
 console.log(playf2);

 if(playf2 =='Y' || playf2 == 'YES')
 {

    alert('your answer is false i hat playing football');

 }
else if (playf2 == 'N' || playf2 ==  'NO'){
    alert('your answer is true ');
}
 else {
     alert('you should enter y/n or yes/no');
 }

alert ('Welcome to my web site ' + ' ( ' +  name + ')' + ' and thank you for your Time ' );
