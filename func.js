var result = document.querySelector('#payInfo > div.T04_L03.payInfoCard > table > tbody > tr:nth-child(1) > td:nth-child(9) > input:nth-child(3)').value; 
alert(result);
/*
var xmlhttp;
if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
}else{
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		alert("success");
		alert(xmlhttp.responseText);
	}else{
		console.log('1');
	}
}

xmlhttp.open("GET","https://yerp.cafe24.com/_sns/check.php",true);
xmlhttp.send();
console.log('end');
*/