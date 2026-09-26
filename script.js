jQuery(function ($) {
  $(document).ready(function () {
    let year = new Date().getFullYear();

    $(".year").text(year);

    console.log(year);
  });
});
