const submitEl = document.querySelector('.login-form');

submitEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  const { elements: { email, password }}
    = event.currentTarget;
    const input = {
    email: email.value,
    password: password.value,
  };
       if (email.value === '' ||  password.value === ''){
      alert('Bсі поля повинні бути заповнені!');
    }
  event.currentTarget.reset();

  console.log(input);
}

