const express = require('express');
const router = express.Router();
const mediaFilesController = require('../../../controllers/mediaFilesController');
const multer=require('multer');
const upload=multer({storage: multer.memoryStorage()});

router.get('/', mediaFilesController.getAllMediaFiles);
router.post('/', upload.single('file'), mediaFilesController.postMediaFile);

module.exports = router;