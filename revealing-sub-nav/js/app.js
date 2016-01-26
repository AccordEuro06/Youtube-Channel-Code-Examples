// App jquery
$(function() {
  $('nav ul li a').on('click', function(e) {
    e.stopPropagation();

    var $subNavToShow = $(this).attr('rel');
    var $subNavContainer = $('.sub-nav-container');

    console.log($subNavToShow);

    $subNavContainer.find('.under-nav-open').removeClass('under-nav-open');
    $('#'+$subNavToShow).toggleClass('under-nav-open');
  });

  $(document).on('click', function(e) {
    e.stopPropagation();
    $('.under-nav').removeClass('under-nav-open');
  })
});
