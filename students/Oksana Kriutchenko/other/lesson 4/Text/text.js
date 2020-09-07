'use strict'
function quotes(){
const textObject = document.getElementById('text');
let textString = textObject.innerHTML;
const regexp = new RegExp('\'', 'g'); 
regexp.test(textString); 
textObject.innerHTML = textString.replace(regexp, '\"');

let textString2 = textObject.innerHTML;
/* const regexp2 = new RegExp('(\w)"(\w)', 'g'); //вот так не работает */
const regexp2 = /(\w)"(\w)/g;  //вот так работает
regexp2.test(textString2);
textObject.innerHTML = textString2.replace(regexp2, `$1'$2`);
}
quotes();