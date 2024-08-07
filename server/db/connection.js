const mongoose = require('mongoose');

const url = `mongodb+srv://baniksprihanjay:EBSNZaZ5P5bnhjjO@cluster0.fbhpjds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url).then(() => console.log(`Connected to DB`)).catch((e)=> console.log(`Error`, e));



