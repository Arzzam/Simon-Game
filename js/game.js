
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
  });
  

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenColour.length-1);
});


function checkAnswer(currentLevel) {
    if (userClickedPattern [currentLevel] === gamePattern [currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    },100);
}























/*var button = $("#" + nextSequence());

$(".btn").click(function () {
    $(this).effect("highlight", {}, 3000);
});

function playButtons(nextSequence) {
    if (nextSequence === "red") {
        var audioRed = new Audio("sounds/red.mp3");
        audioRed.play();
    }
    else if(nextSequence === "blue") {
        var audioBlue = new Audio("sounds/blue.mp3");
        audioBlue.play();   
    }
    else if(nextSequence === "yellow") {
        var audioYellow = new Audio("sounds/yellow.mp3");
        audioYellow.play();   
    }
    else if(nextSequence === "green") {
        var audioGreen = new Audio("sounds/green.mp3");
        audioGreen.play();   
    }
    else {
        var audioWrong = new Audio("sounds/wrong.mp3");
        audioWrong.play();    
    }
}
*/
