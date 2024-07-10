const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint para la conversión de moneda
router.get('/', async (req, res) => {
    try {
        const apiKey = 'IBZzdLmM2yCYaXjgTZ6x';
        const { from, to, amount } = req.query;
        const url = `https://www.amdoren.com/api/currency.php?api_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`;

        const response = await axios.get(url);
        const convertedAmount = response.data.amount;

        res.json({
            output: {
                convertedAmount: convertedAmount,
                currency: to
            }
        });
    } catch (error) {
        console.error('Error fetching currency conversion:', error);
        res.status(500).json({ error: 'Error fetching currency conversion' });
    }
});

module.exports = router;