const express = require('express');
const app = express();

app.use(express.static('./static'));

app.get('/', (request, response) => {
    console.log('[GET] home route');
    response.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Server is listening port 3000');
});
