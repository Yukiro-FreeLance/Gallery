// $(function() {
//   $(".box").on("mousedown", function(e) {
//     const gate = $(this).children("div");
//     $(this).children(".locker").hide();
//     for (var i = 0; i < gate.length; i++) {
//       if ($(gate[i]).hasClass("ovrl-left")) {
//         $(gate[i]).toggleClass("move-right");
//       }
//       if ($(gate[i]).hasClass("ovrl-right")) {
//         $(gate[i]).toggleClass("move-left");
//       }
//     }
//     // removes the click event after reveling the image
//     $(this).off();
//   });
// });
// $(function() {
//   $('.envelope').fadeIn();
//   $('.btn').on('click', function() {
//     $('.envelope').removeClass('open');
//     setTimeout(function() {
//       $('.envelope').addClass('open');
//     }, 500);
//     return false;
//   });
// });
$(function() {
  $(".box").on("mousedown", function(e) {
    const gate = $(this).children("div");
    $(this).children(".locker").hide();
    for (var i = 0; i < gate.length; i++) {
      if ($(gate[i]).hasClass("ovrl-left")) {
        $(gate[i]).toggleClass("move-right");
      }
      if ($(gate[i]).hasClass("ovrl-right")) {
        $(gate[i]).toggleClass("move-left");
      }
    }
    // removes the click event after reveling the image
    $(this).off();
  });
});
