console.log("Hi There Deone");

//TEAM ONE NUMBER SHOTS//

let teamOneNumshots = document.querySelector("#teamone-numshots");

let NewNumberShots = Number(teamOneNumshots.innerHTML);

let teamOneShootButton = document.querySelector("#teamone-shoot-button");

teamOneShootButton.addEventListener("click", function() {
    console.log("+ number of shots");

    NewNumberShots += 1;
   
    teamOneNumshots.innerHTML = NewNumberShots;
    console.log("+ shoot");
})

//TEAM ONE GOAL SHOTS//

let teamOneNumGoals = document.querySelector("#teamone-numgoals");

let NewNumberGoals = Number(teamOneNumGoals.innerHTML);

let teamOneGoalButton = document.querySelector("#teamone-shoot-button");

teamOneGoalButton.addEventListener("click", function() {
    console.log("+ number of Goals");

    if (Math.random() * 2 < 1) {
        alert("Good");

    NewNumberGoals += 1;
        
    }
    
    
    teamOneNumGoals.innerHTML = NewNumberGoals;
    console.log("+ Goal");
})


//TEAM TWO NUMBER SHOTS//

let teamTwoNumshots = document.querySelector("#teamtwo-numshots");

let NewNumberShotsTwo = Number(teamTwoNumshots.innerHTML);

let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

teamTwoShootButton.addEventListener("click", function() {
    console.log("+ number of shots");

    NewNumberShotsTwo += 1;
   
    teamTwoNumshots.innerHTML = NewNumberShotsTwo;
    console.log("+ shoot");
})

//TEAM TWO GOAL SHOTS//

let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");

let NewNumberGoalsTwo = Number(teamTwoNumGoals.innerHTML);

let teamTwoGoalButton = document.querySelector("#teamtwo-shoot-button");

teamTwoGoalButton.addEventListener("click", function() {
    console.log("+ number of Goals");

    if (Math.random() * 2 < 1) {
        alert("Good"); function playAudio(url) {
        new Audio().play(https/www.myinstants.com/instant/mlg-air-horn);


    
}

    NewNumberGoalsTwo += 1;
    }   
    teamTwoNumGoals.innerHTML = NewNumberGoalsTwo;
    console.log("+ Goal");
})

// RESET BUTTON//

let teamOneResetshots = document.querySelector("#teamone-numshots");
let NewResetShotsOne = Number(teamOneResetshots.innerHTML);
let teamOneShootReset = document.querySelector("#teamone-shoot-button");

let teamTwoResetshots = document.querySelector("#teamtwo-numshots");
let NewResetShotsTwo = Number(teamTwoResetshots.innerHTML);
let teamTwoShootReset = document.querySelector("#teamtwo-shoot-button");

let teamOneResetGoals = document.querySelector("#teamone-numgoals");
let NewResetGoalsOne = Number(teamOneResetGoals.innerHTML);
let teamOneGoalReset = document.querySelector("#teamone-shoot-button");

let teamTwoResetGoals = document.querySelector("#teamtwo-numgoals");
let NewResetGoalsTwo = Number(teamTwoResetGoals.innerHTML);
let teamTwoGoalReset = document.querySelector("#teamtwo-shoot-button");

let numReset = document.querySelector("#num-resets");

let NewNumReset = Number(numReset.innerHTML);

let ResetButton = document.querySelector("#reset-button");

    ResetButton.addEventListener("click", function() {

        console.log("Reset Number");

        NewNumReset += 1;
        NewResetGoalsTwo += 0;
        NewResetGoalsOne += 0;
        NewResetShotsOne += 0;
        NewResetShotsTwo += 0;


        numReset.innerHTML = NewNumReset;
        teamOneResetGoals.innerHTML = NewResetGoalsOne;
        teamTwoResetGoals.innerHTML = NewResetGoalsTwo;
        teamOneResetshots.innerHTML = NewResetShotsOne;
        teamTwoResetshots.innerHTML = NewResetShotsTwo;
        
        
        
    })

   














//if (Math.random() * 100 < 80) {
    //console.log("good");
    //}
    //else if (Math.random() * 100 < 5) {
    //sendMessage("bye");
    //}//


   //if(count % 2 === 0) {
    //counter.style.color = ("red");//




