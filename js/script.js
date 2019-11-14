$(document).ready(function() {
  $('#slides').superslides({
    play: 2000,
    animations: 'fade',
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer"],
    typeSpeed: 50,
    loop: true,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        750:{
            items:3
        },
        1000:{
          items:4
        }
    }
  })


  let skillsOffset = $(".skillsSection").offset().top;
  $(window).scroll(function() {
    if(window.pageYOffset > skillsOffset - $(window).height() + 500){
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        size: 150,
        trackColor: false,
        scaleColor: false,
        onStep: function(from, to, percent){
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });

    }

  });

  $("#navigation li a").click(function(e){
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);
  function stickyNavigation(){
    const body = $("body");
    if ($(window).scrollTop() >= navTop){
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else{
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

});
