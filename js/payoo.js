const inputPhone = document.getElementById('input-phone');
const inputPassword = document.getElementById('input-password');
const loginButton = document.getElementById('loginBtn');

loginButton.addEventListener('click', function(event){
    event.preventDefault();
    let inputValue = Number(inputPhone.value);
    let inputPassValue = Number(inputPassword.value);
    if(inputPhone.value == "11" || inputPassword.value == "4"){
        console.log("Okkk you Have done");
        window.location.href = './home.html';
        
    }else{
        alert('Invalid Input')
    }
})