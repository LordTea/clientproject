$("#search-btn").click(function(){
  user_input = $("#input").val();
  
  $.ajax({
    url: "https://api.soundcloud.com/tracks?q="+user_input+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      $("#image").html("<img src='"+response[0].artwork_url+"'class='img-thumbnail'>")
    }
  });
});

$("#random-btn").click(function(){
  $.ajax({
    url: "https://api.soundcloud.com/tracks?client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
      length = response.length;
      $("#image").html("<img src='"+response[0].artwork_url+"'class='img-thumbnail'>")
    }
  });
});

