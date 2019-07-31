$(document).ready(function() {

  var correct = 0;
  var incorrect = 0;
  var unattempted = 6;
  var intervalId;
  // var userGuess ="";
  var questionTime = 5;
  var interimTime = 5;

  var questionNumber = 0;

  var clockRunning = false;

  var questions = [
    'What species of shark do people encounter most often at Shark Rodeos in the Bahamas?',
    'Called the grey nurse shark in Australia, its common name in America is the _________.',
    'The _____________ is one of the only species of sharks known to eat jellyfish.',
    'Which two species of sharks have eyes that contain only rods and no cones?',
    "Featured in Ernest Hemingway's novel \"The Old Man and the Sea\" was the ___________.",
    'This species destroyed Peter Benchley\'s handy broomstick on a lanyard while he was SCUBA diving.'
  ]
  var options = [
    ['grey reef shark', 'Caribbean reef shark', 'dusky shark', 'bull shark'],
    ['Galapagos reef shark', 'whitetip reef shark', 'grey reef shark', 'sand tiger shark'],
    ['sandbar shark', 'white-tip reef shark', 'bronze whaler shark', 'scalloped hammerhead shark'],
    [' sand tiger shark& blacktip shark', 'mako shark & bronze whaler shark', 'great white shark & lemon shark', 'blacktip reef shark & sixgill shark'],
    ['porbeagle shark', 'thresher shark', 'mako shark', 'great white shark'],
    ['tiger shark', 'blue shark', 'oceanic whitetip shark', 'bull Shark']
  ]
  var answers = [
    'Caribbean reef shark',
    'sand tiger shark',
    'bronze whaler shark',
    'blacktip reef shark & sixgill shark',
    'mako shark',
    'oceanic whitetip shark'
  ]
  $("#reset").hide();
  
  $("#start, reset").on('click', function(){
    //hide start button
    
    $("#start").hide();
    $("#time").html("Time remaining to guess: " + questionTime);
    runTimer();
    questionAsking();
    
    

  });
  function runTimer(){
    
    if (!clockRunning) {
    intervalId = setInterval(decrement, 1000); 
    clockRunning = true;
    }
    function decrement() {
    // $("#time").html("Time remaining to guess: " + questionTime);
    questionTime --;
    //stop timer if reach 0
    if (questionTime === 0) {
      unattempted--;
      // clearInterval(intervalId);
      // ??
      // if ($("#results").length = 0 ) {
      //   $("#results").html("Time's up! The correct answer is: " + answers[questionNumber]);
      // }
      interimTimer();
    }	
  }
  }
  

  function questionAsking() {
    $("#question").text(questions[questionNumber]);
    $("#answer1").text(options[questionNumber][0]);
    $("#answer2").text(options[questionNumber][1]);
    $("#answer3").text(options[questionNumber][2]);
    $("#answer4").text(options[questionNumber][3]);
    thisAnswer = answers[questionNumber];
    questionNumber++;
  }

  $("#answer1, #answer2, #answer3, #answer4").on('click', function(){
    if ((clockRunning) && (questionTime > 0)) {
      unattempted -= 1;
      //Respond if Answer Correct
      if ($(this).html() === thisAnswer) {
          $(this).addClass("correct");
          $("#results").text("You correctly selected: " + thisAnswer);
          correct += 1;
          // questionNumber += 1;
          //??  
          clockRunning = false;
          interimTimer();
      }
      //Respond if answer is missed
      else {
        $(this).addClass("incorrect");
        $("#results").html("Wrong! The correct answer is: " + thisAnswer);
        incorrect += 1;
        // questionNumber += 1;
        //??
        clockRunning = false;
        interimTimer(); 
      }
    }
  });

    function interimTimer (){
      // clearInterval(intervalId);
      intervalId = setInterval(decrement2, 1000);
      clock2Running = true;
      interimTime = 5;
    }
  
    function decrement2() {
    //  Decrease number by one.
    interimTime--;
    //  Once number hits zero...
      if (interimTime === 0) {
        clearInterval(intervalId);
        //   //  ...run the stop function.
        clock2Running = false;
        questionAsking();
        runTimer();
        $("#results").hide();   
      }
  }
});