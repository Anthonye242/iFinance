const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a User model

// Route for rendering the dashboard view
router.get('/', async (req, res) => {
    res.render('dashboard/index');
});


module.exports = router;
