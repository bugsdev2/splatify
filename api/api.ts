import axios from 'axios';

const url = 'https://jiosaavn-api-obviously-cloned.vercel.app/';

export async function getAllResults(query: string) {
  let searchQuery = query.replaceAll(' ', '+');

  try {
    let res = await axios.get(`${url}/api/search?query=${searchQuery}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
