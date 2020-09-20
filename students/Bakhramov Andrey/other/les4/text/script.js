function changetext () {
 document.getElementById("cap").innerHTML = document.getElementById("cap").innerHTML.replace( /\s\'([a-zA-Z0-9\W]*?)\'\s/g,' "$1" ');
}