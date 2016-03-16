var clock = {
  $break_minus: $(".break_length .minus"),
  $break_add: $(".break_length .add"),
  $session_minus: $(".session_length .minus"),
  $session_add: $(".session_length .add"),
  timer_on: true,
  time: 800000,
  session_length: 10000,
  break_length: 10000,

  secondsToMinutes: function(sec) {
    var mins = 0,
        secs = 0;
    while (sec - 60 >= 0) {
      mins += 1;
      sec -= 60;
    }
    secs += sec;
    var secs_fixer = "";
    if (secs < 10) { secs_fixer = "0"; }
    return (mins + ":" + secs_fixer + secs);
  },

  timer: function() {
    if (this.timer_on) {

      this.time -= 1000;
      $("#time_left").html(this.secondsToMinutes(this.time/1000));
      if (this.time <= 0) {
        this.timer_on = false;
        alert("times up")
      }
    } 
  }
}

setInterval(clock.timer.bind(clock), 1000)

$("#timer").on("click", function() {
  console.log("turn off/on")
  clock.timer_on = !clock.timer_on;
});

$(".break_length .minus").on("click", function() {
  if (clock.timer_on && clock.break_length >= 1000){
      clock.break_length -= 1000;
    $(".break_length .time").html(clock.secondsToMinutes(clock.break_length / 1000 ));
  }
});

$(".break_length .plus").on("click", function() {
  if (clock.timer_on){
      clock.break_length += 1000;
    $(".break_length .time").html(clock.secondsToMinutes(clock.break_length / 1000 ));
  }
});


$(".session_length .minus").on("click", function() {
  if (clock.timer_on && clock.session_length >= 1000){
      clock.session_length -= 1000;
    $(".session_length .time").html(clock.secondsToMinutes(clock.session_length / 1000 ));
  }
});

$(".session_length .plus").on("click", function() {
  if (clock.timer_on){
      clock.session_length += 1000;
    $(".session_length .time").html(clock.secondsToMinutes(clock.session_length / 1000 ));
  }
});





