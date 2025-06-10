const fs = require('fs');

// Synchronous file write
// fs.writeFileSync('output.txt', 'Hello, Isha!');


// Asynchronous file write
// fs.writeFile('output.txt', 'Hello, Isha!', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// });

// Synchronous file read
// const result = fs.readFileSync('contact.txt', 'utf8');
// console.log(result);


// Asynchronous file read
// fs.readFile('contact.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log(data);
//   }
// });

// Synchronous file append
// fs.appendFileSync('output.txt', '\nThis is a new line.');

// Asynchronous file append
// fs.appendFile('output.txt', '\nThis is a new line.', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('File appended successfully!');
//   }
// });

// Synchronous file delete
// fs.unlinkSync('output.txt');

// Asynchronous file delete
// fs.unlink('output.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//   } else {
//     console.log('File deleted successfully!');
//   }
// });


// states of file
console.log(fs.statSync('contact.txt'));