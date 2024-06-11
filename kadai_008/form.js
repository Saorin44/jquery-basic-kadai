$(function () {
  // "btn"がクリックされたら
  $('.btn').on('click', function () {
  // "text-box"内の文字を変更
    $('.text-box').val('クリックしました！');
  });
});