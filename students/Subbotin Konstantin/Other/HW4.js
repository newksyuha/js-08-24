//Придумать шаблон, который заменяет одинарные кавычки на двойные.
console.log(str.replace(/'/gm,"\""));

// Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
console.log(str.replace(/\B'\b|\b'\B|\B'\B/gm, "\""));