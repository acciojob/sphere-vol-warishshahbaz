function volume_sphere(e) {
	e.preventDefault();
	
	 const radiusInput = document.getElementById("radius").value;

    // Convert the input to a floating-point number
    const radius = parseFloat(radiusInput);

    // Validate the input: Check if the input is a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If input is not valid, display 'NaN' in the output field
        document.getElementById("output").value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume rounded to four decimal places
        document.getElementById("output").value = volume.toFixed(4);
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
