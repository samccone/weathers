var request = require('request');

exports.getWeather = function(lat, lng, cb) {
  var apiUrl = "http://forecast.weather.gov/MapClick.php?lat="+lat+"&lon="+lng+"&site=okx&unit=0&lg=en&FcstType=json";
  request.get(apiUrl, function(err, body, res) {
    cb(err, JSON.parse(res));
  }
}