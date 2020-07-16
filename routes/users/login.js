const express = require('express');
const router = express.Router();
const users =require('../../controllers/users/show');

/* GET home page. */
router.post('/', users.checkLogin)

module.exports = router;
