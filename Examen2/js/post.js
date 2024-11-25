let post = JSON.parse(localStorage.getItem("user"));

document.getElementById("userspan").textContent = post.user;
document.getElementById("description").textContent = post.description;

let user = document.getElementById("userspan");
user.addEventListener("click", () =>
{
    let a = {
        user: user.textContent
    }
    localStorage.setItem("user", JSON.stringify(a));
    window.location.href = "profile.html";
});