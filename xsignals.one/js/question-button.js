$(document).ready(() => { 
  const questionMark = $("#question_mark");
  var buttonField = $("#question-mark-section");
  const textField = $("#question-mark-text-field");
  var exclamationText = $("#exclamation-mark-text");
  var questionText = $("#question-mark-text");
  buttonField.click(() => {
    if (questionMark.text() === "?") {
      questionMark.text("!");
      questionMark.css({
        "background": "#fff",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
      });
      buttonField.css("border-color", "#fff");
      textField.css({
        "border-color": "#fb9416",
      });
      questionText.hide();
      exclamationText.fadeIn();
    } else {
      questionMark.text("?");
      questionMark.css({
        "background": "linear-gradient(180deg,#ffb443 -25.96%,#ffa722 -25.95%,#f77804 123.08%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
      });
      buttonField.css("border-color", "#fb9416");
      textField.css({
        "border-color": "#fff",
      });
      exclamationText.hide();
      questionText.fadeIn();
    }
  });
});