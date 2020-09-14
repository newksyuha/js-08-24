let text = document.querySelector('.div1').innerText;

console.log(text.replace(/\B\'|\'\B/gi, '"'));