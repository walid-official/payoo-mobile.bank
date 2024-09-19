const amountInput = document.getElementById('amount-input');
const amountAdd = document.getElementById('amountadd-pin');
const addMoneyButton = document.getElementById('addBtn');

addMoneyButton.addEventListener('click', function(event){
    event.preventDefault();
    let amountInputValue = Number(amountInput.value);
    let amountAddValue = Number(amountAdd.value);
    if(amountInputValue == "11" || amountAddValue == "4"){
        
        
    }else{
        alert('Invalid Input');
    }
})
// Page Changing 
const addMoney = document.getElementById('addMoneyBtn'); 
const cashOut = document.getElementById('cashOutBtn'); 
const containerAdd = document.getElementById('container-add-money');
const containerCash = document.getElementById('container-cash-out');

addMoney.addEventListener('click', function(){  
    containerAdd.classList.remove('hidden');
    containerCash.classList.add('hidden');
});

cashOut.addEventListener('click', function(){
    containerAdd.classList.add('hidden');
    containerCash.classList.remove('hidden');
})