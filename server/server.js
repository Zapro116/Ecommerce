const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/auth');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected Successfully`))
  .catch(err => console.log(`DB Connection Failed`, err));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(morgan('dev'));
app.use(cors());

app.route('/api').get((req, res) => {
  res.json({
    data: 'hey you hit the api',
  });
});

fs.readdirSync('./routes').map(r => app.use('/api', require(`./routes/${r}`)));

app.listen(process.env.PORT, () =>
  console.log(`Connected to ${process.env.PORT} port`),
);
