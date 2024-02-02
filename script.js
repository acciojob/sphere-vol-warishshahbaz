function volume_sphere() {
	let r = document.getElementById("radius").value;
	let input2 = document.getElementById("volume")
	let cal = (4*Math.pai()*r*r*)/3
	input2.value = cal;
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
