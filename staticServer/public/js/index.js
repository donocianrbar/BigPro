window.onload = function  () {
	var oImg = document.querySelector("#image");	
	var turn = true;
	document.onclick = function  () {
		oImg.src = turn ? "../images/lv.png" : "../images/lvdeshui.png";
		turn = !turn;
	};
};