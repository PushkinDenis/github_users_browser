(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=t(r);fetch(r.href,c)}})();const d=()=>`<div class="search">
    <div class="search__text">Search: </div>
    <div class="search__input-wrapper">
      <input type="text" class="search__input" placeholder = "Find user by name">
    </div>
    <button class="search__button">Find user</button>
  </div>`;function u(e,s){return`<nav class="nav-bar">
    <ul class="nav-bar__ul">
      <li class="nav-bar__li"><a href="https://github.com/ " target="_blank">${e}</a></li>
      <li class="nav-bar__li"><a href="https://docs.github.com/en/rest?apiVersion=2022-11-28" target="_blank">${s}</a></li>
      <li class="nav-bar__li"><div class="button-wrapper"><button class="nav-bar__users">Users</button></div></li>
    </ul>
    ${d()}
  </nav>`}function _(){document.body.insertAdjacentHTML("afterbegin",`  <header class ="header">
    <img src="./github-mark-white.svg" alt="logo" class ="logo">
    ${u("GitHub","GitHub API")}
  </header>`)}const i=e=>(e.name===null?e.name="No name":e.name,e.location===null?e.location="No location":e.location,`<div class="user-card">
    <div class="user-card__col">
      <div class="user-card__label">Name</div>
      <div class="user-card__name user-card__prop">${e.name}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">Login</div>
      <div class="user-card__log user-card__prop">${e.login}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">ID</div>
      <div class="user-card__id user-card__prop">${e.id}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">URL</div>
      <a href="${e.html_url}" class="user-card__url user-card__prop" target="_blank">${e.html_url}</a>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">Location</div>
      <div class="user-card__loc user-card__prop">${e.location}</div>
    </div>
    <div class="user-card__col">
      <img src="${e.avatar_url} user-card__prop" alt="" class="user-card__avatar" />
    </div>
  </div>`),v=e=>{const s=document.querySelector(".user-card__container");if(s===null){const t=document.createElement("div");t.className="user-card__container";const a=document.querySelector(".header");t.innerHTML=e,a.after(t)}else s.innerHTML=e},h=e=>{if(document.querySelector(".user-list")===null){const t=document.createElement("div");t.className="user-list__container";const a=document.querySelector(".header");t.insertAdjacentHTML("afterbegin",e),a.after(t)}else document.querySelector(".header").insertAdjacentHTML("afterbegin",e)},m=async e=>await(await fetch(`https://api.github.com/users/${e}`)).json(),p=async()=>await(await fetch("https://api.github.com/users")).json(),f=()=>{let e={};const s=document.querySelectorAll(".search__button");for(let t of s)t.addEventListener("click",a=>{const n=a.target.previousElementSibling.firstElementChild.value;n!==""&&m(n).then(o=>{e={login:o.login,id:o.id,avatar_url:o.avatar_url,html_url:o.html_url,name:o.name,location:o.location};const l=i(e);v(l)})})},b=()=>{const e=document.querySelector(".nav-bar__users");let s=[];e.addEventListener("click",()=>{p().then(t=>{console.log(t),s.push(t);for(let a of s[0]){a={login:a.login,id:a.id,avatar_url:a.avatar_url,html_url:a.html_url,name:a.name,location:a.location};const r=i(a);h(r)}})})};_();f();b();
