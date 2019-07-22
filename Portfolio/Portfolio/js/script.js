$(document).ready(function() {
  $('#slides').superslides({
    play: 2000,
    animations: 'fade',
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer", "Student"],
    typeSpeed: 250,
    loop: true,
    showCursor: false,
  });

});
