import { GitHubUser } from "./types";

const userCard = (user: GitHubUser) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="user-card">
  <div class="user-card__name">${user.name}</div>
  <div class="user-card__log">${user.login}</div>
  <div class="user-card__id">${user.id}</div>
  <div class="user-card__url">${user.html_url}</div>
  <div class="user-card__loc">${user.location}</div>
  <img src="${user.avatar_url}" alt="" class="user-card__avatar" />
</div>`,
  );
};

export { userCard };
