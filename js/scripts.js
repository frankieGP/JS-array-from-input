$(document).ready(function(event) {
  $("form").submit(function(event) {
    var favorite1Input = $("input#favorite1").val();
    var favorite2Input = $("input#favorite2").val();
    var favorite3Input = $("input#favorite3").val();
    var favorite4Input = $("input#favorite4").val();
    var favorite5Input = $("input#favorite5").val();
    var favorite6Input = $("input#favorite6").val();

    var inputs = [favorite1Input, favorite2Input, favorite3Input, favorite4Input, favorite5Input, favorite6Input]
    var inputs2 = []
    inputs2.push(inputs[1]);
    inputs2.push(inputs[0]);
    inputs2.push(inputs[2]);

    $("#favoriteResults").text(inputs2);

    event.preventDefault();

  });
    });






/*  inputs.push($("input#favorite1").val());
  inputs.push($("input#favorite2").val());
  inputs.push($("input#favorite3").val());
  inputs.push($("input#favorite4").val());
  inputs.push($("input#favorite5").val());
  inputs.push($("input#favorite6").val()); */
