'use strict';

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

    userspan.addEventListener("click", () =>
    {
        let a = {
            user: userspan.textContent
        }
        localStorage.setItem("user", JSON.stringify(a));
        window.location.href = "profile.html";
    })
});