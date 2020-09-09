function valid() {
        let mess = '';
        event.preventDefault();

        let item = document.getElementById('name');
        if (/(\W|\d)/g.test(item.value)) {
            item.style.color = '#ff0000';
            mess += ' Name'
        } else {
            item.style.color = '#000';
        }
           
        item = document.getElementById('tlf');
        if (!/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g.test(item.value)) {
            item.style.color = '#ff0000';
            mess += ' Phone number';
        } else {
            item.style.color = '#000';
        }
     
        item = document.getElementById('mail');
        if (!/^[a-zA-Z0-9]*(\.|-)?[a-zA-Z0-9]*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/g.test(item.value)) {
            item.style.color = '#ff0000';
            mess += ' Email address';
        } else {
            item.style.color = '#000';
        }
    
        if (mess != '') {
            alert('Error: ' + mess);
        }
}