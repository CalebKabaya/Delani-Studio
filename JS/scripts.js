$(document).ready(function() {
    $("#img1").click(function () {
        $("#p1").toggle();
        $("#img1").toggle();

    })
    $("#p1").click(function () {
        $("#p1").toggle();
        $("#img1").toggle();
      });
    $("#img2").click(function () {
        $("#p2").toggle();
        $("#img2").toggle();
    })
    $("#p2").click(function () {
        $("#p2").toggle();
        $("#img2").toggle();
      });
    $("#img3").click(function () {
        $("#p3").toggle();
        $("#img3").toggle();
    })
    $("#p3").click(function () {
        $("#p3").toggle();
        $("#img3").toggle();
      });

      $("#card1").hover(
        function () {
          $("#card1").addClass("overlay");
          $(".hoover").show();
        },
        function () {
          $(".hoover").hide();
        }
      );

});
$(document).ready(function(){
    $("#card1").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover").show();
        },
        function () {
          $(".hoover").hide();
        }
      );
});