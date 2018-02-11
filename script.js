let expression = ''
$(".usrInput").on("click", operate)

function operate() {
	switch (this.innerHTML) {
		case '=': calculate();
		break;
		case 'Clear': expression = '';
		break;
		case '+':
		case '-':
		case '*':
		case '/': expression = expression + ' ' + this.innerHTML;
		break;
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9': if (isNaN(expression.charAt(expression.length - 1))) {
					expression = expression + ' ' + this.innerHTML;
				}
				else {
					expression += this.innerHTML;
				}
		break;
	}
	
	if (expression === '') {updateDisplay('Enter Input');}
	else {updateDisplay(expression);}
}

function calculate() {
	expression = eval(expression);
}

function updateDisplay(val) {
	document.getElementById("display").innerHTML = val;
}