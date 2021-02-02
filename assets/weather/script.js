
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=tel-aviv&appid=50a73cc9bf24d6e1ab01fac9332630d1",
function(data) {
   console.log(data);

   var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
   var temp = Math.floor(data.main.temp);
   var weather = data.weather[0].main;

   $('.icon').attr('src', icon);
   $(".weather").append(weather);
   $('.temp').append(temp/10);
});
