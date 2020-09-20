const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Something goes wrong');
        return;
    }

    const obj = JSON.parse(data);
    obj.bar = 'baz';

    fs.writeFile('./data.json', JSON.stringify(), (err) => {
        if (err) {
            return;
        }
    });
});
