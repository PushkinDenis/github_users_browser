import { GitHubUser } from "./types";

const userCard = (user: GitHubUser): string => {
  return `<div class="user-card">
    <div class="user-card__col">
      <div class="user-card__label">Login</div>
      <div class="user-card__log user-card__prop">${user.login}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">ID</div>
      <div class="user-card__id user-card__prop">${user.id}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">URL</div>
      <a href="${user.html_url}"class="user-card__url user-card__prop" target="_blank">${user.html_url}</a>
    </div>
    <div class="user-card__col">
      <img src="${user.avatar_url} user-card__prop" alt="" class="user-card__avatar" />
    </div>
  </div>`;
};

const userSearchCard = (user: GitHubUser): string => {
  user.name === null ? (user.name = "No name") : user.name;
  user.location === null ? (user.location = "No location") : user.location;
  return `<div class="user-card__search">
        <img src="${user.avatar_url} user-card__prop" alt="" class="user-card__avatar-search" />
        <div class="user-card__name user-card__prop">${user.name}</div>
        <div class="user-card__loc user-card__prop">${user.location}</div>
        <div class="user-card__log user-card__prop">${user.login}</div>
        <div class="user-card__id user-card__prop">${user.id}</div>
        <a href="${user.html_url}"class="user-card__url user-card__prop" target="_blank">${user.html_url}</a>
    </div>`;
};
export { userCard };
export { userSearchCard };
// `<div class="user-card">
//     <div class="user-card__col">
//       <div class="user-card__label">Name</div>
//       <div class="user-card__name user-card__prop">${user.name}</div>
//     </div>
//     <div class="user-card__col">
//       <div class="user-card__label">Login</div>
//       <div class="user-card__log user-card__prop">${user.login}</div>
//     </div>
//     <div class="user-card__col">
//       <div class="user-card__label">ID</div>
//       <div class="user-card__id user-card__prop">${user.id}</div>
//     </div>
//     <div class="user-card__col">
//       <div class="user-card__label">URL</div>
//       <a href="${user.html_url}"class="user-card__url user-card__prop" target="_blank">${user.html_url}</a>
//     </div>
//     <div class="user-card__col">
//       <div class="user-card__label">Location</div>
//       <div class="user-card__loc user-card__prop">${user.location}</div>
//     </div>
//     <div class="user-card__col">
//       <img src="${user.avatar_url} user-card__prop" alt="" class="user-card__avatar" />
//     </div>
//   </div>`;
