//const express = require('express')
//const app = express()
//app.use(express.static('public'))
var request = require("request");

var options = { method: 'GET',
  url: 'https://globalmagnet.amentum.space/api/calculate_magnetic_field',
  qs: 
   { altitude: '%200.0618744',
     longitude: '-83.278831',
     latitude: '30.830750',
     year: '2019' },
  headers: 
   { 'Postman-Token': 'fab01bea-063b-4e18-875c-1615be6a5d33',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

app.listen(3000, () => console.log('Server running on port 3000'))