// callback
/*
let a = 0;

const get = (value, callback) => {
    setTimeout(() => {
        value++;
        console.log('1st', value);
        callback();
    }, 100);
};

const get2 = (value, callback) => {
    setTimeout(() => {
        value++;
        value++;
        console.log('2nd', value);
        callback();
    }, 200);
};

get(a, () => {
    console.log('1st callback');
    get2(a, () => {
        console.log('2nd callback');
    });
});
*/

// Promise

/*
const promise = new Promise((resolve, reject) => {
    // pending

    // fulfilled
    // setTimeout(() => {
    //     resolve(12345);
    // }, 1000);

    // rejected
    setTimeout(() => {
        reject(12345);
    }, 1000);
});

promise
    .then((res) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(54321), 1000);
        });
    })
    .then((res) => {
        console.log('2nd promise resolved', res);
    })
    .catch(() => {
        console.log('Some error');
    });

*/

// AJAX
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const xhr = new XMLHttpRequest;

xhr.onreadystatechange = () => {
    console.log('state changed');
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET', `${API}/catalogData.json`, true);

xhr.send();


/*
fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
    .then((res) => res.json())
    .then((res) => console.log(res));
*/

// 'POST', 'google.com/create', '{ "foo": "bar" }'

// 'GET', 'google.com/show?page=3&sort=popularity'
