const axios = require("axios");

const options = {
  method: 'GET',
  url: 'http://localhost:3000/coord',
  params: {q: 'London', dt: '2022-12-25'},
  headers: {
    'X-RapidAPI-Key': '705d73b116mshd9b8607d518cc0dp131b0djsnbc689c902494',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});