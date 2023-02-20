// const app = require('./server')
import app from './server'
import * as dotenv from 'dotenv'

dotenv.config();
// console.log(process.env) // log all env variables

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
