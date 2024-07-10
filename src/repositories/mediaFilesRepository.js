const admin = require("firebase-admin");

const serviceAccount = require('../../3gj2l-f8404e5011.json');
//const saltedMd5=require('salted-md5')
//const path=require('path');


//var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://bookofsilence-914bb.appspot.com'
});

const bucket = admin.storage().bucket();

const saveMediaFile = async (file) => {
    console.log(file.originalname);
    const fileRouteAndName = 'audioRecords/' + file.originalname;
    const rr = await bucket.file(fileRouteAndName).createWriteStream().end(file.buffer);
    console.log(rr);
}

module.exports = {
    saveMediaFile
}


//https://medium.com/@ritik.gupta2018/firebase-storage-and-firestore-with-node-js-for-absolute-beginners-7072f4c1a0f5
//https://console.firebase.google.com/u/0/project/bookofsilence-914bb/settings/serviceaccounts/adminsdk