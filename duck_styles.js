// create duck div at top: 100px, left: -50px
// create interval to move duck from left: -50px to offscreen
//
//
// setInterval( duckFly, 1000 );


// var duckFly = function(){
//   distance = $(".duck").css("left")
//   $(".duck").animate({left: "+=100px"});)
// }
//

function killDuck(target){
  target.off()
  console.log("clicked duck!");
  var current_score = parseInt($(".score").text())
  $(".score").text(current_score + 10)
  target.stop();
  target.removeClass("duck")
  target.addClass("shot");
  setTimeout(function(){
    target.removeClass("shot")
    target.removeClass("left")
    target.addClass("falling")
    target.animate({top: $(window).height() + 50}, 3000, "swing")
  },750)
}

function generateDuck(){
  console.log("new duck!");
  var newDuck = document.createElement("DIV");
  newDuck.className = 'duck';
  newDuck = $(newDuck);
  newDuck.attr("draggable", "false");

  newDuck.on('dragstart', function(event) { event.preventDefault(); });

  newDuck.mousedown(function(){
    killDuck(newDuck);
  });

  newDuck.css("top", Math.floor(Math.random() * 500));
  $("body").append(newDuck);
  if (Math.floor(Math.random() + 0.5)) {
  newDuck.animate({left: $(window).last().width()+50}, Math.floor(Math.random() * 5500) + 2500  , "linear");
    } else {
  newDuck.addClass("left")
  newDuck.css("left", $(window).width()+50)
  newDuck.animate({left: -50}, Math.floor(Math.random() * 5500) + 2500  , "linear");
  }
  setTimeout(function(){
    newDuck.remove();
  }, 8000);
}

$("body").mousedown(function(){
  $('#chatAudio')[0].play();
  $("body").hide();
  setTimeout(function(){
    $("body").show();
    }, 50);
  }
)

$("body").on('dragstart', function(event) { event.preventDefault(); });
$(".background").on('dragstart', function(event) { event.preventDefault(); });

generateDuck();
$('<audio id="chatAudio"><source src="http://soundfxcenter.com/video-games/doom/af08a1_Doom_Shotgun_Firing_Sound_Effect.mp3" type="audio/mpeg"></audio>').appendTo('body');
setInterval(generateDuck, Math.floor(Math.random() * 3500) + 1500);
