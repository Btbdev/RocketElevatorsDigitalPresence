
    

	// //	quoteFormElements: [
	// 		{
	// 			Type: "residential",
	// 			inputFields: ["number-of-apartments", "number-of-floors", "number-of-basements"]
	// 		},
	// 		{
	// 			type: "commercial",
	// 			inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "number-of-elevators"]
	// 		},
	// 		{
	// 			type: "corporate",
	// 			inputFields: ["number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-corporations", "maximum-occupancy"]
	// 		},
	// 		{
	// 			type: "hybrid",
	// 			inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "maximum-occupancy", "business-hours"]
	// 		},
	// 		{
	// 			productLineIDs: ["standard", "premium", "excelium"]
	// 		},
	// 		{
	// 			resultsInputsIDs: ["elevator-amount", "elevator-unit-price", "elevator-total-price", "installation-fees", "final-price"]	
	// 		}

	// 	];



// function to choose the building type by user
		$(function() {
			var numberOfApartments = 0;
			var numerOfBasements = 0;
			var numberOfCompanies = 0;
			var numberOfCorporations = 0;
			var numberOfElevators = 0;
			var numberOfFloors = 0;
			var numberOfParkingSpots = 0;
			var maximumOccupancy = 0;
			var businessHours = 0;
			var totalNumberOfOccupants = 0;
			var numberOfCages = 0;
			var Fees = 0;
			var elevatorUnitPrice = 0;
			var calcul = 0;	
			var totalFees = 0;



			$("input[name='btype']").click(function() {
				if ($("#residential").is(":checked")) {
					$("#number-of-apartments").show();
					$("#number-of-floors").show();
					$("#number-of-basements").show();
					$("#number-of-companies").hide();
					$("#number-of-parking-spots").hide();
					$("#number-of-elevators").hide();
					$("#number-of-corporations").hide();
					$("#maximum-occupancy").hide();
					$("#business-hours").hide();

					// function to give the price of the product line choosen by user
					$("input[name='line']").click(function() {
						elevatorUnitPrice = $(this).val()
						console.log("elevator unit price is:", $(this).val());	
					$("#unit-price").val(elevatorUnitPrice);
						console.log("the number is:", $(this).val());
					$("#total-price").val($("#unit-price").val() * $("#e-amount").val());
						console.log("Elevator total price is :", $("#total-price").val());
				
// to get the inst. fees automatically

$()
	Fees = $("#result").val();
	console.log("les fees sont ", + Fees) ;
	
	//document.getElementById("result").value;
	
	console.log("attention ! installation fees are :", Fees);
	totalFees = $("#total-price").val($("#unit-price").val() * $("#e-amount").val()) * Fees
	console.log("Mathieu", + totalFees);
	$("#inst-fees").val(totalFees * Fees );
	console.log("Elevator amount needed", calcul);

})


$("input").change(function() {
	numberOfApartments = $("#nbapart").val()
	console.log("number-of-apartments is:", $("#nbapart").val());


	var numberOfFloor = $("#nbfloor").val()
	console.log("number-of-floors is:", $("#nbfloor").val());


	var nbelevatorColumn = numberOfFloor;
	console.log("nbelevatorColum is:", nbelevatorColumn)
	
	var nbaparts = numberOfApartments;
	console.log("Eureka:", nbaparts)

	calcul = nbaparts / nbelevatorColumn;
	console.log("Eureka2:", calcul)


	$("#e-amount").val(nbaparts / nbelevatorColumn);
	console.log("Elevator amount needed", calcul);

	
	$("#total-price").val(calcul * elevatorUnitPrice);
	console.log("Mon résultat est:", + elevatorUnitPrice);

	var calculfinal = calcul * elevatorUnitPrice;
	console.log("Mon résultat est:", calculfinal);

	var tPrice = $("#total-price").val($("#unit-price").val() * $("#e-amount").val());
	console.log("The total price is:", tPrice);


})
//END OF RESIDENTIAL
				}	



				if ($("#commercial").is(":checked")) {
					$("#number-of-apartments").hide();
					$("#number-of-floors").show();
					$("#number-of-basements").show();
					$("#number-of-companies").show();
					$("#number-of-parking-spots").show();
					$("#number-of-elevators").show();
					$("#number-of-corporations").hide();
					$("#maximum-occupancy").hide();
					$("#business-hours").hide();

					// function to give the price of the product line choosen by user

					$("input[name='line']").click(function() {
						var elevatorUnitPrice = $(this).val()
						console.log("elevator unit price is:", $(this).val());	
					$("#unit-price").val(elevatorUnitPrice);
						console.log("the number is:", $(this).val());
					$("#total-price").val($("#unit-price").val() * $("#e-amount").val());
						console.log("Elevator total price is :", $("#total-price").val());
					//});

					$("input").change(function() {
						var numberOfCages = $("#nbelev").val()
						console.log("number-of-cages is", $("#nbelev").val());
						var nbCages = numberOfCages;
						console.log("Eureka:", nbCages)
						$("#e-amount").val(nbCages);
						console.log("Elevator amount needed", nbCages);
					})
				})



// END OF COMMERCIAL					
				}
				if ($("#corporate").is(":checked")) {
					$("#number-of-apartments").hide();
					$("#number-of-floors").show();
					$("#number-of-basements").show();
					$("#number-of-companies").hide();
					$("#number-of-parking-spots").show();
					$("#number-of-elevators").hide();
					$("#number-of-corporations").show();
					$("#maximum-occupancy").show();
					$("#business-hours").hide();

// END OF CORPORATE				
				}
				if ($("#hybrid").is(":checked")) {
					$("#number-of-apartments").hide();
					$("#number-of-floors").show();
					$("#number-of-basements").show();
					$("#number-of-companies").show();
					$("#number-of-parking-spots").show();
					$("#number-of-elevators").hide();
					$("#number-of-corporations").hide();
					$("#maximum-occupancy").show();
					$("#business-hours").show();

// ENND OF HYBRID					
				}
				
				
			});	
			
		});

