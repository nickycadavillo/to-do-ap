
var todoApp = angular.module("todoApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/main.html'
    })
  }); //closes angular module
