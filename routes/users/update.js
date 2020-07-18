const express = require('express');
const router = express.Router();
const users=require('../../controllers/users/update')

/* GET home page. */
router.post('/', users.update)

module.exports = router;
