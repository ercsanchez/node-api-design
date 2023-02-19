// const express = require('express');
import express from 'express'

const app = express();

app.get('/', (req, res) => {
  console.log('express is running...');
  res.status(200);
  res.json({message: 'hello'});
})

export default app;