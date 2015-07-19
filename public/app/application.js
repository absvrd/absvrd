var app = angular.module('app', ['ui-routes', 'cfp.hotkeys', 'ngAnimate']);
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
app.controller('mainCtrl', function(){

// var   locations = {
          
//           left : { home: "home", about: "home", team: "about", blog:  "team", contact: "blog" },
//           right : { home: "about", about: "team", team: "blog", blog:  "contact", contact: "contact" }

//       };



// hotkeys.add({
//     combo: 'left',
//     description: 'This one goes to left',
//     callback: function() {
//       console.log('left');
//       $state.go(uri);

//     }
// });

// hotkeys.add({
//     combo: 'right',
//     description: 'This one goes right',
//     callback: function() {
//       console.log('right');
//       $state.go(uri);

//     }
// });


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