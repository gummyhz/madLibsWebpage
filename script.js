$("#submit").click(function(event) {
  var noun1 = $("#noun1").val();
  var noun2 = $("#noun2").val();
  var noun3 = $("#noun3").val();
  var noun4 = $("#noun4").val();
  var place = $("place").val();
  var adjective = $("adjective").val();
  $("#story").text(
    "Be kind to your " +
      noun1 +
      " for a duck may be somebody`s " +
      noun2 +
      ", Be kind to your " +
      noun3 +
      " in " +
      place +
      " where the weather is always " +
      adjective +
      ". You may think that this is the " +
      noun4 +
      ", well it is."
  );
  event.preventDefault();
});
