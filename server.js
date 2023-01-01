// @ts-check
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const { PORT } = process.env;

const app = express();

app.set('port', PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
