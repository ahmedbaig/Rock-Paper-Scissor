//For human
var ones=0;
var tens=0;
var hundreds=0;

//For computer
var cones=0;
var ctens=0;
var chundreds=0;

function incri(){

if(ones === 0 && tens === 0 && hundreds === 0){
	document.getElementById('aones').className += " on";
	document.getElementById('bones').className += " on";
	document.getElementById('cones').className += " on";
	document.getElementById('dones').className += " on";
	document.getElementById('eones').className += " on";
	document.getElementById('fones').className += " on";
	document.getElementById('gones').className = "g";

	document.getElementById('atens').className += " on";
	document.getElementById('btens').className += " on";
	document.getElementById('ctens').className += " on";
	document.getElementById('dtens').className += " on";
	document.getElementById('etens').className += " on";
	document.getElementById('ftens').className += " on";
	document.getElementById('gtens').className = "g";

	document.getElementById('ahundreds').className += " on";
	document.getElementById('bhundreds').className += " on";
	document.getElementById('chundreds').className += " on";
	document.getElementById('dhundreds').className += " on";
	document.getElementById('ehundreds').className += " on";
	document.getElementById('fhundreds').className += " on";
	document.getElementById('ghundreds').className = "g";
}

ones++;
console.log(ones);

	if(ones === 1){
		document.getElementById('aones').className = "a";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className = "d";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className = "f";
		document.getElementById('gones').className = "g";
	}else if(ones === 2){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className = "c";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className += " on";
		document.getElementById('fones').className = "f";
		document.getElementById('gones').className += " on";
	}else if(ones === 3){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className = "f";
		document.getElementById('gones').className += " on";
	}else if(ones === 4){
		document.getElementById('aones').className = "a";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className = "d";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className += " on";
	}else if(ones === 5){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className = "b";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className += " on";
	}else if(ones === 6){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className = "b";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className += " on";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className += " on";
	}else if(ones === 7){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className = "d";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className = "f";
		document.getElementById('gones').className = "g";
	}else if(ones === 8){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className += " on";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className += " on";
	}else if(ones === 9){
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className = "d";
		document.getElementById('eones').className = "e";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className += " on";
	}else if(ones === 10){
		ones=0;
		/* For the ones */
		document.getElementById('aones').className += " on";
		document.getElementById('bones').className += " on";
		document.getElementById('cones').className += " on";
		document.getElementById('dones').className += " on";
		document.getElementById('eones').className += " on";
		document.getElementById('fones').className += " on";
		document.getElementById('gones').className = "g";
		
		tens++;
	}

	if(tens === 1){
		document.getElementById('atens').className = "a";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className = "d";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className = "f";
		document.getElementById('gtens').className = "g";
	}else if(tens === 2){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className = "c";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className += " on";
		document.getElementById('ftens').className = "f";
		document.getElementById('gtens').className += " on";
	}else if(tens === 3){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className = "f";
		document.getElementById('gtens').className += " on";
	}else if(tens === 4){
		document.getElementById('atens').className = "a";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className = "d";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className += " on";
	}else if(tens === 5){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className = "b";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className += " on";
	}else if(tens === 6){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className = "b";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className += " on";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className += " on";
	}else if(tens === 7){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className = "d";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className = "f";
		document.getElementById('gtens').className = "g";
	}else if(tens === 8){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className += " on";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className += " on";
	}else if(tens === 9){
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className = "d";
		document.getElementById('etens').className = "e";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className += " on";
	}else if(tens === 10){
		tens=0;
		/* For the tens */
		document.getElementById('atens').className += " on";
		document.getElementById('btens').className += " on";
		document.getElementById('ctens').className += " on";
		document.getElementById('dtens').className += " on";
		document.getElementById('etens').className += " on";
		document.getElementById('ftens').className += " on";
		document.getElementById('gtens').className = "g";
		
		hundreds++;
	}

	if(hundreds === 1){
		document.getElementById('ahundreds').className = "a";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className = "d";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className = "f";
		document.getElementById('ghundreds').className = "g";
	}else if(hundreds === 2){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className = "c";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className += " on";
		document.getElementById('fhundreds').className = "f";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 3){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className = "f";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 4){
		document.getElementById('ahundreds').className = "a";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className = "d";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 5){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className = "b";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 6){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className = "b";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className += " on";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 7){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className = "d";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className = "f";
		document.getElementById('ghundreds').className = "g";
	}else if(hundreds === 8){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className += " on";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 9){
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className = "d";
		document.getElementById('ehundreds').className = "e";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className += " on";
	}else if(hundreds === 10){
		hundreds=0;
		/* For the hundreds */
		document.getElementById('ahundreds').className += " on";
		document.getElementById('bhundreds').className += " on";
		document.getElementById('chundreds').className += " on";
		document.getElementById('dhundreds').className += " on";
		document.getElementById('ehundreds').className += " on";
		document.getElementById('fhundreds').className += " on";
		document.getElementById('ghundreds').className = "g";
	}
}


