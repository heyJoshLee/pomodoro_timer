
  var $break_minus = $(".break_length .minus"),
      $break_add = $(".break_length .add"),
      $session_minus = $(".session_length .minus"),
      $session_add = $(".session_length .add");

  $break_minus.on("click", function() {
    alert("yay ")
  });

  var time = 10000;


  function secondsToMinutes(sec) {
    var mins = 0,
        secs = 0;
    while (sec - 60 >= 0) {
      mins += 1;
      sec -= 60;
    }
    secs += sec;
    var secs_fixer = "";
    if (secs < 10) {
      secs_fixer = "0";
    }
    return (mins + ":" + secs_fixer + secs);
  }


  function timer() {
    if (timer_on) {
      time -= 1000;
      $("#time_left").html(secondsToMinutes(time/1000));
      if (time <= 0) {
        timer_on = false;
        alert("times up")
      }
    } 
  }

  var timer_on = true;

setInterval(timer, 1000)


