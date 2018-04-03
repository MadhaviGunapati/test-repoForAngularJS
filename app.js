(function (){
'use strict';
angular.module('nameCalculator', [])
.controller('nameCalculatorController', function ($scope){
  $scope.name='';
  $scope.totalValue=0;
  $scope.displayNumeric= function (){
    var totalNameValue= calculateNumericForString($scope.name);
    console.log(totalNameValue);
    $scope.totalValue= totalNameValue;
  };
  function calculateNumericForString(string){
    var totalStringValue= 0;
        for(var i=0; i<string.length; i++){
      totalStringValue += string.charCodeAt(i);
      console.log(totalStringValue);
    }
    return totalStringValue;
  }
});
})();
