const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use((bodyParser.urlencoded({extended: false})));
app.use(bodyParser.json());

app.get('/:id', (req,res) => {

  //console.log(req.query);
  //console.log(req.body);
  // console.log(req.headers);
 console.log(req.params);

  res.status(404).send("Not found");
});

app.listen(3000);