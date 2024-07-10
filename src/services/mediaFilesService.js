const mediaFileRepository = require('../repositories/mediaFilesRepository');

const getAllMediaFiles = () => {
    return;
}

const postMediaFile = async (file) => {
    await mediaFileRepository.saveMediaFile(file);
}

module.exports = {
    getAllMediaFiles,
    postMediaFile
}