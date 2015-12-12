function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("You must enter a valid e-mail address");
        return false;
    }
}


var redirect = function() {
	window.location.replace("newtab.html");
}