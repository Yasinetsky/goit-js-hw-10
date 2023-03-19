import { debounce } from 'debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const refs = {
  DEBOUNCE_DELAY: 300,
  inputFind: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),

  manyMessage: 'Too many matches found. Please enter a more specific name.',
  opsMessage: 'Oops, there is no country with that name, buy the globe',
  foundContry: 'We found country',
  emptyName: 'Empty field, input country name',
};

refs.inputFind.addEventListener(
  'input',
  debounce(onInputCountry, refs.DEBOUNCE_DELAY)
);

function onInputCountry() {
  clear();
  const countryFindName = refs.inputFind.value;
  if (countryFindName.trim() === '') {
    makeMessage('failure', refs.emptyName);
    return;
  }

  fetchCountries(countryFindName)
    .then(countries => {
      if (countries.length === 1) {
        countryCardTemplate(countries);
        makeMessage('success', refs.foundContry);
        return;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        markupCountryList(countries);
        makeMessage('success', `Founded ${countries.length} countries!!!`);
        return;
      }
      makeMessage('warning', refs.manyMessage);
    })
    .catch(error => {
      makeMessage('failure', refs.opsMessage);
    });
}

function markupCountryList(countries) {
  const markup = countries
    .map(({ name: { official }, flags: { svg } }) => {
      return `<li class="list-item">
            <p class='list-position'>
            <img src=${svg} width=30px alt=${official} class="list-flag">
            ${official}</p>
        </li>`;
    })
    .join('');
  refs.countryList.innerHTML = markup;
}

function countryCardTemplate(country) {
  const markup = country
    .map(
      ({
        flags: { svg },
        name: { official },
        capital,
        population,
        languages,
      }) => {
        return `<li class="card-item">
            <p class="card-position">
            <img src=${svg} width=200px alt=flag class="card-flag"><br>
            ${official}</p>
            <p class="card-cap">Capital: ${capital}</p>
            <p class="card-other">population: ${population}</p>
            <p class="card-other">languages: ${Object.values(languages)}</p>
        </li>`;
      }
    )
    .join('');
  refs.countryInfo.innerHTML = markup;
}

function clear() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function makeMessage(type, message) {
  Notiflix.Notify[type](message);
}
