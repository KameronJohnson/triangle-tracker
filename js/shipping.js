$(document).ready(function() {
    $("form#new-triangle").submit(function(event) {
      event.preventDefault();

    var inputtedSide1 = parseInt($("input#side1").val());
    var inputtedSide2 = parseInt($("input#side2").val());
    var inputtedSide3 = parseInt($("input#side3").val());

    var Triangle = {
        side1: inputtedSide1,
        side2: inputtedSide2,
        side3: inputtedSide3,
        type: function() {
            if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
              return "Not a triangle";
            } else if (this.side1 === this.side2 && this.side2 === this.side3) {
              return "Equilateral";
            } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
              return "Isosceles";
            } else {
              return "Scalene";
            }
          }
    };

    if (Triangle.type() === "Equilateral") {
      $("ul#equilateral").append("<li>" + Triangle.side1 +
      ', ' + Triangle.side2 + ', ' + Triangle.side3 + "</li>" );
    } else if (Triangle.type() === "Isosceles") {
      $("ul#isosceles").append("<li>" + Triangle.side1 +
      ', ' + Triangle.side2 + ', ' + Triangle.side3 + "</li>" );
    } else if (Triangle.type() === "Scalene") {
      $("ul#scalene").append("<li>" + Triangle.side1 +
      ', ' + Triangle.side2 + ', ' + Triangle.side3 + "</li>" );
    } else {
      alert("That is not a triangle. Please try again.");
    }

    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");

  });
});
