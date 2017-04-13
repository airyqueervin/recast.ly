
var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: { q: options.query, maxResults: options.max, key: options.key},
    success: function(data) {
      console.log('SUCCEDED TO GET DATA', data);
      callback(data);
    },
    error: function(error) {
      console.log(error);
    }
  });  
};

window.searchYouTube = searchYouTube;
