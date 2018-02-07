'use srtict';
;function rowPrimes() {
var num1 = +prompt('Введите первое число');
var num2 = +prompt('Введите второе  число');
if (num1 > num2) {
	function rowPrimes_1() {
	for(var i = num2; i<=num1; i++) {
		var count = 0;
		for(var j = 1; j<i; j++) {
			if(i%j) continue;
			count += 1;
		}
		if (count == 1) console.log(i);
	}	
}	
rowPrimes_1();	
	alert('Первое число меньше второго');
} else {
	for (var i=num1;  i<=num2; i++) {
	  var count = 0;
	  for (var j=1; j<i; j++) {
	    if (i%j) continue;
	    count += 1;
	  }
	   if (count == 1) console.log(i);
}
}
alert('Результат числового ряда выведен в консоль');
}
rowPrimes();
