document.getElementById('contactForm').addEventListener('submit', (e) =>
{
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(`Tu nombre es "${nombre}" y tu email es "${email}" y tu mensaje es "${message}".`);
});

const mip = document.getElementById('info');
const textmip = mip.textContent;
document.getElementById('btn').addEventListener('click', (e) =>
{

    if (mip.textContent == textmip)
    {
        mip.innerText = "123-456-7890";
    }
    else
    {
        mip.innerHTML = "000-000-0000";
    }

});