
    
// function to choose the building type by user
// declaration of many variables that are used in JQuery
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
			var tPrice = 0;
			var totalFloors = 0;
			var totalMaxOcc = 0;
			var numberOfShafts = 0;
			var avgElevatorsByColumn = 0;


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

					
						Fees = $("#result").val();
						console.log("les fees sont ", + Fees) ;
						
						//document.getElementById("result").value;
						
						//console.log("attention ! installation fees are :", Fees);
						//totalFees = $("#total-price").val($("#unit-price").val() * $("#e-amount").val()) * Fees
						//console.log("Mathieu", + totalFees);
						//$("#inst-fees").val(totalFees * Fees );
						//console.log("Elevator amount needed", calcul);

					})


						$("input").change(function() {
							numberOfApartments = $("#nbapart").val()
							console.log("number-of-apartments is:", $("#nbapart").val());

							numberOfFloors = $("#nbfloor").val()
							console.log("number-of-floors is:", $("#nbfloor").val());
							avgOfApartByFloor = numberOfApartments / numberOfFloors
							console.log("The average is:" + avgOfApartByFloor);
							
							
							//var nbelevatorColumn = numberOfFloor;
							//console.log("nbelevatorColum is:", nbelevatorColumn)
							
							//var nbaparts = numberOfApartments;
							//console.log("Eureka:", nbaparts)
							numberOfShafts = numberOfApartments / 6
							console.log("avg:" + numberOfShafts)

//soritr la variable x et dire : si la valeur x > 20
							// rules to follow 1 shaft for 6 apartements
							// if stories > 20 add 1 more shaft
							// for each 20 stories, add a new column +1
							
							
							if (numberOfFloors > 20) {
									numberOfShafts
							}
							
							

							calcul = nbaparts / nbelevatorColumn;
							console.log("Eureka2:", calcul)

						// operation to find the nb of
							$("#e-amount").val(nbaparts / nbelevatorColumn);
							console.log("Elevator amount needed", calcul);

							
							$("#total-price").val(calcul * elevatorUnitPrice);
							console.log("Mon résultat est:", + elevatorUnitPrice);

							calculfinal = calcul * elevatorUnitPrice;
							console.log("Mon résultat est:", calculfinal);

							tPrice = $("#unit-price").val() * $("#e-amount").val() * Fees;
							console.log("The total price is:", tPrice);

							$("#inst-fees").val(tPrice);

							$("#final").val(calculfinal + tPrice);

					})

				}	
//END OF RESIDENTIAL


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
						elevatorUnitPrice = $(this).val()
						console.log("elevator unit price is:", $(this).val());	
					$("#unit-price").val(elevatorUnitPrice);
						console.log("the number is:", $(this).val());
					$("#total-price").val($("#unit-price").val() * $("#e-amount").val());
						console.log("Elevator total price is :", $("#total-price").val());
					
					// to get the inst. fees automatically

					Fees = $("#result").val();
					console.log("les fees sont ", + Fees) ;
						
					
					})
					
					
					$("input").change(function() {
						numberOfCages = $("#nbelev").val()
						console.log("number-of-cages is", numberOfCages);
						//var nbCages = numberOfCages;
						//console.log("Eureka:", nbCages)
						$("#e-amount").val(numberOfCages);
						console.log("Elevator amount needed", numberOfCages);

						$("#total-price").val(numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", + elevatorUnitPrice);

						calculfinal = (numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", calculfinal);

						tPrice = $("#unit-price").val() * $("#e-amount").val() * Fees;
						console.log("Installation price:", tPrice);

						$("#inst-fees").val(tPrice);

						$("#final").val(calculfinal + tPrice);	

					})
							
				}
// END OF COMMERCIAL

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

					// function to give the price of the product line choosen by user

					$("input[name='line']").click(function() {
						elevatorUnitPrice = $(this).val()
						console.log("elevator unit price is:", $(this).val());	
					$("#unit-price").val(elevatorUnitPrice);
						console.log("the number is:", $(this).val());
					$("#total-price").val($("#unit-price").val() * $("#e-amount").val());
						console.log("Elevator total price is :", $("#total-price").val());
					
					// to get the inst. fees automatically

					
					Fees = $("#result").val();
					console.log("les fees sont ", + Fees);

					})

					$("input").change(function() {
						totalFloors = (+$("#nbfloor").val() + +$("#nbbase").val())
						console.log(totalFloors);
						maximumOccupancy = $("#maxocc").val()
						totalMaxOcc = totalFloors * maximumOccupancy
						console.log("The max occ is :", + totalMaxOcc);
						numberOfElevators = totalMaxOcc / 1000;
						console.log("nbelev is:", numberOfElevators);
						numberOfShafts = totalFloors / 20;
						console.log("nbshafts :", numberOfShafts);
						//divide nb elevators by nb of shafts
						avgElevatorsByColumn = numberOfElevators / numberOfShafts
						console.log("The avg is :" + avgElevatorsByColumn);
						numberOfCages = Math.ceil(avgElevatorsByColumn * numberOfShafts)
						console.log("number-of-cages is", numberOfCages);
						
						$("#e-amount").val(numberOfCages);
						console.log("Elevator amount needed", numberOfCages);

						$("#total-price").val(numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", + elevatorUnitPrice);

						calculfinal = (numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", calculfinal);

						tPrice = $("#unit-price").val() * $("#e-amount").val() * Fees;
						console.log("Installation price:", tPrice);

						$("#inst-fees").val(tPrice);

						$("#final").val(calculfinal + tPrice);	


					})

				}
// END OF CORPORATE				
				
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

					// function to give the price of the product line choosen by user

					$("input[name='line']").click(function() {
						elevatorUnitPrice = $(this).val()
						console.log("elevator unit price is:", $(this).val());	
					$("#unit-price").val(elevatorUnitPrice);
						console.log("the number is:", $(this).val());
					$("#total-price").val($("#unit-price").val() * $("#e-amount").val());
						console.log("Elevator total price is :", $("#total-price").val());
					
					// to get the inst. fees automatically

					
					Fees = $("#result").val();
					console.log("les fees sont ", + Fees);

					})

					$("input").change(function() {
						totalFloors = (+$("#nbfloor").val() + +$("#nbbase").val())
						console.log(totalFloors);
						maximumOccupancy = $("#maxocc").val()
						totalMaxOcc = totalFloors * maximumOccupancy
						console.log("The max occ is :", + totalMaxOcc);
						numberOfElevators = totalMaxOcc / 1000;
						console.log("nbelev is:", numberOfElevators);
						numberOfShafts = totalFloors / 20;
						console.log("nbshafts :", numberOfShafts);
						//divide nb elevators by nb of shafts
						avgElevatorsByColumn = numberOfElevators / numberOfShafts
						console.log("The avg is :" + avgElevatorsByColumn);
						numberOfCages = Math.ceil(avgElevatorsByColumn * numberOfShafts)
						console.log("number-of-cages is", numberOfCages);
						
						$("#e-amount").val(numberOfCages);
						console.log("Elevator amount needed", numberOfCages);

						$("#total-price").val(numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", + elevatorUnitPrice);

						calculfinal = (numberOfCages * elevatorUnitPrice);
						console.log("Mon résultat est:", calculfinal);

						tPrice = $("#unit-price").val() * $("#e-amount").val() * Fees;
						console.log("Installation price:", tPrice);

						$("#inst-fees").val(tPrice);

						$("#final").val(calculfinal + tPrice);	


					})


				}	
// END OF HYBRID					
				
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