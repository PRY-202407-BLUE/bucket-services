const mediaFilesService = require('../services/mediaFilesService');

const getAllMediaFiles = (req, res) => {
    const result = mediaFilesService.getAllMediaFiles();
    res
        .status(200)
        .send({status: 'OK', data: {'result': 'todo ok'}});
}

const postMediaFile = async (req, res) => {
    const result = await mediaFilesService.postMediaFile(req.file);
    res.send('Post media file to firestore');
}

module.exports = {
    getAllMediaFiles,
    postMediaFile
};