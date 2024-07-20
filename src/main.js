import { zagruzka } from "./js/render-functions";
import { buttonShow } from "./js/render-functions";
import { deleteContent } from "./js/render-functions";
import { gallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getPictures } from "./js/pixabay-api";

const params = {
    q: '',
    page: 1,
    pageSize: 15,
    maxPage: 0,
};
const form = document.querySelector('form');
form.addEventListener('submit', submit);
function submit(evt) {
    evt.preventDefault();

    deleteContent('.gallery');
    if (evt.target.elements.text.value.trim() === '') {
        iziToast.show({
            color: '#ef4040',
            position: 'topRight',
            title: 'Error',
            message: 'Sorry, please enter the correct value!'
        })
        return;
    }
    zagruzka();
    params.q = evt.target.elements.text.value.trim();
    params.page = 1;
    try {
        masPictures(params).then((res) => { gallery(res, params.page) }).catch((err) => {
            deleteContent('.div-js');
            iziToast.show({
                color: '#ef4040',
                position: 'topRight',
                title: 'Error',
                message: err.message
            })
        });
    } catch (err) {
        iziToast.show({
            color: '#ef4040',
            position: 'topRight',
            title: 'Error',
            message: err.message
        })
    }
}
const buttonClick = document.querySelector('.buttontwo');
buttonClick.disabled = true;
buttonClick.addEventListener('click', click);
function click() {
    zagruzka();
    params.page += 1;
     try {
         masPictures(params).then((res) => { gallery(res, params.page) }).catch((err) => {
            deleteContent('.div-js');
            iziToast.show({
                color: '#ef4040',
                position: 'topRight',
                title: 'Error',
                message: err.message
            })
         });
    } catch (err) {
        iziToast.show({
            color: '#ef4040',
            position: 'topRight',
            title: 'Error',
            message: err.message
        })
    }
    if (params.page+1 > params.maxPage) {
        iziToast.show({
            color: 'blue',
            position: 'topRight',
            title: 'OK',
            message: "We're sorry, but you've reached the end of search results."
        })
    }
}
async function masPictures(search) {
    const data = await getPictures(search);
    if (data.total===0) {
        throw new Error('No images found');
    }
    const arr = data.hits.map((rez) => {
        const qaz = { webformatURL: rez.webformatURL, largeImageURL: rez.largeImageURL, tags: rez.tags, likes: rez.likes, views: rez.views, comments: rez.comments, downloads: rez.downloads, };
        return qaz;
    });
    params.maxPage = Math.ceil(data.totalHits / params.pageSize);
    deleteContent('.div-js');
    if (params.page < params.maxPage) {
        buttonShow(); 
    }
    return arr;
}