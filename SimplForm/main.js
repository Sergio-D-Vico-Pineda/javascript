let btnSub = document.getElementById("submit");

btnSub.addEventListener("click", (e) =>
{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let news = document.getElementById("news");
    let terms = document.getElementById("terms");
    let privacy = document.getElementById("privacy");

    let txtname = document.getElementById("txtname");
    let txtemail = document.getElementById("txtemail");
    let txtnews = document.getElementById("txtnews");
    let txtterms = document.getElementById("txtterms");
    let txtprivacy = document.getElementById("txtprivacy");

    txtname.textContent = name.value;
    txtemail.textContent = email.value;
    txtnews.textContent = news.checked == true ? "Yes" : "No";
    txtterms.textContent = terms.checked == true ? "Yes" : "No";
    txtprivacy.textContent = privacy.checked == true ? "Yes" : "No";


    document.getElementById("text").classList.remove("hid");
});