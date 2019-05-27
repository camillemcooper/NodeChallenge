const axios = require("axios");

const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

const books = {
  "Don Quixote": "Miguel de Cervantes",
  Ulysses: "James Joyce",
  "The Great Gatsby": "F. Scott Fitzgerald",
  "Moby Dick": "Herman Melville"
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//returns list of books
app.get("/getBooks", (req, res) => {
  books;
  res.json(books);
  console.log("Sent list of items");
});

// create a GET route
app.get("/getBooks/:title", (req, res) => {
  let url = "http://openlibrary.org/search.json?title=" + req.params.title;
  axios.get(url).then(response => {
    let author = response.data.docs[0].author_name[0].toString();
    console.log(author);
    res.send(author);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
