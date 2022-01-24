import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://numbersapi.p.rapidapi.com/1492/year',
  params: {json: 'true', fragment: 'true'},
  headers: {
    'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
    'x-rapidapi-key': '2046301adamsha5cea5d0410713cp1d79a7jsn289e43c73ab9'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});