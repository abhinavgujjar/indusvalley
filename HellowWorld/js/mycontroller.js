helloApp.controller('MyCtrl', function($scope){

	$scope.location = '';

	$scope.showHotels = false;

	$scope.hotels = [{
		name : 'Taj',
		location : 'new Delhi'
	},
	{
		name : 'Hyatt',
		location :'Noida'	
	}];
})