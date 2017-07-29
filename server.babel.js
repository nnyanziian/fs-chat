'use strict';

import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

app.use('/', express.static('public'));


app.listen(port, function() {
  console.log("Server Started at port 3000");
});