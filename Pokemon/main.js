import json from "./pokemon.json" with {type: "json"}
const pklist = document.querySelector("#pklist");
const pkdata = document.querySelector("#pkdata");
const btnfilter = document.querySelector("#btnfilter");
const searchInput = document.querySelector("#searchInput");

const pkname = document.querySelector("#pkname");
const pkimg = document.querySelector("#pkimg");
const pkhp = document.querySelector("#pkhp");
const pkhpbar = document.querySelector("#pkhpbar");
const pktype = document.querySelector("#pktype");
const pklevel = document.querySelector("#pklevel");
const pkattack = document.querySelector("#pkattack");

pkimg.addEventListener("click", () =>
{
    console.log(json[pkname.innerHTML]);
})

searchInput.addEventListener("keypress", () =>
{
    if (event.key === "Enter")
    {
        btnfilter.click();
    }
})

btnfilter.addEventListener("click", () =>
{
    console.log(searchInput.value);
    changePk2(searchInput.value);
})

for (const pk in json)
{
    let handleChange = new changePk(pk);
    let li = document.createElement("li");
    let h3 = document.createElement("h4");
    h3.innerHTML = pk;
    h3.addEventListener("click", handleChange);
    pklist.appendChild(li);
    li.appendChild(h3);

    let option = document.createElement("option");
    option.value = pk;
    option.textContent = pk;
    pkdata.appendChild(option);
}

function changePk(name)
{
    this.name = name;
    this.handleEvent = () =>
    {
        changePk2(name);
    }
}

function changePk2(name)
{
    pkname.innerHTML = name;
    pkhp.innerHTML = json[pkname.innerHTML].HP;
    pkhpbar.value = json[pkname.innerHTML].HP / 100;
    pktype.innerHTML = json[pkname.innerHTML].Tipo;
    pklevel.innerHTML = json[pkname.innerHTML].Nivel;
    pkattack.innerHTML = json[pkname.innerHTML].Ataque;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) =>
        {
            pkimg.src = data.sprites.front_default;
        });
}

changePk2("Pikachu");
