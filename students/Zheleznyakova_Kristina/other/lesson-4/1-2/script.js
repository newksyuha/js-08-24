const txt   = `He didn't blame her – if he'd had a sister like that … 
but 'all the same', those people in cloaks …
He found it a lot harder to concentrate on drills that afternoon, and when he left 
the building at five o'clock, he was still so worried that he walked straight into someone just outside the door.
'Sorry,' he grunted, as the tiny old man stumbled and almost fell. He didn't seem at all upset at being almost knocked to the ground. 
On the contrary, his face split into a wide smile and he said in a squeaky voice that made passers-by stare: 
'Don't be sorry, my dear sir, for nothing could upset me today!'`;

/* задание 1
const regexp = /'/g; 

console.log(txt.replace(regexp, `"`)); 
*/

// задание 2
const new_txt = txt.replace(/(?<=\w)'(?=\w)/g, '---').replace(/'/g, '"').replace(/---/g, `'`);

console.log(new_txt);
