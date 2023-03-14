import './css/styles.css';

const DEBOUNCE_DELAY = 300;

// fetchCountries();

const test = fetch('https://restcountries.com/v3.1/name/deutschland')
  .then(response => {
    return response.json();
  })
  .then(contry => {
    console.log(contry);
  })
  .catch(error => {
    console.log(error);
  });
// -------------------------------------------------------
<div class="country">
  <div class="country-img">
    <img src="{{flags.svg}}" alt="{{name}}">
  </div>
  <div class="card">
    <h2 class="card-title">Имя: {{name.official}}</h2>
    <p class="card-text">Capital: {{capital}}</p>
    <p class="card-text">Population: {{population}}</p>
    <p class="card-text">Languages: {{languages }}</p>
  </div>
</div>