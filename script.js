function volume_sphere(e) {
	e.preventDefault();
	let r = document.getElementById("radius").value;
	let input2 = document.getElementById("volume").value = ""
const PI = 3.14159;


var raio = parseInt(r);

var volumeEsfera = (4/3) * PI * Math.pow(raio, 3);
	input2.value = volumeEsfera;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
