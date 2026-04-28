const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = formElem.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const values = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(values);

  formElem.reset();
});
