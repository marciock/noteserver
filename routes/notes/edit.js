const express = require('express');
const router = express.Router();
const notes=require('../../controllers/notes/show')

/* GET home page. */
router.get('/', notes.showEdit);

module.exports = router;
