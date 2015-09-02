$('.btn-circle.btn-tab-control').on("click", function (e) {
  e.preventDefault();
  move_to = $(this).data('tab-control');
  $from_tab = $('.tab-pane.active.in', '.tab-content');
  $to_tab = $from_tab[move_to]();
  if ($to_tab.hasClass('tab-pane')) {
    $from_tab.removeClass('in active');
    $to_tab.addClass('in active');
  }
});
