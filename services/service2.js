const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/music', (req, res) => {
    const options = {
        method: 'GET',
        hostname: 'tokapi-mobile-version.p.rapidapi.com',
        path: '/v1/search/music?keyword=nike&count=10&offset=0&region=GB',
        headers: {
            'x-rapidapi-key': '04a9f67c33msh85d4ec4653ea687p1b47cejsn70389209e320',
            'x-rapidapi-host': 'tokapi-mobile-version.p.rapidapi.com'
        }
    };

    const apiRequest = https.request(options, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const responseBody = Buffer.concat(chunks);
            res.json(JSON.parse(responseBody.toString()));
        });
    });

    apiRequest.end();
});

module.exports = router;
