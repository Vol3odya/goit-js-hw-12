import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

export function gallery(arr, page=1) {
    let code = '';
    arr.forEach(elm => {
        code += `<li class="gallery-item">
            <a class="gallery-link" href="${elm.largeImageURL}">
                <img class="gallery-image" src="${elm.webformatURL}" alt="${elm.tags}"/>
            </a>
            <ul class="gallery-ul">
                <li class="gallery-li">
                    <h3 class="gallery-title">Likes</h3>
                    <p class="gallery-par">${elm.likes}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Views</h3>
                    <p class="gallery-par">${elm.views}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Comments</h3>
                    <p class="gallery-par">${elm.comments}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Downloads</h3>
                    <p class="gallery-par">${elm.downloads}</p>
                </li>
            </ul>
        </li>`;
    });
    const ul = document.querySelector('.gallery');
    ul.insertAdjacentHTML("beforeend", code);
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', captionsData: "alt" });
    if (page > 1) {
        const image = document.querySelector('.gallery-image');
        const y = 2 * image.getBoundingClientRect().height;
        window.scrollBy({
            top: y,
            left: 0,
            behavior: 'smooth'
        })
    }
}
export function zagruzka() {
    buttonRemove();
    const ul = document.querySelector('.div-js');
    ul.insertAdjacentHTML("afterbegin", '<div class="loader"></div>');
}
export function buttonShow() {
    const button = document.querySelector('.buttontwo');
    button.disabled = false;
    button.classList.remove('is-hidden');
}
function buttonRemove() {
    const button = document.querySelector('.buttontwo');
    button.disabled = false;
    button.classList.add('is-hidden');
}
export function deleteContent(elm) {
    const ul = document.querySelector(elm);
    ul.textContent = '';
    new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', captionsData: "alt" }).refresh();
}