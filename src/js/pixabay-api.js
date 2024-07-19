import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios.defaults.baseURL = 'https://pixabay.com';

export function getPictures({ q = '', page = 1, pageSize = 15 } = {}) {
    return axios.get('api/', {
        params: {
            key: '44929764-df5ad93c9d917838a072df550',
            q,
            page,
            per_page: pageSize,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        },
    }).then(({ data }) => data);
}

