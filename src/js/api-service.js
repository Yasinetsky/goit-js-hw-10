const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchCountries(contryName) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json()
  );
}

export default { fetchCountries };
