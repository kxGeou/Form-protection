let result = document.querySelector(".result");
let registerForm = document.querySelector("form");
let inputs = document.querySelectorAll(".formControl");
let submitBtn = document.querySelector("button");
let statute = document.querySelectorAll(".statuteCheck");
let showPass = document.querySelector('.showPass');

const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const passwordR = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
const emailR = /^\S+@\S+\.\S+$/;


registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = inputs[0].value;
    let surname = inputs[1].value;
    let email = inputs[2].value;
    let password = inputs[3].value;
    let repassword = inputs[4].value;    



    const error = (innerText, x, y) => {
        result.innerHTML = innerText;
        inputs[x].classList.add("formControlWrong");
        inputs[y].classList.add("formControlWrong");
    }
    const errorAll = () => {
        result.innerHTML = "Musisz wypełnić wszystkie pole formularza";
        inputs.forEach(input => {
            input.classList.add("formControlWrong");
        })
    }
    const clearAllStyles = () => {
        inputs.forEach(input => {
            input.classList.remove("formControlWrong");
        })
    }
    const correctData = (x,y,z) => {
        statute[x].style.color = "#45ff48";
        statute[y].style.color = "#45ff48";
        statute[z].style.color = "#45ff48";
    }
    const successData = () => {
        clearAllStyles();
        result.innerHTML = `Cześć ${username} ${surname} twój email to ${email} a hasło to ${password}`;
        statute.forEach(statutes => {
            statutes.style.color = '#45ff48';
        })
        inputs.forEach((input) => {
            input.value = "";
        });
    }


    if (username == "" ||surname == "" ||email == "" ||password == "" ||repassword == "") {
        errorAll();

    } else if (username.match(numbers) ||username.match(special) ||surname.match(numbers) ||surname.match(special)) {
        clearAllStyles();
        error('Imie lub Nazwisko zostało źle wypełnione', 1, 0);

    } else if (!email.match(emailR)) {
        clearAllStyles();
        error('Email został źle wypełniony', 2);
        correctData(0)

    } else if (!password.match(passwordR)) {
        clearAllStyles();
        error('Hasło jest źle stworzone',3);
        correctData(0,1)

    } else if (password !== repassword) {
        clearAllStyles();   
        error('Hasła muszą być identyczne', 3,4);
        correctData(0,1,2);

    } else {
        successData()
    }
});

const passShow = () => {
    inputs[3].type = 'text';
    inputs[4].type = 'text';
    showPass.classList.remove('fa-eye-slash')
    showPass.classList.add('fa-eye')
    console.log("pokazane")
}
const passHidden = () => {
    inputs[3].type = 'password';
    inputs[4].type = 'password';
    showPass.classList.add('fa-eye-slash')
    showPass.classList.remove('fa-eye')
    console.log("nie pokazane")
}

showPass.addEventListener('mousedown', passShow);
showPass.addEventListener('mouseup', passHidden);
