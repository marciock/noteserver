const express = require('express');
const router = express.Router();
const notes=require('../../controllers/notes/update')
/* GET home page. */
router.post('/', notes.update);

module.exports = router;
