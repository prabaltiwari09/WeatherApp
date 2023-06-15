const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '********************************'; //Replace with your API Key

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { temperature: null, humidity: null, windSpeed: null, weatherCondition: null, error: null });
});

function getDirection(angle) {
    var directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
}

app.post("/", (req, res) => {
    const city = req.body.city || "Indore";
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    request(url, (error, response, body) => {
        if (error) {
            res.render('index', { temperature: null, humidity: null, windSpeed: null, weatherCondition: null, error: 'Error, Please try again' });
        } else {
            const weather = JSON.parse(body);
            if (weather.main == undefined) {
                res.render('index', { temperature: null, humidity: null, windSpeed: null, weatherCondition: null, error: `${city} not found. Please try again` });
            } else {
                const temperature = `It's ${weather.main.temp}° in ${weather.name}, but feels like ${weather.main.feels_like}°`
                const humidity = `Humidity is ${weather.main.humidity}%`;
                const windSpeed = `Wind Speed is ${parseFloat(weather.wind.speed * 3.6).toFixed(2)} km/hr from ${getDirection(weather.wind.deg)} direction.`
                const weatherCondition = `Weather condition looks like ${weather.weather[0].main}`;
                res.render('index', { temperature: temperature, humidity: humidity, windSpeed: windSpeed, weatherCondition: weatherCondition, error: null });
            }
        }
    });
});

app.listen(3000, () => {
    console.log('Weather app listening on port 3000!');
});