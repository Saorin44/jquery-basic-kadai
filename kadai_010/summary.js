$(function () {
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });

  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

   // "文字色変化"ボタンがクリックされたら
   $('#change-color').on('click', function(){
    // "こんにちは！"にclass属性'color'を追加
    $('#target').addClass('color');
  });
   // "文字内容変化"ボタンがクリックされたら
  $('#change-text').on('click', function(){
    // "こんにちは！"を"hello!"に変更
    $('#target').text('Hello!');
 });
});