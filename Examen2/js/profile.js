let post = JSON.parse(localStorage.getItem("user"));

document.getElementById("userspan").textContent = post.user;
let names = document.querySelectorAll(".username");
names.forEach(name =>
{
    name.textContent = post.user;
});


let posts = document.querySelectorAll(".post");

posts.forEach(epost =>
{
    let userspan = epost.querySelector("span");
    let img = epost.querySelector("img");

    img.addEventListener("click", () =>
    {
        let a = {
            user: userspan.textContent,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, natus."
        }
        localStorage.setItem("user", JSON.stringify(a));
        window.location.href = "post.html";
    })
});