// Functions to make some calculations


		
// function to get the value of the choosen line product

function instFees() {
	var x = $("#nbfloor").val();
	console.log("test de variable global:", $("#nbfloor").val());
};

function myFunction(line) {
			document.getElementById("result").value = line.value;
			console.log("Test du matin:" + line.id);
			};

function myFunction(line) {
			document.getElementById("result").value = line.id;
			console.log("enfin ? :", + line.id);
			};


			//$("input[name='productline']").click(function () {
			//	if ($("#standard").is(".checked")) {
			//		$(this).val();
			//		var Fees = 0.1;
			//		var totalFees = Fees * $("#total-price").val($("#unit-price").val() * $("#e-amount").val());
			//		$("#inst-fees").val(totalFees);
			//		console.log("Mathieu:", totalFees);
			//	}
		//	});			
		
	






			
// This is the first function - if commercial, nb elevetaors is given & nb elevators = required nb evaluated


// This is the second function - if residential, lets divide nb of apartments / nb of floors (without nb of basements). The result = nb of apartements by floor.
// We need 1 elevator for each 6 apartments. If apartments > 20 floors, we need 2 elevators. Add 1 shaft of elevators for each 20 apartements.


// This is the third function - if corporate or hydrid, we multiply nb max occupancy by nb of floors = nb occupancy total. The number of elevator = nb occupancy total / 1000.
// Then we divide nb of floors (with the nb of basement) by 20 = nb of elevators columns required. Then we divide nb of elevators by nb of columns = average of elevators by columns.
// Total nb of elevators = this average multiplied by nb of columns.


//BUDGET CALCULATION AFTER THE NB OF ELEVATORS WAS FOUND
// This is the fourth function - 
