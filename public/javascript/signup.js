// Signup Form
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // validation check for all filled forms to then post user
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

function signupLogin() {
  document.location.replace('/login');
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document.querySelector('#login').addEventListener('click', signupLogin);
