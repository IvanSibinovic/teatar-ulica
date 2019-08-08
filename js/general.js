$('li.tags').on('click', function (e) {
  window.location.href= $(this).children('a').attr("href");
  return false;
}
$(document).ready(function(){
    $(".menu, .overlaid, .tags").click(function(){
      $('ul').toggleClass('active1');
      $('nav').toggleClass('active2');
  //  $('.overlaid').toggleClass('overlay-appear');
    })
})
// Logo and Navbar change on scroll:  
$(window).scroll(function () {
  if ($(document).scrollTop() > ($('nav').height())) {
    $('nav').addClass('scrolled-nav');
  } else {
    $('nav').removeClass('scrolled-nav');
  }
});