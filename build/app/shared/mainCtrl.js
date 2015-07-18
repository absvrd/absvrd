app.controller('mainCtrl', function($scope, $state){

$scope.slide = function(){
  $state.go('team');
};


});