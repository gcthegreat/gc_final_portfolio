var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+ap+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);

function playGame() {

var correctAnswers = 0
var incorrectAnswers = 0

var userAnswer = confirm ("DO YOU WANT TO PLAY A GAME?")

if (userAnswer) {
    var userFood = prompt ("What is Gc's favorite food? (Trick Question!)")
    userFood = userFood.toLowerCase()
    console.log (userFood)
    if (userFood === "all") {
        correctAnswers++
        alert ("Wow! Good guess!")
    }
    else {
        incorrectAnswers++
        alert ("Wrong! Try not to fall sleep tonight!")
    }

    var userHobby = prompt ("What is one thing Gc does as a hobby? (Past or Present)")
    userHobby = userHobby.toLowerCase()
    
    if (userHobby === "volleyball") {
        correctAnswers++
        alert ("You payed attention! Nice.")
    }
    else if (userHobby === "karate") {
        correctAnswers = correctAnswers + 5
        alert ("WOW! You really payed attention! Stalker much?")
    }
    else {
        incorrectAnswers++
        alert ("Wrong! Check the shower before you go to bed tonight!")
    }
    
    var userGuess = prompt ("Why did I miss class for a whole week?")
    userGuess = userGuess.toLowerCase()
    
    if (userGuess === "mono") {
        correctAnswers++
        alert ("Yea... twas not fun times...")
    }
    else if (userGuess === "corona", "covid", "covid-19") {
        incorrectAnswers = incorrectAnswers + 5
        alert ("JESUS NO! I TESTED NEGATIVE. DON'T USE ANY COVERS TONIGHT!")
    }
    else {
        incorrectAnswers++
        alert ("Wrong! Don't sleep with any covers tonight! She might be there.")
    }
    
    alert ("Correct Answers: " + correctAnswers + " " + "Incorrect Answers: " + incorrectAnswers)
}

else {
    alert ("Try not to fall alseep tonight!")
}
}