angular.module('openflix')
  .service('yts', function($http) {

    var yts = {};
    yts.base = 'http://yts.re/api';

    yts.list = function() {
      return $http.get(yts.base + '/list.json')
        .success(function(result){
          return result.MovieList;
        });
    };

    yts.find = function(id) {
      return $http.get(yts.base + '/listimdb.json', {
          params: {
            imdb_id: id
          }
        })
        .success(function(result){
          return result.MovieList;
        });
    };
    
    return yts;
  });