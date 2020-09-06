
class emailChecker {
	constructor() {
		this.name = document.querySelector('.name').value ;
		this.phone = document.querySelector('.phone').value;
		this.email = document.querySelector('.email').value ;
		this.text = document.querySelector('.email-text').value ;
	}
	
	check(){
		document.querySelector('.email-text').innerText = checkText(this.text);
		if (!validateName(this.name)){
			document.querySelector('.name').style.borderColor = "red";
			alert('wrong name');
		} else {
			document.querySelector('.name').style.borderColor = "black";
		}
		if (!validatePhone(this.phone)){
			document.querySelector('.phone').style.borderColor = "red";
			alert('wrong phone number');
		}else {
			document.querySelector('.phone').style.borderColor = "black";
		}
		if (!validateEmail(this.email)){
			document.querySelector('.email').style.borderColor = "red";
			alert('wrong email format, should be mymail@mail.ru, my.mail@mail.ru, or my-mail@mail.ru');
		}else {
			document.querySelector('.email').style.borderColor = "black";
		}
		/*console.log(validateName(this.name));
		console.log(validatePhone(this.phone));
		console.log(validateEmail(this.email));*/
	}
}

const quotationMark = new RegExp("\'","g");
const dontMark = new RegExp('^t\\s','g');
const textOnly = new RegExp('^[a-zа-яё]+$','iu');
const phoneNumber = new RegExp('^\\+7\\([\\d]{3}\\)[\\d]{3}\\-[\\d]{4}$'); 
const emailCheck = /^[a-z]+[.-]?[a-z]+@mail\.ru$/i;

function checkText (text) {
	let array = text.split(quotationMark);
	
	for (let i=0;i<array.length-1;i++){
		if (array[i+1].match(dontMark)){
			console.log("m:" + array[i+1]);
			array[i] += '\'';
		} else {
			array[i] +='\"';
		}
	}
	text = array.join("");
	console.log(text);
	
	return text;
	
}

function validateName(name){
	console.log(name);
	if (name.match(textOnly)){
		return true;
	} else {
		return false;
	}
}
//+7(000)000-0000
function validatePhone(number){
	if (number.match(phoneNumber)){
		return true;
	} else {
		return false;
	}
}

function validateEmail(email){
	if (email.match(emailCheck)){
		return true;
	}
	return false;
}



function send(){
	const checker = new emailChecker();
	checker.check();
}




