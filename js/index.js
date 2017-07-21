$(document).ready(function(){


  // if user's allow access to location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // get user's latitude and longitude 
      var lat = position.coords.latitude; 
      var lon = position.coords.longitude;
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=903a777786401462df4785484710cb05", function(d) {
      
      // store temperatures in celsius and farenheit
      var c = d.main.temp - 273;
      var f = c * 9 / 5 + 32;
    
    $("#location").html(d.name + ", " + d.sys.country);
    $("#weather").html("<img src='http://openweathermap.org/img/w/"+d.weather[0].icon+".png'> " + d.weather[0].description);
    $("#temp").html(String(Math.round(f)) + "°F");
    
      var curr = 0;
    
      // function for button to toggle betweet °C and °F
      $(".change").on("click", function() {
        if (curr === 0) {
          $("#temp").html(String(Math.round(c)) + "°C");
          curr = 1;
        } else {
          $("#temp").html(String(Math.round(f)) + "°F");
          curr = 0;
        }
      })
    
    //object to hold background image url according to weather
     var obj = {
     '01d': "http://fonxl.ru/wp-content/uploads/2015/04/Water-blue-mountains-forest-multiscreen-skyscapes-tranquility_3200x1200.jpg",
     '02d': "https://www.nomadasaurus.com/wp-content/uploads/2017/04/Lenticular-Clouds.jpg",
     '03d': "https://images.fineartamerica.com/images-medium-large-5/sunrays-scattered-by-clouds-over-trieste-bay-ian-middleton.jpg",
     '04d': "http://pop.h-cdn.co/assets/17/16/980x490/landscape-1492545980-kaskawulshriver-jimbest.jpg",
     '09d': "https://s.w-x.co/56a3d494-ae4e-48be-a657-43197dac5401.jpg",
     '10d': "https://s-media-cache-ak0.pinimg.com/originals/2d/20/f2/2d20f2badf88ee44a725c687e3e6aff7.jpg",
     '11d': "http://wallpapercave.com/wp/FTvkLn5.jpg",
     '13d': "http://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Amazing-Winter-Picture.jpg",
     '50d': "http://hajimemoriyama.com/wp-content/uploads/Screenshot-2016-09-25-16.54.53.png",
     '01n': "http://fonxl.ru/wp-content/uploads/2015/04/Water-blue-mountains-forest-multiscreen-skyscapes-tranquility_3200x1200.jpg",
     '02n': "https://www.nomadasaurus.com/wp-content/uploads/2017/04/Lenticular-Clouds.jpg",
     '03n': "https://images.fineartamerica.com/images-medium-large-5/sunrays-scattered-by-clouds-over-trieste-bay-ian-middleton.jpg",
     '04n': "http://pop.h-cdn.co/assets/17/16/980x490/landscape-1492545980-kaskawulshriver-jimbest.jpg",
     '09n': "https://s.w-x.co/56a3d494-ae4e-48be-a657-43197dac5401.jpg",
     '10n': "https://s-media-cache-ak0.pinimg.com/originals/2d/20/f2/2d20f2badf88ee44a725c687e3e6aff7.jpg",
     '11n': "http://wallpapercave.com/wp/FTvkLn5.jpg",
     '13n': "http://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Amazing-Winter-Picture.jpg",
     '50n': "http://hajimemoriyama.com/wp-content/uploads/Screenshot-2016-09-25-16.54.53.png"   
    }
    

    var link = obj[d.weather[0].icon];
    document.body.style.backgroundImage = "url("+link+")";
    
    }); 
  });
  

}
  
  
});