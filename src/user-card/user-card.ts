import { GitHubUser } from "./types";

// const userCard = (user: GitHubUser) => {
//   user.name === null ? (user.name = "No name") : user.name;
//   user.location === null ? (user.location = "No location") : user.location;
//   const userCardContainer = document.createElement("div");
//   userCardContainer.className = "user-card__container";
//   const header = document.querySelector(".header") as HTMLElement;
//   userCardContainer.innerHTML = `<div class="user-card">
//     <div class="user-card__label">
//       <div class="user-card__name">${user.name}</div>
//     </div>
//     <div class="user-card__label">
//       <div class="user-card__log">${user.login}</div>
//     </div>
//     <div class="user-card__label">
//       <div class="user-card__id">${user.id}</div>
//     </div>
//     <div class="user-card__label">
//       <div class="user-card__url">${user.html_url}</div>
//     </div>
//     <div class="user-card__label">
//       <div class="user-card__loc">${user.location}</div>
//     </div>
//     <img src="${user.avatar_url}" alt="" class="user-card__avatar" />
//   </div>`;
//   header.after(userCardContainer);
// };
const userCard = (user: GitHubUser): string => {
  user.name === null ? (user.name = "No name") : user.name;
  user.location === null ? (user.location = "No location") : user.location;
  return `<div class="user-card">
    <div class="user-card__col">
      <div class="user-card__label">Name</div>
      <div class="user-card__name">${user.name}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">Login</div>
      <div class="user-card__log">${user.login}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">ID</div>
      <div class="user-card__id">${user.id}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">URL</div>
      <div class="user-card__url">${user.html_url}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">Location</div>
      <div class="user-card__loc">${user.location}</div>
    </div>
    <img src="${user.avatar_url}" alt="" class="user-card__avatar" />
  </div>`;
};

const addUserCard = (user: string) => {
  const userCardContainer = document.createElement("div");
  userCardContainer.className = "user-card__container";
  const header = document.querySelector(".header") as HTMLElement;
  userCardContainer.innerHTML = user;
  header.after(userCardContainer);
};

export { userCard };
export { addUserCard };
