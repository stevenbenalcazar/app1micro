// service1.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: 52.52,
                longitude: 13.41,
                current: 'temperature_2m,wind_speed_10m',
                hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
            }
        });

        const weatherData = response.data.current;
        res.json({
            temperature: weatherData.temperature_2m,
            windSpeed: weatherData.wind_speed_10m
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

module.exports = router;
