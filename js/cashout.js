// Cash Out Function
const amountCashBox = document.getElementById('amount-box');
const cashOutButton = document.getElementById('cashBtn');
cashOutButton.addEventListener('click', function(event){
    const cashInput = document.getElementById('cash-input');
    const cashAmountPin = document.getElementById('cash-pin');

    event.preventDefault();
   if(cashAmountPin.value === "6"){
        let cashInputNumber = Number(cashInput.value);
        let amountBoxNumber = Number(amountCashBox.innerText);
        amountCashBox.innerText = amountBoxNumber - cashInputNumber
    }else{
    console.log("not okey");
   }
})