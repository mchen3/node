const express = require('express');
const app = express();


// Middleware 
app.use(( req, res, next) => {
  console.log('<h1> Hello </h1>');
  next();
})

app.get('/', (req,res) => {
  res.send("getting root");
});

app.get('/profile', (req,res) => {
  res.send("getting profile");
});

app.post('/profile', (req,res) => {
  const user = {
    name: 'Sally',
    hobby: 'Skating'
  }
  res.send(user);
});

app.listen(3000);