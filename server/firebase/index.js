var admin = require('firebase-admin');

var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecommerce1-c313e.firebaseio.com',
});

module.exports = admin;
