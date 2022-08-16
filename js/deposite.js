document.getElementById('deposite-btn').addEventListener('click', function () {
    // get new deposite amount
    const newDeposite = document.getElementById('deposite-input')
    const newDepositeAmount = parseFloat(newDeposite.value)
    if (Number.isNaN(newDeposite.value) === false && newDepositeAmount
        > 0) {
        // get previous total deposite

        const previousDeposite = document.getElementById('deposite-total')
        const previousDepositeAmount = parseFloat(previousDeposite.innerText)

        // update deposite value 
        const updateTotalDeposite = previousDepositeAmount + newDepositeAmount
        // set deposite
        previousDeposite.innerText = updateTotalDeposite
        // get and update balance
        const previousBalance = document.getElementById('balance-total')
        const previousBalanceAmount = parseFloat(previousBalance.innerText)
        previousBalance.innerText = previousBalanceAmount + newDepositeAmount
    }

    // set deposite input empty
    newDeposite.value = ''
})