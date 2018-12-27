//alert("Hello I am NowCalc!");
function plus(){
	// объявление переменных
	var n1, n2, result;
	//присвоение переменных
	a=document.getElementById("n1").value;
	a=parseInt(a);//придаем значения цифры integer
	b= document.getElementById("n2").value;
	b=parseInt(b);//придаем значения цифры integer
	//расчет
	result=a+b;
	result=result.toFixed(3);//округление до 3 разряда
	//alert("Hello I am programmer!")
	//вывод результата
	document.getElementById("out").innerHTML=result;
	
}
function minus(){
	//Объявление переменных
	var n1,n2, result;
	//присвоение данных
	a=document.getElementById("n1").value;
	a=parseInt(a);
	b=document.getElementById("n2").value;
	b=parseInt(b)
	//расчет
	result=a-b;
	result=result.toFixed(3);//округление до 3 разряда
	//output result
	document.getElementById("out").innerHTML=result;
	//end
}

function multi(){
	//Объявление переменных
	var n1,n2,result;
	//присвоение данных
	a=document.getElementById("n1").value;
	a=parseInt(a);
	b=document.getElementById("n2").value;
	b=parseInt(b);
	//расчет
	result=a*b;
	result=result.toFixed(3);//округление до 3 разряда
	//output result
	document.getElementById("out").innerHTML=result;
	//end
}
function dif(){
	//Объявление переменных
	var n1, n2, result;
	//присвоение переменных
	a=document.getElementById("n1").value;
	b=document.getElementById("n2").value;
	a=parseInt(a);
	b=parseInt(b);
	//расчет
	result=a/b;
	result=result.toFixed(3);//округление до 3 разряда
	// output result
	document.getElementById("out").innerHTML=result;
	//end
	
}
//SQRT
function sqrt(){
	//Объявление переменных
	var n1, n2, result;
	//присвоение переменных
	a=document.getElementById("n1").value;
	b=document.getElementById("n2").value;
	a=parseInt(a);
	b=parseInt(b);
	//расчет
	if (a>b){
		result= Math.sqrt(a);   		
	} else if (b>a){
		result= Math.sqrt(b);
	} else {
		result= Math.sqrt(b);
	}
	
    
	result=result.toFixed(3);//округление до 3 разряда
	// output result
	document.getElementById("out").innerHTML=result;
	//end
	
}
