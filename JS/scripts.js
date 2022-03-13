
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
});

$(document).ready(function(){
    $("#card1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });

    $("#card2").mouseover(function(){
        $("#overlay2").show();
      }).mouseout(function(){
        $("#overlay2").hide();
      });
      $("#card3").mouseover(function(){
        $("#overlay3").show();
      }).mouseout(function(){
        $("#overlay3").hide();
      });
      $("#card4").mouseover(function(){
        $("#overlay4").show();
      }).mouseout(function(){
        $("#overlay4").hide();
      });
      $("#card5").mouseover(function(){
        $("#overlay5").show();
      }).mouseout(function(){
        $("#overlay5").hide();
      });
      $("#card6").mouseover(function(){
        $("#overlay6").show();
      }).mouseout(function(){
        $("#overlay6").hide();
      });
      $("#card7").mouseover(function(){
        $("#overlay7").show();
      }).mouseout(function(){
        $("#overlay7").hide();
      });
      $("#card8").mouseover(function(){
        $("#overlay8").show();
      }).mouseout(function(){
        $("#overlay8").hide();
      });
  });

let myName = document.getElementById("fname")
function userMessage(){
    alert(" "+"we have received your message. Thank you for reaching out to us.")
}
