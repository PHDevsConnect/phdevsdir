// Get the header height
var headerHeight = $("header").outerHeight();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > headerHeight) {
    $("header").removeClass('moving');
    $("header").addClass('top');
  } else {
    $("header").removeClass('top');
    $("header").addClass('moving');
  }
});
