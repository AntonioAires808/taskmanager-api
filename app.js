const express = require('express');
const app = express;

app.get('/', (request, response) => {
    response.send("Hello app");

    
})

app.post('/lists', (request, response) => {
    response.send("Hello app");

    
})

app.patch('/lists/:id', (request, response) => {
    response.send("Hello app");

    
})

app.delete('/lists/:id', (request, response) => {
    response.send("Hello app");
    
    
})

app.listen(3000, () => {
    console.log('Listening port 3000');
})