// const express = require('express');
import express from 'express'
import morgan from 'morgan'
import router from './router'

const app = express();

// custom middleware that accepts options/arguments
// const customLogger = (msg) => (req, res, next) => {
//   console.log(`hello from ${msg}`);
//   next();
// }

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(customLogger('custom logger'));

// custom middleware
// app.use((req, res, next) => {
//   req.custom_middleware = 'custom middleware';
//   next();
//   res.status(401)
//   res.send('Error')
// })


app.get('/', (req, res) => {
  console.log('express is running...');
  res.status(200);
  res.json({message: 'hello'});
})

app.use('/api', router)

export default app;