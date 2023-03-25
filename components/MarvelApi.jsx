import axios from 'axios';

const PUBLIC_KEY = '8c6d08536cc225c4c8c72cebea5dc183';
const PRIVATE_KEY = 'ca226f098a48f09139366189d49d059172e1cf0b';

export function fetchMarvelData(endpoint) {
  const ts = 1;
  const hash = '17d998cb63c882338bde7ff79354cca0';

  const url = `https://gateway.marvel.com:443/v1/public/${endpoint}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  return axios.get(url)
    .then(response => response.data.data.results)
    .catch(error => console.log(error));
}
