var firstVisit = function() {
	if (!localStorage.getItem("visited")) {
      //If never been to the page before, send to first login page
        window.location = "firstlogin.html";
      //Set the key
        localStorage.setItem("visited", "true");
      }
}

firstVisit();