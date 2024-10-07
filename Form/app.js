document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(`Tu nombre es "${nombre}" y tu email es "${email}" y tu mensaje es "${message}".`);
});
