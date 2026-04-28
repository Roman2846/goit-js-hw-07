const inElems = document.querySelector('#name-input');
const outputElems = document.querySelector('#name-output');

inElems.addEventListener('input', e => {
  const value = e.currentTarget.value.trim();

  outputElems.textContent = value === '' ? 'Anonymous' : value;
});
