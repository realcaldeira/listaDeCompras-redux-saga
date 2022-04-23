import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: process.env.REACT_APP_GOOGLE_KEY,
      cx: process.env.REACT_APP_GOOGLE_CX,
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product
    }
    return axios.get('https://www.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err => err);
  }
}