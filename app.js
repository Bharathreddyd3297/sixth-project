import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'local';

app.use(bodyParser.json());
app.use(eventRoutes);

app.listen(PORT, () => {
  console.log('Server started successfully');
  console.log('PORT:', PORT);
  console.log('ENVIRONMENT:', APP_ENV);
});
