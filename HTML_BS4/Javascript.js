
    

		quoteFormElements: [
			{
				Type: "residential",
				inputFields: ["number-of-apartments", "number-of-floors", "number-of-basements"]
			},
			{
				type: "commercial",
				inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "number-of-elevators"]
			},
			{
				type: "corporate",
				inputFields: ["number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-corporations", "maximum-occupancy"]
			},
			{
				type: "hybrid",
				inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "maximum-occupancy", "business-hours"]
			},
			{
				productLineIDs: ["standard", "premium", "excelium"]
			},
			{
				resultsInputsIDs: ["elevator-amount", "elevator-unit-price", "elevator-total-price", "installation-fees", "final-price"]	
			}

		];



		$(function() {
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
				}
				
			});	
		});
		

	
		function myFunction(line) {
			document.getElementById("result").value = line;
			
		}	


       

						






				
// This is the first function - if commercial, nb elevetaors is given & nb elevators = required nb evaluated


// This is the second function - if residential, lets divide nb of apartments / nb of floors (without nb of basements). The result = nb of apartements by floor.
// We need 1 elevator for each 6 apartments. If apartments > 20 floors, we need 2 elevators. Add 1 row of elevators for each 20 apartements.


// This is the third function - if corporate or hydrid, we multiply nb max occupancy by nb of floors = nb occupancy total. The number of elevator = nb occupancy total / 1000.
// Then we divide nb of floors (with the nb of basement) by 20 = nb of elevators columns required. Then we divide nb of elevators by nb of columns = average of elevators by columns.
// Total nb of elevators = this average multiplied by nb of columns.


//BUDGET CALCULATION AFTER THE NB OF ELEVATORS WAS FOUND
// This is the fourth function - 