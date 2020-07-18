const express = require('express');
const router = express.Router();
const notes=require('../../controllers/notes/save')

/* GET home page. */
router.post('/', notes.save)

module.exports = router;
