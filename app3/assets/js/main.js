// محاسبه بیمه و مالیات از حقوق

var hoghoogh = prompt("میزان حقوق شما؟ ");

var bime = hoghoogh * 0.07;
var maliat = hoghoogh * 0.1;
var daryafti = hoghoogh - bime - maliat;

console.log(`shoma ba hoghoogh ${hoghoogh} rial bayad ${bime} rial bime va ${maliat} rial maliat pardakht konid. daryafti shoma ${daryafti} rial mishavad`);


