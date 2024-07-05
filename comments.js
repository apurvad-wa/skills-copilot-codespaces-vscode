// Create web server
// Create a route for /comments
// Create a route for /comments/:id
// Create a route for /comments/:id/:property
// Create a route for /comments/:id/:property/:index

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { id: 1, author: 'John', text: 'Great post!' },
  { id: 2, author: 'Jane', text: 'Nice post!' },
  { id: 3, author: 'Joe', text: 'I like the post!' }
];

