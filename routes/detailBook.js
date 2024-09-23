const express = require('express');
const router = express.Router();
const detailBookController = require('../controllers/detailBookController');

router.post('/', detailBookController.addDetailBook);
router.get('/:bookId', detailBookController.getDetailBook);

module.exports = router;
