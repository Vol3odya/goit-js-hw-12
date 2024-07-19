import{S as u,i}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();function g(e,o=1){let l="";if(e.forEach(t=>{l+=`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="gallery-ul">
                <li class="gallery-li">
                    <h3 class="gallery-title">Likes</h3>
                    <p class="gallery-par">${t.likes}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Views</h3>
                    <p class="gallery-par">${t.views}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Comments</h3>
                    <p class="gallery-par">${t.comments}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Downloads</h3>
                    <p class="gallery-par">${t.downloads}</p>
                </li>
            </ul>
        </li>`}),document.querySelector(".gallery").insertAdjacentHTML("beforeend",l),new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),o>1){const a=2*document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:a,left:0,behavior:"smooth"})}}function d(){h(),document.querySelector(".div-js").insertAdjacentHTML("afterbegin",'<div class="loader"></div>')}function p(){const e=document.querySelector(".buttontwo");e.disabled=!1,e.classList.remove("is-hidden")}function h(){const e=document.querySelector(".buttontwo");e.disabled=!1,e.classList.add("is-hidden")}function n(e){const o=document.querySelector(e);o.textContent="",new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}axios.defaults.baseURL="https://pixabay.com";function y({q:e="",page:o=1,pageSize:l=15}={}){return axios.get("api/",{params:{key:"44929764-df5ad93c9d917838a072df550",q:e,page:o,per_page:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(({data:r})=>r)}const s={q:"",page:1,pageSize:15,maxPage:0},b=document.querySelector("form");b.addEventListener("submit",w);function w(e){if(e.preventDefault(),n(".gallery"),e.target.elements.text.value.trim()===""){i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, please enter the correct value!"});return}d(),s.q=e.target.elements.text.value.trim(),s.page=1;try{f(s).then(o=>{g(o,s.page)}).catch(o=>{n(".div-js"),console.error(o)})}catch(o){i.show({color:"#ef4040",position:"topRight",title:"Error",message:o})}}const m=document.querySelector(".buttontwo");m.disabled=!0;m.addEventListener("click",L);function L(){d(),s.page+=1;try{f(s).then(e=>{g(e,s.page)}).catch(e=>{n(".div-js"),console.error(e)})}catch(e){i.show({color:"#ef4040",position:"topRight",title:"Error",message:e})}}async function f(e){return await y(e).then(o=>{const l=o.hits.map(r=>({webformatURL:r.webformatURL,largeImageURL:r.largeImageURL,tags:r.tags,likes:r.likes,views:r.views,comments:r.comments,downloads:r.downloads}));if(s.maxPage=Math.ceil(o.total/s.pageSize),n(".div-js"),s.page<s.maxPage&&p(),o.hits[0]==null)throw new Error("No images found");return l}).catch(o=>i.show({color:"#ef4040",position:"topRight",title:"Error",message:"No images found"}))}
//# sourceMappingURL=commonHelpers.js.map
