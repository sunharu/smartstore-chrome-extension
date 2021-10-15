(function() {
function makeRoot() {
	let div = document.createElement('div');
	div.id = "asdfgh";
	div.style.width = "100%";
	return div;
}
function makeDiv(url) {
	let div = document.createElement('div');
	div.style.width = "7%";
	div.style.float = "left";
	div.style.padding = "5px";
	let imgTag = document.createElement('img');
	imgTag.src = url;
	imgTag.style.width = "100%";
	imgTag.style.height = "100%";
	div.appendChild(imgTag);
	return div;
}


var timerId = null;
var timerSub = null;
var timer_cnt = 0;
function start(){
	timer_cnt = 0;
	timerId = setInterval(onon, 100);
	timerSub = setInterval(onon,1000);
}

function onon(){
	timer_cnt = timer_cnt+1;
	if(timer_cnt>5){
		console.log('end');
		clearInterval(timerId);
	}else{
		console.log('cnt:'+timer_cnt);
	}


	var current = '73,410,795';
	

	try {
		document.querySelector('#UpbitLayout > div:nth-child(4) > div > section.ty01 > div > div.rightB.sizeUp.sgdB > article > span.statementB > div.scrollB > div > div:nth-child(1) > table > tbody > tr:nth-child(13)').innerHTML='<td class=\"down\">출금</td><td class=\"rAlign\"><strong>20,000,000 <i>KRW</i></strong></td><td class=\"cAlign name\"></td><td class=\"cAlign progress\">출금완료</td><td class=\"rAlign date\">2021.05.05<br>21:49</td>';
	} catch (err) {console.log('5')}
}
window.onload = start();

})();


