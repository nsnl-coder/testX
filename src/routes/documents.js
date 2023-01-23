const express = require('express');
const router = express.Router();
const documentController = require('../controllers/document');

router.post('/', documentController.createDocument);
router.get('/:id', documentController.getDocument);
router.get('/', documentController.getDocuments);
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
