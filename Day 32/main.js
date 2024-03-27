var number = 0;
var $number = $(".number");

$(".minus").bind("click", function () {
	updateNumber(-1);
});

$(".plus").bind("click", function () {
	updateNumber(1);
});

function updateNumber(value) {
  number += value;

  $number.find("span").remove();
  $number.append("<span>" + number + "</span>");
}
