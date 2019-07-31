$(document).ready(function() {

  var correct = 0;
  var incorrect = 0;
  var unattempted = 6;

  var questionTime;

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
  $("#start, reStart").on('click', function(){
    
    //hide start button
    $("#start").hide();

    // for (i = 0; i < questions.length; i++) { 
      function questionAsking() {
        // $("#results").show();
        //  Show the number in the #time tag.
        $("#time").text("Time remaining to guess: " + questionTime);    
        //start timer countdown
        // clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        questionTime = 5;
        //$("#time") = questionTime;
        //  Show the number in the #time tag.
              $("#time").text("Time remaining to guess: " + questionTime);
        // timeText.textContent = questionTime;
            function decrement() {
              
              //  Decrease number by one.
              questionTime--;
              //  Show the number in the #time tag.
              $("#time").text("Time remaining to guess: " + questionTime);
              //  Once number hits zero...
              if ((questionTime === 0) && (clockRunning)) {
                $("#time").text("Time remaining to guess: " + questionTime);
                clearInterval(intervalId);
                // if ($("#results").html() != "") {
                $("#results").html("Time's up! The correct answer is: " + answers[questionNumber]);
                // }
                // questionNumber ++;
                interimTimer();
              //   //  ...run the stop function.
              // clockRunning = false;
              
               }
               else if (questionTime === 0) {
                   clearInterval(intervalId);
               }
            }
        console.log(questionNumber)
                    //display round i+1 of question and answers
                    $("#question").text(questions[questionNumber]);
                    $("#answer1").text(options[questionNumber][0]);
                    $("#answer2").text(options[questionNumber][1]);
                    $("#answer3").text(options[questionNumber][2]);
                    $("#answer4").text(options[questionNumber][3]);
                  //As long as the clock is ticking any answer clicked will call this function
                  if (clockRunning = true) {
                    //add hover function to highlight answers mouse

                    $("#answer1, #answer2, #answer3, #answer4").on('click', function(){
                      $("#results").show();
                      console.log("okay");
                        unattempted -= 1;
                        //Respond if Answer Correct
                        if ($(this).html() === answers[questionNumber]) {
                            $(this).addClass("correct");
                            $("#results").text("You correctly selected: " + answers[questionNumber]);
                            correct += 1;
                            interimTimer();
                            // questionNumber += 1;
                            clockRunning = false; 
                        }
                        //Respond if answer is missed
                        else {
                          $(this).addClass("incorrect");
                          $("#results").html("Wrong! The correct answer is: " + answers[questionNumber]);
                          incorrect += 1;
                          interimTimer();
                          // questionNumber += 1;
                          clockRunning = false;
                        }
                    });
                  }
          function interimTimer (){
              clearInterval(intervalId);
            intervalId = setInterval(decrement2, 1000);
            clock2Running = true;
            interimTime = 5;
            //$("#time") = questionTime;
            // timeText.textContent = questionTime;
                function decrement2() {
                  //  Decrease number by one.
                  interimTime--;
                  //  Show the number in the #time tag
                  //  Once number hits zero...
                  if (interimTime === 0) {
                    clearInterval(intervalId);
                    // clearInterval(intervalId);
                    
                    console.log("interim" + interimTime)
                  //   //  ...run the stop function.
                  clock2Running = false;
                  $("#results").hide();
                  questionNumber++;
                  questionAsking();
                    if (questionNumber > 6) {
                      return false;
                      showFinalResults();
                    }
                  
                   }
                }
            
          };
          
          };
        questionAsking();

        // }
        
        
        function showFinalResults(){


        };

  });
    
});