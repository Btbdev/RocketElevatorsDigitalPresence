
    
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
			var instFees = 0;
			var elevatorUnitPrice = 0;
			var calcul = 0;	
			var totalFees = 0;
			var tPrice = 0;
			var totalFloors = 0;
			var totalMaxOcc = 0;
			var numberOfShafts = 0;
			var avgElevatorsByColumn = 0;
			var numberOfElevatorShaft = 0;
			var numberOfColumns = 0;

// DEBUT OF RESIDENTIAL
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
				
					// to get the installation fees automatically

						Fees = $("#result").val();
						console.log("les fees sont ", + Fees) ;
												
					})

					// getting the values from user and some mathematics !
						$("input").change(function() {
							numberOfApartments = $("#nbapart").val()
							console.log("number-of-apartments is:", $("#nbapart").val());

							numberOfFloors = $("#nbfloor").val()
							console.log("number-of-floors is:", $("#nbfloor").val());
							avgOfApartByFloor = numberOfApartments / numberOfFloors
							console.log("The average of apartment per floor is:" + avgOfApartByFloor);
							numberOfElevatorShaft = Math.ceil(avgOfApartByFloor / 6)
							console.log("The nb of elevator shaft required :" + numberOfElevatorShaft);
							// i have 3 shafts
							//15 1
							//12.19 - 3
							numberOfColumns = Math.ceil(numberOfFloors / 20)
							console.log("The number of columns is:" + numberOfColumns)

							// to calculate the number of elevators needed (shafts * columns)
							numberOfElevators = numberOfElevatorShaft * numberOfColumns
							
							// to calculate the amount of elevator needed 
							$("#e-amount").val(numberOfElevators);
							console.log("Elevator amount needed", numberOfElevators);

							// to calculate the total price
							tPrice = numberOfElevators * elevatorUnitPrice
							$("#total-price").val(tPrice);
							console.log("Mon résultat est:", tPrice);

							//calculfinal = calcul * elevatorUnitPrice;
							//console.log("Mon résultat est:", calculfinal);

							instFees = $("#unit-price").val() * $("#e-amount").val() * Fees;
							console.log("The total price is:", instFees);

							$("#inst-fees").val(instFees);

							$("#final").val(instFees + tPrice);

					})

				}	
//END OF RESIDENTIAL

//DEBUT OF COMMERCIAL
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
					
					// to get the installation fees automatically

					Fees = $("#result").val();
					console.log("les fees sont ", + Fees) ;
						
					})
					
					// getting the values from user and some mathematics !
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

// DEBUT OF CORPORATE
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
					
					// to get the installation fees automatically
					
					Fees = $("#result").val();
					console.log("les fees sont ", + Fees);

					})

					// getting the values from user and some mathematics !
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

// DEBUT OF HYBRID
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
					
					// to get the installation fees automatically

										Fees = $("#result").val();
					console.log("les fees sont ", + Fees);

					})

					// getting the values from user and some mathematics !
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

// function to convert to value with desired format presentation

//var b = document.getElementsByClassName("monetary");
//b.addEventListener("change",function() {
//	var m = document.getElementsByClassName("monetary").value;
//	var numUSD = new Intl.NumberFormat("en-US", {
//		style:"currency",
//		console.log("monetary test:" + monetary)
//	})
//});