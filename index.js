const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express ()

app.use(cors())

app.get('/word', (req, res) => {


})

app.listen(PORT, () => console.log('Server running on port' + PORT))

const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5', wordLength: '5'},
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);

}).catch(function (error) {
	console.error(error);
});
