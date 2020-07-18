const express = require('express');
const router = express.Router();
const users=require('../../controllers/users/show')

/* GET home page. */
router.get('/', users.showEdit);

module.exports = router;
