document.querySelector('button').addEventListener('click', toCheck);

function toCheck(event)
{
    event.preventDefault();

    let input_name    = document.getElementById('fname');
    let input_phone   = document.getElementById('phone');
    let input_mail    = document.getElementById('mail');
    let input_error   = document.getElementById('error');
    let input_txt     = document.getElementById('txt');

    let name_test     = /^[a-zA-Zа-яА-Я\s]+$/g.test(input_name.value);
    let phone_test    = /^\+7\(?\d{3}\)?\d{3}\-?\d{4}$/g.test(input_phone.value);
    let mail_test     = /^[\w.-]+\@[A-Za-z]+\.(ru|com)+$/g.test(input_mail.value);

    if (!name_test)            error_marker(input_name,  input_error);
    if (!phone_test)           error_marker(input_phone, input_error);
    if (!mail_test)            error_marker(input_mail,  input_error); 
    if (input_txt.value == '') error_marker(input_txt,   input_error); 

    if (name_test && phone_test && mail_test) {
        input_error.innerText        = 'Valid data!';
        input_error.style.color      = 'green';
        input_error.style.visibility = 'visible';
    }
}

function error_marker(input, elem) 
{
    input.style.outline    = '2px red solid';    
    elem.style.visibility  = 'visible';

    input.focus();
    input.onblur = () => {
        elem.style.display  = "none";
        input.style.outline = 'none';
    }
}
