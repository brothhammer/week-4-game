$(document).ready(function(){
  //global variable declaration
  var button1;
  var button2;
  var button3;
  var button4;
  var targetNumber;
  var currentScore = 0;
  var win = 0;
  var loss = 0;
  var buttonValue = [];
  set();

  $(".currentScore").text(currentScore);

  //called to generate the target number and the value for each button
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  //called after each button click to check for a win or loss
  function winLoss() {
    if(currentScore === targetNumber){
    console.log("You Won")
    win++;
      $(".win").text("Wins "+win);
      reset();
    }
    else if(currentScore >= targetNumber){
      console.log("You Lost")
      loss++;
      $(".loss").text("Losses "+loss);
      reset();
    }
  }

  //called after a win or loss to reset the game except for the win loss counter
  function reset(){
    targetNumber = undefined;
    $(".targetNumber").empty();
    currentScore = 0;
    $(".currentScore").text(currentScore);
    button1 = undefined;
    button2 = undefined;
    button3 = undefined;
    button4 = undefined;
    buttonValue = [];
    set();
  }

  //used to populate an array of four values when called in a for loop below
  function buttonValueArray() {
    var randomNumber = getRandomNumber(1,12);
    if (buttonValue.indexOf(randomNumber) <0) {
        buttonValue.push(randomNumber);
    }
  }

  //this function is called at the begining and again at te end of the reset
  function set(){
    //call function to generate random target number
    targetNumber = getRandomNumber(19,120);
      $(".target").html(targetNumber);
      console.log(targetNumber);

    //call function to populate array of random numbers
    for(i=1; buttonValue.length<=4; i++){
      buttonValueArray();
    }

    //assign index of buttonValue array to html attribute value
    for(i=1; i<=4; i++){
      buttoni = $("#button"+i).attr("val", buttonValue[i]);
      console.log($("#button"+i).attr("val"));
    }
  }

  //click handler moved outside the set function to avoid the use of .unbind
  $(document).on("click", "button", function() {
    currentScore = currentScore + parseInt($(this).attr("val"))
    $(".currentScore").text(currentScore);
    winLoss();
  })
   
});

