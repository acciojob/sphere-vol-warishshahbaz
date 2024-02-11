function volume_sphere(e) {
	e.preventDefault();
	let r = document.getElementById("radius").value;
	let input2 = document.getElementById("volume");



var raio = parseInt(r);

var volumeEsfera = (4/3) * Math.PI * Math.pow(raio, 3);
	document.getElementById("volume").value  = volumeEsfera;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
