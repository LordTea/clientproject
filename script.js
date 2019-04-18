var songindex = 0;

$("#search-btn").click(function(){
  user_input = $("#input").val();
  
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