const email = prompt('Input your email');
const inputLength = 6;
const validInputEmail = email !== '' && email !== null;
const userPassFirst = 'user@gmail.com';
const userPassSecond = 'admin@gmail.com';
let inputPass;
const userCorPassFirst = 'UserPass';
const userCorPassSecond = 'AdminPass';
const userEmailFst = email === userPassFirst;
const userEmailSec = email === userPassSecond;
let changePass;
let inputOldPass;
let newPass;
let newPassLength = 5;
let confirmPass;

if (!validInputEmail) {
    alert('Canceled');
} else if (email.length < inputLength) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === userPassFirst || email === userPassSecond) {
    inputPass = prompt('Enter your password');
    if (inputPass === '' || inputPass === null) {
        alert('Canceled');
    } else if (userEmailFst && inputPass === userCorPassFirst || userEmailSec && inputPass === userCorPassSecond) {
        changePass = confirm('Do you want to change your password?');
        if (changePass) {
            inputOldPass = prompt('Enter your old password');
            if (inputOldPass === userCorPassFirst || inputOldPass === userCorPassSecond) {
                newPass = prompt('Enter your new password');
                if (newPass.length < newPassLength) {
                    alert('It’s too short password. Sorry.');
                } else if (newPass) {
                    confirmPass = prompt('Enter your new password again');
                    if (newPass !== confirmPass) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else if (inputOldPass === '' || inputOldPass === null) {
                alert('Canceled');
            } else {
                alert('You enter wrong password. You have failed the change.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}