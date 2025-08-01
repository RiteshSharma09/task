const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const notifyRoute = require('./routes/notify');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/send-notification', notifyRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Notification server running on port ${PORT}`);
});