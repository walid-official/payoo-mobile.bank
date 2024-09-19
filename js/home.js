
const amountBox = document.getElementById('amount-box');


// Add Money Function
const addMoneyButton = document.getElementById('addBtn');
addMoneyButton.addEventListener('click', function(event){
    const amountInput = document.getElementById('amount-input');
    const amountAdd = document.getElementById('amountadd-pin');
    event.preventDefault();
   if(amountAdd.value === "6"){
        let addInputNumber = Number(amountInput.value);
        let amountBoxNumber = Number(amountBox.innerText);
        amountBox.innerText = addInputNumber + amountBoxNumber;
    }else{
    console.log("not okey");
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