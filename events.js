$(function() {
  $('#submit-name').click(function() {
    window.greetUser($('#name').val());
  });

  $('.gallery-thumb').click(function() {
    window.switchImage(this.src);
  });

  $('#change-color').click(function() {
    window.changeBackgroundColor();
  });
});
