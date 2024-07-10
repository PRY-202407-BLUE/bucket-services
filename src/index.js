const express = require('express');
const routerMediaFiles_v1 = require('./routes/mediaFiles/v1/mediaFilesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/media-files', routerMediaFiles_v1);

app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});