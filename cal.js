var operand1;
var operand2;
var oprator = null;

//backspace
function backspace(calc) {
	size = calc.display.value.length;
	calc.display.value = calc.display.value.substring(0, size - 1);
}


function addSymbol(currentSymbol) {
	if (isNaN(currentSymbol)) {

		
		if(currentSymbol == '=')
		{
			calculate();
			oprator = null;
		}
		else if (oprator == null) {
			oprator = currentSymbol;
			operand1 = parseFloat(document.getElementById("display").value);
			document.getElementById("display").value = '0';
			console.log(oprator+' '+currentSymbol+' '+operand1);
		}
		else {
			calculate();
			document.getElementById("display").value = '0';
			oprator = currentSymbol;
			console.log(oprator+' '+currentSymbol+' '+operand1);
		}

	}
	else {
		console.log(oprator+' '+currentSymbol+' '+operand1);	
		var num = document.getElementById("display").value;
		if (num == '0' || num == '') {
			document.getElementById("display").value = currentSymbol;
		}
		else {
			document.getElementById("display").value += currentSymbol;
		}

	}

}
//clear screen
function clearScreen() {
	document.getElementById("display").value = '0';
	operand1 ='';
	oprator =null;
}
function calculate() {
	operand2 = parseFloat(document.getElementById("display").value);
	findResult(operand1,operand2,oprator);
	document.getElementById("display").value = operand1;
}

//finding result
function findResult(op1,op2,opr)
{
	console.log(opr+' '+op1+' '+op2);
	switch (opr) {
		case '+':
			operand1 = op1 + op2;
			break;
		case '-':
			operand1  = op1 - op2;
			break;
		case '*':
			operand1  = op1 * op2;
			break;
		case '/':
			operand1  = op1 / op2;
			break;
		default:
	}
	operand2 =0;
}
//animation
window.onload = function () {
	document.getElementById("display").value = '0';
	document.getElementById('firework').style.display = "none";
	document.getElementById('dialog').style.display = "none";
	document.getElementById('santa').style.display = "none";
	document.getElementById('hurrah').style.display = "none";
};

function showAnimatons() {
	var f = document.getElementById("firework");
	var d = document.getElementById("dialog");
	var s = document.getElementById("santa");
	var h = document.getElementById("hurrah");

	f.style.display = "block";
	d.style.display = "block";
	s.style.display = "block";
	h.style.display = "block";
}

function hideAnimation() {
	var f = document.getElementById("firework");
	var d = document.getElementById("dialog");
	var s = document.getElementById("santa");
	var h = document.getElementById("hurrah");

	f.style.display = "none";
	d.style.display = "none";
	s.style.display = "none";
	h.style.display = "none";
}