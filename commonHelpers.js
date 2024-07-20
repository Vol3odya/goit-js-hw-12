import{S as u,i}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();function g(e,o=1){let l="";if(e.forEach(t=>{l+=`<li class="gallery-item">
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
        </li>`}),document.querySelector(".gallery").insertAdjacentHTML("beforeend",l),new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),o>1){const a=2*document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:a,left:0,behavior:"smooth"})}}function d(){h(),document.querySelector(".div-js").insertAdjacentHTML("afterbegin",'<div class="loader"></div>')}function f(){const e=document.querySelector(".buttontwo");e.disabled=!1,e.classList.remove("is-hidden")}function h(){const e=document.querySelector(".buttontwo");e.disabled=!1,e.classList.add("is-hidden")}function n(e){const o=document.querySelector(e);o.textContent="",new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}axios.defaults.baseURL="https://pixabay.com";function y({q:e="",page:o=1,pageSize:l=15}={}){return axios.get("api/",{params:{key:"44929764-df5ad93c9d917838a072df550",q:e,page:o,per_page:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(({data:s})=>s)}const r={q:"",page:1,pageSize:15,maxPage:0},b=document.querySelector("form");b.addEventListener("submit",w);function w(e){if(e.preventDefault(),n(".gallery"),e.target.elements.text.value.trim()===""){i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, please enter the correct value!"});return}d(),r.q=e.target.elements.text.value.trim(),r.page=1;try{p(r).then(o=>{g(o,r.page)}).catch(o=>{n(".div-js"),i.show({color:"#ef4040",position:"topRight",title:"Error",message:o.message})})}catch(o){i.show({color:"#ef4040",position:"topRight",title:"Error",message:o.message})}}const m=document.querySelector(".buttontwo");m.disabled=!0;m.addEventListener("click",L);function L(){d(),r.page+=1;try{p(r).then(e=>{g(e,r.page)}).catch(e=>{n(".div-js"),i.show({color:"#ef4040",position:"topRight",title:"Error",message:e.message})})}catch(e){i.show({color:"#ef4040",position:"topRight",title:"Error",message:e.message})}r.page+1>r.maxPage&&i.show({color:"blue",position:"topRight",title:"OK",message:"We're sorry, but you've reached the end of search results."})}async function p(e){const o=await y(e);if(o.total===0)throw new Error("No images found");const l=o.hits.map(s=>({webformatURL:s.webformatURL,largeImageURL:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads}));return r.maxPage=Math.ceil(o.totalHits/r.pageSize),n(".div-js"),r.page<r.maxPage&&f(),l}
//# sourceMappingURL=commonHelpers.js.map
