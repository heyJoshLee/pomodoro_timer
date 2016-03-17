var clock = {
  $break_minus: $(".break_length .minus"),
  $break_add: $(".break_length .add"),
  $session_minus: $(".session_length .minus"),
  $session_add: $(".session_length .add"),
  timer_on: true,
  session_on: true,
  time: 1500000,
  session_length: 1500000,
  break_length: 300000,
  break_time: 300000,
  audio: new Audio('http://sfxcontent.s3.amazonaws.com/soundfx/MorseCode.mp3'),

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
      
      if(this.session_on){
        this.time -= 1000;
        $("#time_left").html(this.secondsToMinutes(this.time/1000));

        if (this.time <= 0) {
          this.session_on = false;
          this.break_time = this.break_length;
          $("#label").html("Break");
          clock.audio.play();
          alert("Time's up!")
        }
      }

      if (!this.session_on) {
        this.break_time -= 1000;
        $("#time_left").html(this.secondsToMinutes(this.break_time/1000));

        if (this.break_time <= 0) {
          this.session_on = true;
          this.time = this.session_length;
          $("#label").html("Session");
          clock.audio.play();
          alert("Break's up!")
        }
      }
      
      
    } 
  }
}

setInterval(clock.timer.bind(clock), 1000)

$("#pause_button").on("click", function() {
  clock.timer_on = !clock.timer_on;
  var $this = $(this);
  if (clock.timer_on) {
    $this.html("Pause");
  } else {
    $this.html("Start");
  }
});

$("#reset_button").on("click", function() {
  clock.time = clock.session_length;
  clock.break_time = clock.break_length;
  $("#label").html("Session");
  clock.session_on = true;
  $("#time_left").html(clock.secondsToMinutes(clock.time/1000));

});

$(".break_length .minus").on("click", function() {
  if (!clock.timer_on && clock.break_length >= 1000){
      clock.break_length -= 1000 * 60;
    $(".break_length .time").html(clock.secondsToMinutes(clock.break_length / 1000 ));
  }
});

$(".break_length .plus").on("click", function() {
  if (!clock.timer_on){
      clock.break_length += 1000 * 60;
    $(".break_length .time").html(clock.secondsToMinutes(clock.break_length / 1000 ));
  }
});


$(".session_length .minus").on("click", function() {
  if (!clock.timer_on && clock.session_length >= 1000){
      clock.session_length -= 1000 * 60;
    $(".session_length .time").html(clock.secondsToMinutes(clock.session_length / 1000 ));
  }
});

$(".session_length .plus").on("click", function() {
  if (!clock.timer_on){
      clock.session_length += 1000 * 60;
    $(".session_length .time").html(clock.secondsToMinutes(clock.session_length / 1000 ));
  }
});








