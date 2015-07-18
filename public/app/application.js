var app = angular.module('app', ['ui-routes']);
var app = angular.module('ui-routes', ['ui.router'])


.config(["$urlRouterProvider", "$stateProvider",   function ($urlRouterProvider, $stateProvider){
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
app.controller('mainCtrl', function(){
  

  

});
app.controller('aboutCtrl', function(){


});
app.controller('blogCtrl', function(){

});
app.controller('contactCtrl', function(){

});
app.controller('homeCtrl', function(){


});
app.controller('teamCtrl', function(){
  

});