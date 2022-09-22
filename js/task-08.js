const submitEl = document.querySelector('.login-form');

submitEl.addEventListener('submit', onSubmitClick);


function onSubmitClick(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

       if (email.value === '' ||  password.value === ''){
      alert('Bсі поля повинні бути заповнені!');
    }
    
      console.log(`email: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
}

