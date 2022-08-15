document.getElementById('button-submit').addEventListener('click', function () {
    console.log('clicked')
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    console.log(email, password)
    
    if (email === 'admin@gmail.com' && password === '1234') {
         window.location.href='bank.html'
    }
    else {
        alert('Please enter valid email and password..!!')
    }
})