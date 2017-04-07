const express = require('express');
const router = express.Router();

// Get api 
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;