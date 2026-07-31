let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function generatepassword(len) {
    const alphabet = "abcdefghijklmnopqrstvwxyz";
    const upperalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = '123456789';
    const symbol = "!@#$%^&*()_+=-{}[]';:?/.,><`~";
    const data = alphabet + upperalphabet + numeric + symbol;

    let generator = "";
   for(let index = 0 ; index < len; index++) {
    generator += data[~~(Math.random()  * data.length)];
   }
    return generator;
}
function getpassword () {
const newPassword = generatepassword(passwordLength.value);
password.value = newPassword;
alert('password has been already generate');
}