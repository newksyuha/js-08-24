const fs = require('fs');
const cors = require('cors');

const express = require('express');
const app = express();

function writeCartLog(operationType, requestItem) {
    fs.readFile('./stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }

        const cartLog = JSON.parse(data);
        cartLog.push({
            action: operationType,
            item: requestItem.name,
            time: new Date
        })
        fs.writeFile('./stats.json', JSON.stringify(cartLog), (err) => {
            if (err) {
                return;
            }
        })
    })
}

app.use(express.static('./static'));
app.use(express.json());
app.use(cors());

app.get('/data', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }

        const catalog = JSON.parse(data);

        response.json(catalog);
        return;
    })
});

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }

        const cart = JSON.parse(data);

        response.json(cart);
        return;
    })
});

app.post('/addToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }

        const cart = JSON.parse(data);
        cart.items.push(request.body);

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            writeCartLog('added', request.body.item)
            response.send('OK');
        });
    })
});

app.post('/removeFromCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }
        const cart = JSON.parse(data);
        const itemToDelete = cart.items.filter(({ item }) => item.id == request.body.removedId)[0];
        cart.items = cart.items.filter(({ item }) => item.id !== request.body.removedId);
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            writeCartLog('removed', itemToDelete.item)
            response.send('OK');
        });
    })
});

app.post('/changeAmountInCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile error', err);
            response.status(500).send('Server Error');
            return;
        }
        const cart = JSON.parse(data);
        const itemToChange = cart.items.filter(({ item }) => item.id == request.body.changeId)[0]
        itemToChange.count = request.body.newCount;
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            writeCartLog('changed count', itemToChange.item)
            response.send('OK');
        });
    })
});

app.listen(3000, () => {
    console.log('Server is listening port 3000');
});