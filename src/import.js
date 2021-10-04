// Imports

const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./firebase.js');
const serviceAccount = require('serviceAccount.json');



// JSON To Firestore

const jsonToFirestore = async () => {
try {
await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);

await firestoreService.restore('./shoes.json');

}

catch (error) {
console.log(error);

}

};

jsonToFirestore();