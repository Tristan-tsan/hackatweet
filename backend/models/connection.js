const mongoose = require('mongoose');
const connectionLOG = process.env.connectionLOG;

const connectionString = `mongodb+srv://admin:${connectionLOG}@cluster0.lfdeh.mongodb.net/hackatweet`;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));