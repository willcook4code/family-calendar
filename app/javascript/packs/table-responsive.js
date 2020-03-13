if ($('.table-responsive').length) {
  function determineSidebarVisibility() {
    var tableWidth = $('.table-responsive').width();
    var rowWidth = $('.table-responsive tr').width();

    if (Math.floor(tableWidth) == Math.floor(rowWidth)) {
      $('.sidebar').css({"width" : "0", "cursor" : "pointer"});
    } else if ($('.table-responsive').scrollLeft() == 0) {
      $('.sidebar.right').css({"width" : "1.5em", "cursor" : "e-resize"});
    } else {
      $('.sidebar.left').css({"width" : "1.5em", "cursor" : "e-resize"});
    }
  };

  determineSidebarVisibility();

  window.addEventListener('resize', determineSidebarVisibility);
}

// Hide/show of sidebar on scrolling tables. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('.table-responsive').scroll(function(e) {
  var target = e.target;
  var atStart = target.scrollLeft == 0;
  var atEnd = (target.scrollWidth - target.scrollLeft) == (target.offsetWidth - 4);

  if (atStart) {
    
    $('.sidebar.left').css({"width" : "0", "cursor" : "pointer"});
  } else if (atEnd) {
    
    $('.sidebar.right').css({"width" : "0", "cursor" : "pointer"});
  }

  if (!atStart) {
    $('.sidebar.left').css({"width" : "1.5em", "cursor" : "w-resize"});
  }
  if (!atEnd) {
    $('.sidebar.right').css({"width" : "1.5em", "cursor" : "e-resize"});
  }
});

//Clickable sidebar for scrolling tables. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('.sidebar').click(function(e) {
  var target = e.target;
  var isLeft = $(target).hasClass("left");
  var $parentTable = $(target).closest(".table-wrapper").find(".table-responsive");
  var scrollPos = $parentTable.scrollLeft();

  $parentTable.animate({
    scrollLeft: ((isLeft) ? scrollPos - 200 : scrollPos + 200)
  }, 225, "swing");
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~