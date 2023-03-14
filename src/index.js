import './css/styles.css';
import getRefs from './js/getRefs';
import contryCard from './templates/contry-card.hbs';

const refs = getRefs();

// refs.DEBOUNCE_DELAY

// fetchCountries();

const test = fetch(
  'https://restcountries.com/v3.1/all?fields=name/deutschland,capital,population,flags,languages '
)
  .then(response => {
    return response.json();
  })
  .then(contry => {
    // console.log(contry);
    const markup = contryCard(contry);
    console.log(markup);
  })
  .catch(error => {
    console.log(error);
  });
// -------------------------------------------------------
