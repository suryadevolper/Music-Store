function guitar() {
//    event.preventdefault();

    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
   
    if (mail === '' || pass === '') {
        let valid = document.getElementById('valid');
        let valid2 = document.getElementById('valid2');

        valid.style. display = 'block';
        valid2.style. display = 'block';
        mail.style.border = '2px solid red';
        pass.style.border = '2px solid red';
    }
    else{
        alert('Login Successfully')
    }


}


function handle() {
//    event.preventdefault();

    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
   
    if (mail === '' || pass === '') {
        let valid = document.getElementById('valid');
        let valid2 = document.getElementById('valid2');

        valid.style. display = 'block';
        valid2.style. display = 'block';
        mail.style.border = '2px solid red';
        pass.style.border = '2px solid red';
    }
    else{
        alert('Login Successfully')
    }
    

}


