var clock = {
  $break_minus: $(".break_length .minus"),
  $break_add: $(".break_length .add"),
  $session_minus: $(".session_length .minus"),
  $session_add: $(".session_length .add"),
  timer_on: true,
  time: 800000,

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

$("#timer").on("click", function() {
  console.log("turn off/on")
  clock.timer_on = !clock.timer_on;
});



setInterval(clock.timer.bind(clock), 1000)
