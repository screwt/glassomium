
var myapp = angular.module("myapp",[]);
myapp.controller("ctrl",["$log","$scope","$interval",function($log,$scope,$interval){
	$scope.sensor1 = 50,00;
	$scope.sensor2 = 0,00;
	$scope.sensor3 = 0,00;
	$scope.sensor4 = 0,00;
	$scope.sensor5 = 0,00;
	$scope.sensor6 = 0,00;
	$scope.sensor7 = 0,00;
	$scope.sensor8 = 0,00;
	$scope.sensor9 = 0,00;
	$scope.sensor10 = 100,00;
	
	$interval(function(){
		$scope.sensor1 += Math.random() - 0.5;
		$scope.sensor2 += Math.random() - 0.5;
		$scope.sensor3 += Math.random() - 0.5;
		$scope.sensor4 += Math.random() - 0.5;
		$scope.sensor5 += Math.random() - 0.5;
		$scope.sensor6 += Math.random() - 0.5;
		$scope.sensor7 += Math.random() - 0.5;
		$scope.sensor8 += Math.random() - 0.5;
		$scope.sensor9 += Math.random() - 0.5;
		$scope.sensor10 += Math.random() - 0.5;
	},500)
	
	$scope.isActive = false;
	$interval(function(){
		$scope.isActive = !$scope.isActive;
	},2000)
	
}]);