var vals = [0,1,1,2];
var d1; 
var d2; 

function roll_dice() {
var random_number= Math.floor(Math.random() * vals.length);
	return vals[random_number];
}

function print(){
	d1 = roll_dice();
	d2 = roll_dice();
	document.getElementById('placeholder1').innerHTML = d1;
	document.getElementById('placeholder2').innerHTML = d2;
}








