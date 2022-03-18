const btn = document.getElementById('btn');
const email = document.getElementById('email');
const password = document.getElementById('password');

btn.addEventListener('click', () => {
    const emailValue = email.value;
    const passwordValue = password.value;

    window.electronAPI.setEmail(emailValue);
    window.electronAPI.setPassword(passwordValue);
})