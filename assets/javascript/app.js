// window.onload = function() {
//     $("#start").on("click", q);
//   };

$(document).ready(function() {


  var correct = 0;
  var incorrect = 0;
  var unattempted = 6;

  var questionTime;

  var clockRunning = false;

  // var questionText = document.getElementById('question');
  // var resultsText = document.getElementById('results');
  // var endGameText = document.getElementById('endGame');
  // var timeText = document.getElementById("time");

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
  $("#start, #reStart").on('click', function(){
    
    //hide start button
    $("#start").hide();

    for (i = 0; i < questions.length; i++) { 
      function questions() {
        
        //start timer countdown
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        questionTime = 25;
        //$("#time") = questionTime;
        // timeText.textContent = questionTime;
            function decrement() {
              //  Decrease number by one.
              questionTime--;
              //  Show the number in the #time tag.
              $("#time").text("Time remaining to guess: " + questionTime);
              //  Once number hits zero...
              if (questionTime === 0) {
              //   //  ...run the stop function.
              clockRunning = false;
               }
            }
                    //display round i+1 of question and answers
                    $("#question") = questions[i]
                    $("#answer1") = options[i][0]
                    $("#answer2") = options[i][1]
                    $("#answer3") = options[i][2]
                    $("#answer4") = options[i][3]
                  //As long as the clock is ticking any answer clicked will call this function
                  if (clockRunning) {
                    //add hover function to highlight answers mouse hovers over

                    $("#answer1, #answer2, #answer3, #answer4").on('click', function(){
                        unattempted -= 1;
                        //Respond if Answer Correct
                        if ($(this).val === answers[i]) {
                            $(this).addClass("correct");
                            $("#results").html("<p>You correctly selected: " + answers[i] + "</p>");
                            correct += 1;
                            interimTimer();   
                        }
                        //Respond if answer is missed
                        else {
                          $(this).addClass("incorrect");
                          $("#results").html("<p>Wrong! The correct answer is: " + answers[i] + "</p>");
                          incorrect += 1;
                          interimTimer();
                        }
                    });
                  }
                  //If timer is not running, run code for unanswered question
                  else {
                    $("#results").html("<p>Time's up! The correct answer is: " + answers[i] + "</p>");
                    clearInterval(intervalId);
                    interimTimer();
                  }
      
          function InterimTimer (

          );
          }
        questions();

        }
        
        
        function showFinalResults(){


        };

  });
    
});
      // });


      

    // DONE: Use setInterval to start the count here and set the clock to running.
    
    
    // if (!clockRunning) {
    //   intervalId = setInterval(count, 1000);
    //   clockRunning = true;
    // }
  
  // function question2(){}

  // function question3(){}

  // function question4(){}


  

  // $("#start").on("click", question1);



 

