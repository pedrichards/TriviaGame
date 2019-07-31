$(document).ready(function() {

  var correct = 0;
  var incorrect = 0;
  var unattempted = 6;

  var questionTime;

  var questionNumber;

  var clockRunning = false;


  var questions = [
    'What is the title of Rem Koolhaas\' 1978 treatise, a \'retroactive manifesto\' on \'the culture of congestion\'?',
    'Zaha Hadid received her architectural education where?',
    'Peter Zumthor, famous for the Therme Vals resort in Switzerland, is responsible for a museum in which U.S. metropolis?',
    'The __________ pavilion, is a temporary structure commissioned each year outside the __________ gallery in London, U.K.?',
    "Federal Center in Chicago, IL was designed by which famous 20th Century Modernist Architect",
    'This architect has failed to be awarded the Pritzker prize in architecture as of 2019?'
  ]
  var options = [
    ['\"Towards a New Architecture\"', '\"Delirious New York\"', '\"Mask of Medusa\"', '\"Collage City\"'],
    ['Harvard\'s G.S.D.', 'Politecnico di Milano', 'Oxford School of Architecture', 'Architectural Association'],
    ['New York City', 'Chicago', 'Los Angeles', 'Houston'],
    ['Albion', 'Avian', 'Cantilever', 'Serpentine'],
    ['Mies van der Rohe', 'Walter Gropius', 'Le Corbusier', 'Eero Saarinen'],
    ['Ieoh Ming Pei', 'Tadao Ando', 'Jeanne Gang', 'Thomas Mayne']
  ]
  var answers = [
    '\"Delirious New York\"',
    'Architectural Association',
    'Los Angeles',
    'Serpentine',
    'Mies van der Rohe',
    'Jeanne Gang'
  ]
  
  $("#reset").empty();

  $("#buttons, #answer1, #answer2, #answer3, #answer4, #reset").hover(function(){
    $(this).css("background-color", "yellow");
  }, function(){
      $(this).css("background-color", "transparent");
  });

  $("#start, #reset").on('click', function(){
    
    //hide start button
    $("#start").hide();
    $("#endGame").hide();
    $("#reset").hide();
    questionNumber = 0;

    // for (i = 0; i < questions.length; i++) { 
      function questionAsking() {
        // $("#results").show();
        //  Show the number in the #time tag.
        $("#time").text("Time remaining to guess: " + questionTime);    
        //start timer countdown
        // clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        questionTime = 25;
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
                $("#results").show();
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
                      if (clockRunning) {  
                        $("#results").show();
                        unattempted--;
                        //Respond if Answer Correct
                        if ($(this).html() === answers[questionNumber]) {
                            $(this).addClass("correct");
                            $("#results").text("You correctly selected: " + answers[questionNumber]);
                            correct++;
                            console.log("correct:" + correct);
                            interimTimer();
                            // questionNumber += 1;
                            clockRunning = false; 
                        }
                        //Respond if answer is missed
                        else {
                          $(this).addClass("incorrect");
                          $("#results").html("Wrong! The correct answer is: " + answers[questionNumber]);
                          incorrect++;
                          console.log("incorrect" + incorrect);
                          interimTimer();
                          // questionNumber += 1;
                          clockRunning = false;
                        }
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
                  //   //  ...run the stop function.
                    clock2Running = false;
                    $("#results").empty();
                    questionNumber++;
                  // If questionNumber greater than length of array-1 show final results, exit from function
                    if (questionNumber > 5) {
                      showFinalResults();
                      return false;
                    }
                    questionAsking();
                   }
                }
            
            };
          };
        questionAsking();

    
        
        
        function showFinalResults(){
          $("#time").empty();
          $("#question").empty();
          $("#answer1").empty();
          $("#answer2").empty();
          $("#answer3").empty();
          $("#answer4").empty();
          $("#endGame").show();
          $("#wins-text").html("Number Correct: " + correct);
          $("#losses-text").html("Number Incorrect: " + incorrect);              
          $("#unanswered-text").html("Number Unanswered: " + unattempted);             
          $("#reset").show();
          $("#reset").html("Restart");
        };

  });
    
});