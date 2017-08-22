$(document).ready(function(){

  var button1;
  var button2;
  var button3;
  var button4;
  var targetNumber;
  var currentScore = 0;
  var win = 0;
  var loss = 0;
  set();

  $(".currentScore").text(currentScore);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  function winLoss() {
    if(currentScore === targetNumber){
    console.log("Youwon")
    win++;
      $(".win").text("Wins "+win);
      reset();
    }
    else if(currentScore >= targetNumber){
      console.log("youlost")
      loss++;
      $(".loss").text("Losses "+loss);
      reset();
    }
  }

  function reset(){
    targetNumber = undefined;
    currentScore = 0;
    $(".currentScore").text(currentScore);
    button1 = undefined;
    button2 = undefined;
    button3 = undefined;
    button4 = undefined;
    set();
  }

  function set(){
    //call function to generate random target number
    targetNumber = getRandomNumber(19,120);
      $(".target").html(targetNumber);
      console.log(targetNumber);


    //loop to populate the value field of the buttons
    for(i=1; i<=4; i++){
    buttoni = $("#button"+i).attr("val", getRandomNumber(1,12));
    console.log($("#button"+i).attr("val"));
    }

    $("#button1").unbind("click");
    $("#button1").click(function(){
      currentScore = currentScore + parseInt($("#button1").attr("val"))
      $(".currentScore").text(currentScore);
      console.log(currentScore);

      winLoss();
    }) 

    $("#button2").unbind("click");
    $("#button2").click(function(){
      currentScore = currentScore + parseInt($("#button2").attr("val"))
      $(".currentScore").text(currentScore);
      // console.log(currentScore);

      winLoss();
    }) 

    $("#button3").unbind("click");
    $("#button3").click(function(){
      currentScore = currentScore + parseInt($("#button3").attr("val"))
      $(".currentScore").text(currentScore);
      // console.log(currentScore);

      winLoss();
    }) 

    $("#button4").unbind("click");
    $("#button4").click(function(){
      currentScore = currentScore + parseInt($("#button4").attr("val"))
      $(".currentScore").text(currentScore);
      // console.log(currentScore);

      winLoss();
    })
  }
});

