$('li.tags').on('click', function (e) {
  window.location.href= $(this).children('a').attr("href");
  return false;
});

$(".menu, .overlaid, .tags").click(function(){
	if ($(window).width() < 1050) {
		$('ul').toggleClass('active1');
		$('nav').toggleClass('active2');
		$('.overlaid').toggleClass('overlay-appear');
		}
	else {
		return null;
	}
});
// Logo and Navbar change on scroll:  
$(window).scroll(function () {
  if ($(document).scrollTop() > ($('nav').height())) {
    $('nav').addClass('scrolled-nav');
    } else {
    $('nav').removeClass('scrolled-nav');
    }
  });
function goBack() {
      window.history.back();
    }