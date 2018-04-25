var newForm = document.createElement('form');
newForm.setAttribute("name", "login");
newForm.setAttribute("action", "google.com");

var newInputAge = document.createElement('input');
newInputAge.setAttribute("type", "text");
newInputAge.setAttribute("name", "age");
newInputAge.setAttribute("placeholder", "Age");

var newInputUsername = document.createElement('input');
newInputUsername.setAttribute("type", "text");
newInputUsername.setAttribute("name", "username");
newInputUsername.setAttribute("placeholder", "Username (user_***)");

var newInputDate = document.createElement('input');
newInputDate.setAttribute("type", "text");
newInputDate.setAttribute("name", "date");
newInputDate.setAttribute("placeholder", "Date (dd/mm/yyyy)");

var newInputSubmit = document.createElement('input');
newInputSubmit.setAttribute("type", "submit");
newInputSubmit.setAttribute("value", "Validate Me");


document.body.appendChild(newForm);
newForm.appendChild(newInputAge);
newForm.appendChild(newInputUsername);
newForm.appendChild(newInputDate);
newForm.appendChild(newInputSubmit);

function valid(e) {
    e.preventDefault();

    var nameVal = document.getElementsByTagName("form")[0].elements.namedItem("username").value;
    var ageVal = document.getElementsByTagName("form")[0].elements.namedItem("age").value;
    var dateVal = document.getElementsByTagName("form")[0].elements.namedItem("date").value;

    var regexName = /^user_/g;
    var regexAge = /\d/g;
    var regexDate = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d/g;

    if(!regexName.test(nameVal))
        alert ('your name is invalid');

    if(!regexAge.test(ageVal))
        alert ('your age is invalid');

    if(!regexDate.test(dateVal))
        alert ('your date is invalid');
    else alert ('All are valid');
}

document.getElementsByTagName('form')[0].addEventListener('submit', valid);