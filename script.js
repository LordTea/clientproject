var songindex = 0;

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyAPioV7wl_k7fn7tWXDI5cbBOQYEa5nw4k',
    // Your API key will be automatically added to the Discovery Document URLs.
    // 'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
  }).then(function() {
    console.log('gapi loaded',gapi.client.youtube);
    
    gapi.client.youtube.search.list({
      "part": "contentDetails",
      "maxResults": 25,
      "q": "happy"
    }).then(function(response) {
      console.log(JSON.parse(response.body));
    }).catch(function(response) {
      console.log(JSON.parse(response.body));
    });
  });
};

gapi.load('client', start);

// var googleUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=7lCDEYXw3mM&apiKey=AIzaSyAPioV7wl_k7fn7tWXDI5cbBOQYEa5nw4k'


$("#search-btn").click(function(){
  var user_input = $("#input").val();
  
  // $.ajax({
  //   url: googleUrl + "&q=happy",
  //   method: "GET",
  //   success: function(response) {
  //     console.log(response);
  //   }
  // })
  
  $.ajax({
    url: "https://api.soundcloud.com/tracks?q="+user_input+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      songindex = 0;
      $("#image").html("<img src='"+response[songindex].artwork_url+"'class='img-thumbnail'>")
      if (response[songindex].artwork_url == null){
        $("#image").html("<img src='https://www.nasselquistjewellers.com/static/images/temp-inventory-landing.jpg' class='img-thumbnail'>")
      }
      
      $("#title").html("<p class='text-center'>"+response[songindex].title+"</p>")
      
      $(".link").html("<a href='"+response[songindex].permalink_url+"'>Listen to this song on Sound Cloud</a>");
    }
  });
});

$("#random-btn").click(function(){
  $.ajax({
    url: "https://api.soundcloud.com/tracks?client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      var length = response.length;
      songindex = Math.floor(Math.random() * length);
      $("#image").html("<img src='"+response[songindex].artwork_url+"'class='img-thumbnail'>")
      if (response[songindex].artwork_url == null){
        $("#image").html("<img src='https://www.nasselquistjewellers.com/static/images/temp-inventory-landing.jpg' class='img-thumbnail'>")
      }
      
      $("#title").html("<p class='text-center'>"+response[songindex].title+"</p>")
    
      $(".link").html("<a href='"+response[songindex].permalink_url+"'>Listen to this song on Sound Cloud</a>");
    }
  });
});

$("#forward").click(function(){
  user_input = $("#input").val();
  
  $.ajax({
    url: "https://api.soundcloud.com/tracks?q="+user_input+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      songindex = songindex+1;
      $("#image").html("<img src='"+response[songindex].artwork_url+"'class='img-thumbnail'>")
      if (response[songindex].artwork_url == null){
        $("#image").html("<img src='https://www.nasselquistjewellers.com/static/images/temp-inventory-landing.jpg' class='img-thumbnail'>")
      }
      
      $("#title").html("<p class='text-center'>"+response[songindex].title+"</p>")
    
      $(".link").html("<a href='"+response[songindex].permalink_url+"'>Listen to this song on Sound Cloud</a>");
    }
  });
});

$("#backward").click(function(){
  user_input = $("#input").val();
  
  $.ajax({
    url: "https://api.soundcloud.com/tracks?q="+user_input+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      songindex = songindex-1;
      $("#image").html("<img src='"+response[songindex].artwork_url+"'class='img-thumbnail'>")
      if (response[songindex].artwork_url == null){
        $("#image").html("<img src='https://www.nasselquistjewellers.com/static/images/temp-inventory-landing.jpg' class='img-thumbnail'>")
      }
      
      $("#title").html("<p class='text-center'>"+response[songindex].title+"</p>")
    
      $(".link").html("<a href='"+response[songindex].permalink_url+"'>Listen to this song on Sound Cloud</a>");
    }
  });
});

var myAudio = document.getElementById("music");
var isPlaying = true;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
}

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

$("#pause").click(function(){
  togglePlay();
});
