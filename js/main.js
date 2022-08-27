// $(function() {
//   $("#sp_nav").click(function() {
//     $(".main_nav").slideToggle(200);
//   });
// });

  $('#sp_nav').on('click', function () {
    $('#sp_nav, .nav_wrap').toggleClass('show');
  });

  $('#sp_nav').on('click', function () {
    if ($('#sp_nav p').text() === '閉じる') {
      $('#sp_nav p').text('メニュー');
    } else {
      $('#sp_nav p').text('閉じる');
    }
  });
  // $('#sp_nav').on('click', function () {
  //   $('#sp_nav, .main_nav').toggleClass('show');
  // });