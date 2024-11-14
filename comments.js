// Create web server
// Create a RESTful API
// Create a web page to display the comments
// Create a web page to add a comment
// Create a web page to delete a comment
// Create a web page to edit a comment

// This code is based on the tutorial from:
// https://www.youtube.com/watch?v=2oK1R9Jj5Gw

// This is the code for the web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// This is the code for the RESTful API
const comments = [
    { name: 'John', comment: 'Hello World!' },
    { name: 'Jane', comment: 'Hi there!' }
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.json({ message: 'Comment added' });
});

app.delete('/comments/:id', function(req, res) {
    comments.splice(req.params.id, 1);
    res.json({ message: 'Comment deleted' });
});

app.put('/comments/:id', function(req, res) {
    comments[req.params.id] = req.body;
    res.json({ message: 'Comment updated' });
});