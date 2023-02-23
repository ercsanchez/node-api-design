// blocking / synchronous code
const fs = require('fs');
const path = require('path');

const result = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8');
console.log('########### printing result of blocking code \n', result);

console.log('all blocking code finished executing \n');

// non-blocking / asynchronous code

const fsPromise = require('fs/promises'); // promises version of fs

// promise version
const read = async () => {
  return fsPromise.readFile(path.join(__dirname, 'package.json'), 'utf-8');
}
read().then(promiseResult => console.log('########### printing result of non-blocking code \n', promiseResult));

// async-await version
// const read = async () => {
//   await fsPromise.readFile(path.join(__dirname, 'package.json'), 'utf-8');
//   console.log('########### printing result of non-blocking code \n', result);
// }
// read();

console.log('this executes before promise resolves \n');
