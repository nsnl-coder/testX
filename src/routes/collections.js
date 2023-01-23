const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collection');

router.post('/', collectionController.createCollection);
router.get('/', collectionController.getCollections);
router.get('/:id', collectionController.getCollection);
router.delete('/:id', collectionController.deleteCollection);
router.put('/:id', collectionController.updateCollection);

module.exports = router;
