$(document).ready(function(){
  if($('body').width() < 619) {
    $('.bxslider').bxSlider({
      minSlides:1,
      maxSlides: 1,
      slideWidth: 550,
      slideMargin: 5
    });
  } else {
    $('.bxslider').bxSlider({
      minSlides: 2,
      maxSlides: 2,
      slideWidth: 450,
      slideMargin: 0
    });
  }

  let displays = document.getElementsByClassName('display-block');
  for (var i = 0; i < displays.length; i++) {
    if (i >= 6) {
      break;
    }
    displays[i].className = 'display-block display-' + (i + 1);
  };
});

$(document).ready(function(){
  function classFunction(){
    if($('body').width() < 619) {
      jQuery('.hand-row').removeClass('hand-row').addClass('hand-row2');
      $('#why2').attr('id', 'why');
      $('#why').bxSlider({
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 250,
        slideMargin: 50
      });
    } else {
      $('.hand-row2').removeClass('hand-row2').addClass('hand-row');
      $('#why').attr('id', 'why2');
    }
  }

  classFunction();
  $(window).resize(classFunction);
});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
    var modal = $('.modal');
    $('.show-modal').click(function() {
        modal.fadeIn();
    });

    $('.close-modal').click(function() {
        modal.fadeOut();
    });
});