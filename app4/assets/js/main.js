// برنامه محاسبه شتاب

var x = prompt("سرعت اولیه  شما؟ ");
var k = prompt("سرعت نهایی  شما؟ ");
var n = prompt("زمان شما؟ ");

var shetab = (k + x * 60) / n;

alert("result: " + shetab);
