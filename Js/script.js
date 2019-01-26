var valeurEtape = 1

function tutoPlus() {
	valeurEtape++;
	console.log(valeurEtape);
	document.getElementById("imageTuto").src= `tutorial/etape${valeurEtape}.gif`;
}

function tutoMoins() {
	valeurEtape--;
	console.log(valeurEtape);
	document.getElementById("imageTuto").src= `tutorial/etape${valeurEtape}.gif`;
}

function defiPlus() {
	valeurEtape++;
	console.log(valeurEtape);
	document.getElementById("imageDefi").src= `defis/defi${valeurEtape}.gif`;
}

function defiMoins() {
	valeurEtape--;
	console.log(valeurEtape);
	document.getElementById("imageDefi").src= `defis/defi${valeurEtape}.gif`;
}


function fin() {

	setTimeout(function(){
		document.getElementById("flecheDroite").style.display = "none";
	},3050)
}


function reaparitionDroite(){
var x = document.getElementById("flecheDroite");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function reaparitionGauche(){
 var y = document.getElementById("flecheGauche"); 
  if (valeurEtape != 1) {
    y.style.display = "block";
  } 
  else {
  	y.style.display = "none"}
}

function delais(){
	var x = document.getElementById("flecheDroite");
	var y = document.getElementById("flecheGauche");
	document.getElementById("flecheDroite").style.display ="none";
	document.getElementById("flecheGauche").style.display ="none";
	setTimeout (function(){
		document.getElementById("flecheDroite").style.display ="block";
	document.getElementById("flecheGauche").style.display ="block";
	  if (valeurEtape != 1) {
    y.style.display = "block";
  } 
  else {
  	y.style.display = "none"}
  	  if (x.style.display === "none") {
    x.style.display = "block";
  }
}, 3000);
}


window.onload = (valeurEtape=1), console.log(valeurEtape);


