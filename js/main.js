angular.module('main', []).controller('mainController', function ($scope) {

  $scope.reviews = [
    {
      'desc': '"Hadjineophytou is a sensitive and accomplished conductor skilfully directing the 35 voice choir through music that many of them had only seen recently, and she is also an excellent organist."'
    },
    {
      'desc': '...'
    }
  ];

  $scope.gallery = [
    {
      'img': 'img/1.jpg'
    },
    {
      'img': 'img/2.jpg'
    },
    {
      'img': 'img/3.jpg'
    }
  ];

});
