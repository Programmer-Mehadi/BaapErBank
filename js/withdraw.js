document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get new Withdraw amount
    const newWithdraw = document.getElementById('withdraw-input')
    const newWithdrawAmount = parseFloat(newWithdraw.value)
    // get current balance 
    const previousBalance = document.getElementById('balance-total')
    const previousBalanceAmount = parseFloat(previousBalance.innerText)
    if(Number.isNaN(newWithdraw.value) === true || newWithdrawAmount
        < 0) {
            alert('Wrong Input...!!!')
    }
   else if (previousBalanceAmount >= newWithdrawAmount ) {
        // get previous total Withdraw

        const previousWithdraw = document.getElementById('withdraw-total')
        const previousWithdrawAmount = parseFloat(previousWithdraw.innerText)

        // update Withdraw value 
        const updateTotalWithdraw = previousWithdrawAmount + newWithdrawAmount
        // set Withdraw
        previousWithdraw.innerText = updateTotalWithdraw
        // update balance 
        previousBalance.innerText = previousBalanceAmount - newWithdrawAmount
    }
    else {
        alert('Not enough balance, Please deposite...!!!')

    }
    // set withdraw input empty
    newWithdraw.value = ''

})