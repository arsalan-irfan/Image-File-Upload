const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = requre('multer');
const gridFsStorage = requre('multer-gridfs-storage');
const Stream = requre('gridfs-stream');
const bodyParser = requre('body-parser');
const methodOverride = requre('method-override');

const app = express();
//MiddleWare
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

//Mongo URI
const mongoURI =
  'mongodb://arsalan:a1b2c3d4@ds111063.mlab.com:11063/eventonclick';

app.get('/', (req, res) => {
  res.render('index');
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
