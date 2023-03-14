import './css/styles.css';
import getRefs from './js/getRefs';

const refs = getRefs();

// refs.DEBOUNCE_DELAY

// fetchCountries();

const test = fetch(
  'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages '
)
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
