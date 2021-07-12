// //function logValue(id) {
//     var el = document.getElementById(id);
//     console.log(el.value);
// }

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}
var firstNameId = 'first-name';
var lastNameId = 'lest-name';

//logValue(firstNameId);
//logValue(lastNameId);
//logValue(id);

getValue(firstNameId);

var value = getValue(firstNameId);
window.alert(value);