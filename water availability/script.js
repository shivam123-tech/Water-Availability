const form = document.querySelector("form");
const availability = document.getElementById("availability");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = form.elements["location"].value;
  availability.innerHTML = `Water is ${getWaterAvailability(location)} in ${location}.`;
});

function getWaterAvailability(location) {

  return "available";
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//water chart start
	const waterData = {
			labels: [ "Andhra pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "HimachalPradesh",
      "J&K",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "MadhyaPradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "West Bengal",
    ],
			datasets: [{
				label: 'Water Availability',
				data: [70, 80, 60, 50, 65, 80, 70,70,70,70,70,70,70,70,70,50,60,45,43,56,25,27,76,10,48,39,71,56], // Replace with your own data
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(55, 165, 236, 0.2)',
          "rgba(25, 9, 132, 0.2)",
          "rgba(51, 62, 35, 0.2)",
          "rgba(255, 106, 186, 0.2)",
          "rgba(175, 92, 192, 0.2)",
          "rgba(15, 10, 255, 0.2)",
          "rgba(25, 20, 6, 0.2)",
          "rgba(255, 16, 26, 0.2)",
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(157, 100, 233, 1)',
          "rgba(55, 199, 132, 1)",
          "rgba(4, 162, 255, 1)",
          "rgba(55, 106, 186, 1)",
          "rgba(175, 12, 102, 1)",
          "rgba(155, 100, 155, 1)",
          "rgba(152, 10, 155, 1)",
          "rgba(152, 10, 33, 1)",

				],
				borderWidth: 1
			}]
		};

		// Create the chart
		const ctx = document.getElementById('waterChart').getContext('2d');
		const waterChart = new Chart(ctx, {
			type: 'bar',
			data: waterData,
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

 