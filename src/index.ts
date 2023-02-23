// const app = require('./server')
import app from './server'
import * as dotenv from 'dotenv'

import config from './config';

dotenv.config();
// console.log(process.env) // log all env variables

const PORT = config.port

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