function cincri(){

if(cones === 0 && ctens === 0 && chundreds === 0){
	document.getElementById('caones').className += " on";
	document.getElementById('cbones').className += " on";
	document.getElementById('ccones').className += " on";
	document.getElementById('cdones').className += " on";
	document.getElementById('ceones').className += " on";
	document.getElementById('cfones').className += " on";
	document.getElementById('cgones').className = "g";

	document.getElementById('catens').className += " on";
	document.getElementById('cbtens').className += " on";
	document.getElementById('cctens').className += " on";
	document.getElementById('cdtens').className += " on";
	document.getElementById('cetens').className += " on";
	document.getElementById('cftens').className += " on";
	document.getElementById('cgtens').className = "g";

	document.getElementById('cahundreds').className += " on";
	document.getElementById('cbhundreds').className += " on";
	document.getElementById('cchundreds').className += " on";
	document.getElementById('cdhundreds').className += " on";
	document.getElementById('cehundreds').className += " on";
	document.getElementById('cfhundreds').className += " on";
	document.getElementById('cghundreds').className = "g";
}

cones++;
console.log(cones);

	if(cones === 1){
		document.getElementById('caones').className = "a";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className = "d";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className = "f";
		document.getElementById('cgones').className = "g";
	}else if(cones === 2){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className = "c";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className += " on";
		document.getElementById('cfones').className = "f";
		document.getElementById('cgones').className += " on";
	}else if(cones === 3){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className = "f";
		document.getElementById('cgones').className += " on";
	}else if(cones === 4){
		document.getElementById('caones').className = "a";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className = "d";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className += " on";
	}else if(cones === 5){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className = "b";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className += " on";
	}else if(cones === 6){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className = "b";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className += " on";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className += " on";
	}else if(cones === 7){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className = "d";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className = "f";
		document.getElementById('cgones').className = "g";
	}else if(cones === 8){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className += " on";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className += " on";
	}else if(cones === 9){
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className = "d";
		document.getElementById('ceones').className = "e";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className += " on";
	}else if(cones === 10){
		cones=0;
		/* For the ones */
		document.getElementById('caones').className += " on";
		document.getElementById('cbones').className += " on";
		document.getElementById('ccones').className += " on";
		document.getElementById('cdones').className += " on";
		document.getElementById('ceones').className += " on";
		document.getElementById('cfones').className += " on";
		document.getElementById('cgones').className = "g";
		
		ctens++;
	}

	if(ctens === 1){
		document.getElementById('catens').className = "a";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className = "d";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className = "f";
		document.getElementById('cgtens').className = "g";
	}else if(ctens === 2){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className = "c";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className += " on";
		document.getElementById('cftens').className = "f";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 3){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className = "f";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 4){
		document.getElementById('catens').className = "a";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className = "d";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 5){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className = "b";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 6){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className = "b";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className += " on";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 7){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className = "d";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className = "f";
		document.getElementById('cgtens').className = "g";
	}else if(ctens === 8){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className += " on";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 9){
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className = "d";
		document.getElementById('cetens').className = "e";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className += " on";
	}else if(ctens === 10){
		ctens=0;
		/* For the tens */
		document.getElementById('catens').className += " on";
		document.getElementById('cbtens').className += " on";
		document.getElementById('cctens').className += " on";
		document.getElementById('cdtens').className += " on";
		document.getElementById('cetens').className += " on";
		document.getElementById('cftens').className += " on";
		document.getElementById('cgtens').className = "g";
		
		chundreds++;
	}

	if(chundreds === 1){
		document.getElementById('cahundreds').className = "a";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className = "d";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className = "f";
		document.getElementById('cghundreds').className = "g";
	}else if(chundreds === 2){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className = "c";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className += " on";
		document.getElementById('cfhundreds').className = "f";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 3){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className = "f";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 4){
		document.getElementById('cahundreds').className = "a";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className = "d";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 5){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className = "b";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 6){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className = "b";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className += " on";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 7){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className = "d";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className = "f";
		document.getElementById('cghundreds').className = "g";
	}else if(chundreds === 8){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className += " on";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 9){
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className = "d";
		document.getElementById('cehundreds').className = "e";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className += " on";
	}else if(chundreds === 10){
		chundreds=0;
		/* For the hundreds */
		document.getElementById('cahundreds').className += " on";
		document.getElementById('cbhundreds').className += " on";
		document.getElementById('cchundreds').className += " on";
		document.getElementById('cdhundreds').className += " on";
		document.getElementById('cehundreds').className += " on";
		document.getElementById('cfhundreds').className += " on";
		document.getElementById('cghundreds').className = "g";
	}
}