const request = require('request');
const argv = require('yargs').argv;

let apiKey = '********************************'; //Replace with your API Key
let city = argv.c || 'indore';
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err) {
        console.log('error', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
        console.log(message);
    }
});