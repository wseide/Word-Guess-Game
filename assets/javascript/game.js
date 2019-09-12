//create your VAR for wins, losses, and customes array
var wins = 0;

var losses = 0;

var halloweenCostumes = ["witch", "vampire", "frankenstein", "ghost", "werewolf", "doctor", "superhero", "monster", "animal", "villian"]

//input the random math function
function wordplay() {
    var wordAnswer = halloweenCostumes[Math.floor(Math.random() * halloweenCostumes.length)];
    var remainingChoices = wordAnswer.length;

//input the choices you have left, answer block, guesses of the words, and the having right or same word
    var choicesLeft = 6;
    var answer = [];
    var showGuesses = [];
    var rightOrSame;

    var costumesd = document.getElementById('costume');
    var winsd = document.getElementById('wins');
    var answerd = document.getElementById('answer');
    var photod = document.getElementById('correctphoto');
    var guessd = document.getElementById('guesses')
    var remainingd = document.getElementById('remaining');
}

//for loop for word length
//**comment it out to look for undefined error */
//for (var i = 0; i < wordAnswer.length; i++) {
    //answer.push("_");
//}

//var displayString = answer.join(" ");


//divs with the win 
costumesd.innerHTML = "Costume";
winsd.innerHTML = "Wins: " + wins + "Losses: " + losses;
answerd.innerHTML = "Word: " + displayString;
guessd.innerHTML = "Letters you have Chose: " + (showGuesses.join(" "));
remainingd.innerHTML = "Letters Remaining:" + guesses;


//even when user hits a letter
document.onkeyup = function (event) {
    rightOrSame = false;
    var userInput = event.key;
    userInput = userInput.toLowerCase();


    //if statements
    if (userInput === 'a' || userInput === 'b' || userInput === 'c' || userInput === 'd' || userInput === 'e' || userInput === 'f' || userInput === 'g' || userInput === 'h' || userInput === 'i' || userInput === 'j' || userInput === 'k' || userInput === 'l' || userInput === 'm' || userInput === 'n' || userInput === 'o' || userInput === 'p' || userInput === 'q' || userInput === 'r' || userInput === 's' || userInput === 't' || userInput === 'u' || userInput === 'v' || userInput === 'w' || userInput === 'x' || userInput === 'y' || userInput === 'z') 
    
    
    {
        if (showGuesses.toString().includes((userInput.toUpperCase()))) {
            rightOrSame = true;
        } else {
            showGuesses.push(" " + userInput.toUpperCase());
            guessd.innerHTML = "Letters Already Guessed: " + (showGuesses.join(" "));
        }
        for (var i = 0; i < wordAnswer.length; i++) {
            if (wordAnswer[i] === userInput) {
                answer[i] = userInput;
                displayString = answer.join(" ");
                answerd.innerHTML = "<h3>Word: " + displayString;
                remainingChoices--;
                rightOrSame = true;
            }
        }
        if (wordAnswer === answer.join("")) {
            wins++;
            winsD.innerHTML = "Wins: " + wins + "Losses: " + losses;
            switch (wordAnswer) {
                case "witch":
                    photoD.innerHTML = "<img src='assets/images/witch.jpg'>" + "<h2>Witch</h2>"
                    break;
                    case "vampire":
                        photoD.innerHTML = "<img src='assets/images/vampire.jpg'>" + "<h2>Vampire</h2>";
                        break;
                        case "frankenstein":
                    photoD.innerHTML = "<img src='assets/images/frankenstein.jpg'>" + "<h2>Frankenstein</h2>";
                    break;
                    case "ghost":
                    photoD.innerHTML = "<img src='assets/images/ghost.jpg'>" + "<h2>Ghost</h2>";
                    break;
                    case "werewolf":
                    photoD.innerHTML = "<img src='assets/images/werewolf.jpg'>" + "<h2>Werewolf</h2>";
                    break;
                    case "doctor":
                    photoD.innerHTML = "<img src='assets/images/doctor.png'>" + "<h2>Doctor</h2>";
                    break;
                    case "superhero":
                    photoD.innerHTML = "<img src='assets/images/superhero.png'>" + "<h2>Superhero</h2>";
                    break;
                    case "monster":
                    photoD.innerHTML = "<img src='assets/images/monster.png'>" + "<h2>Monster</h2>";
                    break;
                    case "animal":
                    photoD.innerHTML = "<img src='assets/images/animal.png'>" + "<h2>Animal</h2>";
                    break;
                    case "villian":
                    photoD.innerHTML = "<img src='assets/images/villian.png'>" + "<h2>Villian</h2>";
                    break;
            }
            remainingGuesses = 6;
            wordplay();
        }
        if (rightOrSame) {
            remainingd.innerHTML = "<h3>Number of Guesses Remaining: " + remainingChoices;
        } else {
            remainingChoices--;
            remainingd.innerHTML = "<h3>Number of Guesses Remaining: " + remainingChoices;
        }
        if (remainingChoices <= 0) {
            losses++;
            wordplay();
        }
    }
    else{
        
    }        
};

