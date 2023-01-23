const express = require('express');
const router = express.Router();

router.use('/api/v1/collections', require('./collections'));
router.use('/api/v1/documents', require('./documents'));
router.use('/api/v1/quizzes', require('./quizzes'));
// router.use('/subCollections', require('./subCollections'));

module.exports = router;
