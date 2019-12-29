let ins = prompt('Please enter e-mail below: ', '');
let ins2;
let ins3;
let ins4;
let ins5;
let emU = 'user@gmail.com';
let emA = 'admin@gmail.com';
let pass = true;
let l_length_max = 5;
let p_length_max = 6;
if (ins === null) {
    alert('Canceled');
} else if (!ins) {
    document.write('test check');
} else if (ins.length < l_length_max) {
    alert("I don't know any emails having name length less than 5 symbols");
} else {
    if (ins === emU || ins === emA) {
        do {
            ins2 = prompt('Please enter password below: ', '');
            if (ins2 === null) {
                alert('Canceled');
                break;
            } else if (ins2 === 'UserPass' && ins === emU || ins2 === 'AdminPass' && ins === emA) {
                let changePassword = confirm('Do you want to change your password?');
                if (changePassword) {
                    do {
                        ins3 = prompt('Please enter old password: ', '');
                        if (ins3 === null) {
                            alert('Canceled');
                            break;
                        } else if (ins3.length < p_length_max) {
                            alert("It’s too short password. Sorry.");
                            continue;
                        } else if (ins3 === 'UserPass' && ins === emU || ins3 === 'AdminPass' && ins === emA) {
                            break;
                        }
                    } while (pass);
                    if (ins3 === 'UserPass' && ins === emU || ins3 === 'AdminPass' && ins === emA) {
                        do {
                            ins4 = prompt('Please insert new password: ', '');
                            if (ins4 === null) {
                                alert('Canceled');
                                break;
                            } else if (ins4.length < p_length_max) {
                                alert("It’s too short password. Sorry.");
                                continue;
                            } else if (ins4 === ins3) {
                                do {
                                    ins5 = prompt('Please re-insert new password: ', '');
                                    if (ins5 === null) {
                                        alert('Canceled');
                                        break;
                                    } else if (ins5.length < p_length_max) {
                                        alert("It’s too short password. Sorry.");
                                        continue;
                                    } else if (ins5 === ins4) {
                                        alert('You have successfully changed your password.');
                                        break;
                                    } else {
                                        alert('You wrote the wrong password.');
                                    }
                                } while (pass);
                                break;
                            } else {
                                alert('You wrote the wrong password.');
                            }
                        } while (pass);
                    }
                    break;
                } else {
                    alert('You have failed the change.');
                    break;
                }
            } else {
                alert('Wrong password');
                continue;
            }
        } while (pass);
    } else {
        alert('I don’t know you');
    }
}
