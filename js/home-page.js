$('a','li','ul','div.navbar-collapse').on("click", function (e) {
  console.log($(this).text().trim());
  e.preventDefault();
});

