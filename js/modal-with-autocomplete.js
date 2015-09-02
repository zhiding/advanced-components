$(function () {
  var available = [
    "Aenean leo ligula",
    "Aliquam loremm ante",
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Etiam rhoncus",
    "Maecenas tempus",
    "Morbi leo risus",
    "Nam pretium turpis et arcu",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
  ];
  $("#auto_complete").autocomplete({ 
    source: function (request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      response($.grep(available, function(item) {
        return matcher.test(item);
      }));
    },
  });

  $(".glyphicon-arrow-right").on("click", function () {
    lb = $("input#auto_complete").val();
    if (lb.trim() === "") {
      return 0;
    }
    $("#add_into_list>ul.list-group").prepend('<li class="list-group-item">'+lb+'<span role="button" class="glyphicon glyphicon-minus" style="color: red; position: relative; float: right;"></span></li>');
    $("input#auto_complete").val("");
  });

  $("ul.list-group").on("click", 'li>.glyphicon-minus', function () {
    $this = $(this);
    $this.parent().remove();
  });
});
