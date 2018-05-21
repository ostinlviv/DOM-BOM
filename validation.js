const elFactory = (type, attributes) => {
    const el = document.createElement(type);
    for (let key in attributes) {
        el.setAttribute(key, attributes[key])
    }
    return el
};

const newForm = elFactory('form', {name: 'login', action: 'google.com'});
const newInputAge = elFactory('input', {type: 'text', name: 'age', placeholder: 'Age'});
const newInputUsername = elFactory('input', {type: 'text', name: 'username', placeholder: 'Username (user_***)'});
const newInputDate = elFactory('input', {type: 'text', name: 'date', placeholder: 'Date (dd/mm/yyyy)'});
const newInputSubmit = elFactory('input', {type: 'submit', value: 'Validate Me'});

document.body.appendChild(newForm);
newForm.appendChild(newInputAge);
newForm.appendChild(newInputUsername);
newForm.appendChild(newInputDate);
newForm.appendChild(newInputSubmit);

function valid(e) {
    e.preventDefault();

    const nameVal = document.getElementsByTagName("form")[0].elements.namedItem("username").value;
    const ageVal = document.getElementsByTagName("form")[0].elements.namedItem("age").value;
    const dateVal = document.getElementsByTagName("form")[0].elements.namedItem("date").value;

    const regexName = /^user_/g;
    const regexAge = /^[0-9]\d*$/g;

    const date = new Date();
    const currentDate = date.getDate() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

    if(!regexName.test(nameVal))
        alert ('your name is invalid');

    else if(!regexAge.test(ageVal))
        alert ('your age is invalid');

    else if(currentDate !== dateVal)
        alert ('your date is invalid');
    else alert ('All are valid');
}

document.getElementsByTagName('form')[0].addEventListener('submit', valid);
