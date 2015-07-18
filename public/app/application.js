var app = angular.module('app', ['ui-routes','ngAnimate', 'ngTouch', 'ngDraggable']);
var app = angular.module('ui-routes', ['ui.router'])


.config(["$stateProvider","$locationProvider","$urlRouterProvider",    function ($stateProvider, $locationProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    
  // $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl : 'views/pages/home.html',
      controller  : 'homeCtrl as home',
    })
    .state('about', {
      url: '/about',
      templateUrl : 'views/pages/about.html',
      controller  : 'aboutCtrl as about',
      
    })
    .state('team', {
      url: '/team',
      templateUrl : 'views/pages/team.html',
      controller  : 'teamCtrl as team',
      
    })
    .state('blog', {
      url: '/blog',
      templateUrl : 'views/pages/blog.html',
      controller  : 'blogCtrl as blog',
      
    })
    .state('contact', {
      url: '/contact',
      templateUrl : 'views/pages/contact.html',
      controller  : 'contactCtrl as contact',
      
    });
    

}]);
app.controller('mainCtrl', function($scope, $state){

$scope.slide = function(){
  $state.go('team');
};


});
app.controller('aboutCtrl', function($scope){


});
app.controller('blogCtrl', function($scope){

});
app.controller('contactCtrl', function($scope){

});
app.controller('homeCtrl', function($scope){

});
app.controller('teamCtrl', function($scope){


});