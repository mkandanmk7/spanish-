let spanishRegion = fetch("https://restcountries.eu/rest/v2/lang/es")
  .then((data) => data.json())
  .then((data) => data.filter((country) => country.region == "Europe"))
  .then((data) => createFlag(data));
// .then(data=> console.log(data))

div = document.createElement("div");
div.className = "outer";
document.body.append(div);

function createFlag(a) {
  a.forEach((b) => {
    div.innerHTML += `
<div class=container>
<img src=${b.flag}>
  <h3>${b.name}</h3>
  <p><b>Region</b>:${b.region}</p>
  <p><b>Capital</b>:${b.capital}</p>
  <p><b>Population</b>:${b.population}</p>
  </div>`;
  });
}
