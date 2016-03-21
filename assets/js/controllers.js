
todoApp.controller('todoController', ['$scope', '$http', function($scope, $http){
  $scope.message = "hello world";
  $scope.todos = [
    {"todo": "finish taxes"},
    {"todo": "go to the post office"},
    {"todo": "prep lunch for tomorrow"},
    {"todo": "go over euler questions"},
    {"todo": "add angularjs routing to blog"},
    {"todo": "book airbnb"},
    {"todo": "book plane flights for may trip"}
  ] //closes array
}]); //closes todoApp controller
