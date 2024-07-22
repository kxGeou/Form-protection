let result = document.querySelector(".result");
let registerForm = document.querySelector("form");
let inputs = document.querySelectorAll(".formControl");
let submitBtn = document.querySelector("button");
let statute = document.querySelectorAll(".statuteCheck");

const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const passwordR = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
const emailR = /^\S+@\S+\.\S+$/;


registerForm.addEventListener("submit", function (e) {
    e.preventDefault();


    const successData = () => {
        result.innerHTML = `Cześć ${username} ${surname} twój email to ${email} a hasło to ${password}`;
        statute.forEach(statutes => {
            statutes.style.color = '#45ff48';
        })
    }

    let username = inputs[0].value;
    let surname = inputs[1].value;
    let email = inputs[2].value;
    let password = inputs[3].value;
    let repassword = inputs[4].value;    

    if (username == "" ||surname == "" ||email == "" ||password == "" ||repassword == "") {
        result.innerHTML = "Musisz wypełnić wszystkie pole formularza";

    } else if (username.match(numbers) ||username.match(special) ||surname.match(numbers) ||surname.match(special)) {

        result.innerHTML = "Imie lub Nazwisko zostało źle wypełnione";
        inputs[1].classList.add("formControlWrong");
        inputs[0].classList.add("formControlWrong");

    } else if (!email.match(emailR)) {
        result.innerHTML = "Email został źle wypełniony";
        inputs[1].classList.remove("formControlWrong");
        inputs[0].classList.remove("formControlWrong");
        inputs[2].classList.add("formControlWrong");
        statute[0].style.color = "#45ff48";

    } else if (!password.match(passwordR)) {
        inputs[2].classList.remove("formControlWrong");
        inputs[3].classList.add("formControlWrong");
        statute[0].style.color = "#45ff48";
        statute[1].style.color = "#45ff48";
        result.innerHTML = "Hasło jest źle stworzone";

    } else if (password !== repassword) {
        inputs[3].classList.remove("formControlWrong");
        result.innerHTML = "Hasła muszą być identyczne";
        statute[0].style.color = "#45ff48";
        statute[1].style.color = "#45ff48";
        statute[2].style.color = "#45ff48";

    } else {
        successData()
        inputs.forEach((input) => {
            input.value = "";
        });
    }




});



/* ZADANIA NA JUTRO 
    - Stworzenie przełącznika na hasło 
    - Wyświetlenie komunikatu sukces z ludzikiem
    - Nadanie wiekszej logiki
*/
