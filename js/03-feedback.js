let throttle = require('lodash.throttle');

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const check = () => {
  if (localStorage.getItem('feedback-form-state') !== '') {
    email.value = localStorage.getItem('email');
    message.value = localStorage.getItem('message');
  }
};
check()

const sendSubmit = event => {
  event.preventDefault();
  const data = {
    email: email.value,
    message: message.value,
  };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
    console.log(data);
    localStorage.clear();
    email.value = '';
    message.value = '';
};

email.addEventListener('input', throttle(event => {
    event.value = localStorage.setItem('email', email.value);
  }, 500),
);
message.addEventListener('input', throttle(event => {
    event.value = localStorage.setItem('message', message.value);
  }, 500),
);

document.querySelector('button[type="submit"]').addEventListener('click', sendSubmit);
