jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
};

$(document).ready(function() {  
  
  $("#show_grid").toggle(function() {
    $(this).html("Hide grids");
    $(".grid_overlay").slideFadeToggle('slow');
  }, function() {
    $(this).html("Show grids");
    $(".grid_overlay").slideFadeToggle('slow');
  });
  
});
