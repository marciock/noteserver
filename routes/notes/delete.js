const express = require('express');
const router = express.Router();
const notes=require('../../controllers/notes/delete');

/* GET home page. */
router.get('/', notes.delete)

module.exports = router;
