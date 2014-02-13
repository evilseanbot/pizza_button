angular.module('pizza', ['ngSanitize']);

var pizzaCtrl = function($scope, $sce) {
    $scope.sfZipCodes = [
        '94102',
        '94103',
        '94104',
        '94105',
        '94106',
        '94107',
        '94108',
        '94109',
        '94110',
        '94111',
        '94112',
        '94113',
        '94114',
        '94115',
        '94116',
        '94117',
        '94118',
        '94119',
        '94120',
        '94121',
        '94122',
        '94123',
        '94124',
        '94125',
        '94126',
        '94127',
        '94128',
        '94129',
        '94130',
        '94131',
        '94132',
        '94133',
        '94134',
        '94137',
        '94139',
        '94140',
        '94141',
        '94142',
        '94143',
        '94144',
        '94145',
        '94146',
        '94147',
        '94151',
        '94158',
        '94159',
        '94160',
        '94161',
        '94163',
        '94164',
        '94172',
        '94177',
        '94188'
    ];

    // 1 = Za Pizza.
    // 2 = Paxti Chicago Pizza.

    $scope.zipToPlace = {        
        '94102': 1,
        '94103': 1,
        '94104': 1,
        '94105': 1,
        '94107': 2,        
        '94108': 1,
        '94109': 1,
        '94110': 2,        
        '94111': 1,
        '94114': 2,        
        '94115': 1,
        '94117': 1,
        '94118': 2,        
        '94123': 1,
        '94129': 1,
        '94133': 1, 
        '94143': 2        
    }

    $scope.places = {
    	1: {'name': 'Za pizza', 'special': 'Half vegan delight half pepperoni', 'price': '$24.99'},
    	2: {'name': 'Paxti Chicago Pizza', 'special': 'Half vegan delight half pepperoni', 'price': '$35.99'}
    }

    $scope.orderPizza = function() {
    	$scope.pbClasses = ["ordered"];
    	$scope.ordered = true;
    	$scope.mailPizzaOrder();
    	$scope.startETATimer();
    }

    $scope.mailPizzaOrder = function() {
    	// This is where we would implement something that would mail the pizza request details to the operator (Me)
    	console.log("Email is being sent.");
    }

    $scope.submitForm = function() {
		if ($scope.sfZipCodes.indexOf($scope.userZip) <= -1)  {
			$scope.formZipClasses = ["error"]
			$scope.errorMsg = "Zip codes must be valid San Francisco CA Zip codes. We are not serving other areas at this time."
		} else {
    	    $scope.formFilledOut = true;

    	    if ($scope.userZip in $scope.zipToPlace) {
    	    	var place = $scope.places[$scope.zipToPlace[$scope.userZip]];
    	    	var newOrderDesc =  place["name"] + '<br>' + place["special"] + '<br>' + place["price"];
    	    	$scope.orderDesc = $sce.trustAsHtml(newOrderDesc);
    	    } else {
    	    	$scope.orderDesc = $sce.trustAsHtml("No pizza place for that Zip. Blame Seanna.");
    	    }
    	}
    }

    $scope.startETATimer = function() {

    	setInterval(function() {
    		$scope.timeTillETA--;

    		$scope.$apply();
    	}, 1000);
    }

    $scope.doubleDigit = function(number) {
        return ("0" + number).slice(-2);    	
    }
}