const express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());

app.get('/todo-list', (req, res) => {

    const todoList = [
        {title: 'Buy Milk', description: 'Remember to buy milk'},
        {title: 'Go to the gym', description: 'Remember to work out'}
    ];
    return res.json(todoList);
});

const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));