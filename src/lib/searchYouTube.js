
var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {part: 'snippet', q: options.query, maxResults: options.max, key: options.key, type: 'video', videoEmbeddable: true},
    success: function(data) {
      console.log('SUCCEDED TO GET DATA', data);
      callback(data.items);
    },
    error: function(error) {
      console.log(error);
    }
  });  
};

window.searchYouTube = searchYouTube;
