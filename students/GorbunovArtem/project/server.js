const fs = require('fs');
const cors = require('cors');

const express = require('express');
const app = express();

app.use(express.static('./static'));
app.use(express.json());
app.use(cors());

app.get('/data', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile Error', err);
            response.status(500).send('Server Error');
            return;
        }

        const catalog = JSON.parse(data);

        response.json(catalog);
    });
});

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('readFile Error', err);
            response.status(500).send('Server Error');
            return;
        }

        const cart = JSON.parse(data);

        response.json(cart);
    });
});

app.post('/addToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Something goes wrong');
            return;
        }

        const cart = JSON.parse(data);
        cart.push(request.body);

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            response.send('OK');
        });
        /*stats.json */
        const stats= {
            action: 'add',
            itemName: cart[2],
            actionDate: new Date().toLocaleString(),
          };

        fs.writeFile('./stats.json', JSON.stringify(stats), (err) => {
            if (err) {
                return;
            }
            response.send('OK');
        });
    });
});
/*Удаление из корзины*/
app.post('/deleteFromCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Something goes wrong');
            return;
        }
      const cart = request.body;
      fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
        if (err) {
            return;
        }
        response.send('OK');
      });
/*stats.json */
      const stats= {
        action: 'remove',
        itemName: cart[2],
        actionDate: new Date().toLocaleString(),
      };

    fs.writeFile('./stats.json', JSON.stringify(stats), (err) => {
        if (err) {
            return;
        }
        response.send('OK');
    });
    });
  });
/* */
app.listen(8080, () => {
    console.log('Server is listening port 8080');
});
