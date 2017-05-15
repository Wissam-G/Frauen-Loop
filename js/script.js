// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
});

/*swip for mobile*/
$(document).ready(function() {  

          //Enable swiping...
          $(".carousel-inner").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
              $(this).parent().carousel('next'); 
            },
            swipeRight: function() {
              $(this).parent().carousel('prev'); 
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:0
          });
        });

/*scroll down*/ 
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});

//scroll to top button
$(document).ready(function(){
 $(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
        
        $('#back-to-top').tooltip('show');

      });

$(document).ready(function () {

  $(".player").mb_YTPlayer();

});

//check out Strip.com
$('#stripe-button').click(function(){
  var token = function(res){
    var $id = $('<input type=hidden name=stripeToken />').val(res.id);
    var $email = $('<input type=hidden name=stripeEmail />').val(res.email);
    $('form').append($id).append($email).submit();
  };

  var amount = $("#stripeAmount").val();
  StripeCheckout.open({
    key:         'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    amount:      '1000',
    name:        'FrauenLoop gUG',
    image:       'https://s3.amazonaws.com/stripe-uploads/acct_19OnzhHR0Wgl5Lq7merchant-icon-1481288958924-Logo_Frauenloop_rot_web_small.jpg',
    description: 'Widget',
    currency:    'eur'
  });

  return false;
});

// SLick Js
$('#carousel').slick({
  arrows: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed:2500,
  speed: 500,
  variableWidth: true,

});

 $(document).ready(function(){
 $("#myModal").modal('show');
});

//analytics.google
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84707039-1', 'auto');
ga('send', 'pageview');
