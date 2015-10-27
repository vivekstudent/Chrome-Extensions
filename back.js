document.addEventListener('DOMContentLoaded', function(){
	
	var firstNumber = document.getElementById("firstNumber");
	firstNumber.addEventListener('blur', function(){
		if(isNaN(firstNumber.value)){
			var err1 = document.getElementById("err1");
			err1.innerHTML="Please enter a number";
			firstNumber.focus();
		}
		else{
			var err1 = document.getElementById("err1");
			err1.innerHTML="";
		}
	});

	var secondNumber = document.getElementById("secondNumber");
	secondNumber.addEventListener('blur', function(){
		if(isNaN(secondNumber.value)){
			var err2 = document.getElementById("err2");
			err2.innerHTML="Please enter anumber";
			secondNumber.focus();
		}
		else{
			var err2 = document.getElementById("err2");
			err2.innerHTML="";
		}
	});

	var operator = document.getElementById("operator");
	operator.addEventListener('change', function(){
		/*alert(document.body.innerText);
		alert(document.body.outerHTML);*/
		var val1 = document.getElementById("firstNumber").value;
		var val2 = document.getElementById("secondNumber").value;
		var oper = document.getElementById("operator").value;
		var answer=0;
		if(oper=='+'){
			answer = +val1+ +val2;
		}
		else if(oper=='-'){
			answer = val1-val2;
		}
		else if(oper=='*'){
			answer = val1*val2;
		}
		else if(oper=='/'){
			answer = val1/val2;
		}
		else if(oper=='%'){
			answer = val1%val2;
		}
		var ansEle = document.getElementById("answer");
		ansEle.value=answer;
	});

	var helpButt = document.getElementById("helpImg");
	helpButt.addEventListener('click', function(){
		var helpDiv = document.getElementById("helpDiv");
		helpDiv.style.display="block";
	});

	var crossImg = document.getElementById("crossImg");
	crossImg.addEventListener('click', function (){
		var helpDiv = document.getElementById("helpDiv");
		helpDiv.style.display="none";
	});

	var answerBox = document.getElementById("answer");
	answerBox.addEventListener('dblclick', function(){
		var firstNum = document.getElementById("firstNumber");
		firstNum.value=answerBox.value;
	});

	var acButt = document.getElementById("acButt");
	acButt.addEventListener('click', function(){
		var firstNum = document.getElementById("firstNumber");
		firstNum.value="";

		var secondNum = document.getElementById("secondNumber");
		secondNumber.value="";

		var oper = document.getElementById("operator");
		oper.value="Operator";

		var answer = document.getElementById("answer");
		answer.value="";
	});
});

/*****File sis not well commented****/
