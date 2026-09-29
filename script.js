jQuery(function ($) {
  $(document).ready(function () {
    let year = new Date().getFullYear();

    $(".year").text(year);

    $.getJSON("work.json", function (data) {
      let counter = 1;
      $.each(data, function (index, work) {
        let title = work.name;
        let descriptions = work.description;
        let stack = work.stack;
        let type = work.work_type.toUpperCase();
        let featured = work.featured;
        if (counter == 1 && featured) {
          $("#main-featured-work-panel .title").text(title);
          $("#main-featured-work-panel .type").text(type);
          descriptions.forEach((description) => {
            $("#main-featured-work-panel .description-container").append(
              description,
            );
            console.log(description);
          });
          if (stack.length) {
            stack.forEach((s, index) => {
              $("#main-featured-work-panel .stack-container").append(s);
              if (index != stack.length - 1) {
                $("#main-featured-work-panel .stack-container").append(" | ");
              }
            });
          }
          counter++;
        } else if (featured) {
          let element = "";
        } else {
          let img = work.logo != "" ? work.logo : "placeholder.webp";
          let element = "<div class='col'><div class='image-panel'>";
          element += "<img src='/img/" + img + "'/></div>";
          element += "<p class='text-center'>" + title + "</p>";
          element += "</div>";
          $("#non-featured-container .content-container").append(element);
        }
      });
    });
  });

  $(".show-non-featured").on("click", function () {
    $("#non-featured-container").slideToggle();
    let current_button_text = $(this).text();
    $($("#show-non-featured")).text(
      $("#show-non-featured").text().trim() == "Show More Work"
        ? "Collapse Non-featured Work"
        : "Show More Work",
    );
    if ($("#show-non-featured").text() == "Collapse Non-featured Work") {
      $("#show-non-featured-additional").show();
    } else {
      $("#show-non-featured-additional").hide();
    }
  });
});
