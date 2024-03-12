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
      <div class="user-card__name user-card__prop">${user.name}</div>
    </div>
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
      <div class="user-card__url user-card__prop">${user.html_url}</div>
    </div>
    <div class="user-card__col">
      <div class="user-card__label">Location</div>
      <div class="user-card__loc user-card__prop">${user.location}</div>
    </div>
    <div class="user-card__col">
      <img src="${user.avatar_url} user-card__prop" alt="" class="user-card__avatar" />
    </div>
  </div>`;
};

const addUserCard = (user: string) => {
  const userCard = document.querySelector(".user-card__container");
  if (userCard === null) {
    const userCardContainer = document.createElement("div");
    userCardContainer.className = "user-card__container";
    const header = document.querySelector(".header") as HTMLElement;
    userCardContainer.innerHTML = user;
    header.after(userCardContainer);
  } else {
    userCard.innerHTML = user;
  }
};

const addUserList = (user: string) => {
  const userList = document.querySelector(".user-list");
  if (userList === null) {
    const userLi = document.createElement("div");
    userLi.className = "user-list__container";
    const header = document.querySelector(".header") as HTMLElement;
    userLi.insertAdjacentHTML("afterbegin", user);
    header.after(userLi);
  } else {
    const userLi = document.querySelector(".header") as HTMLElement;
    userLi.insertAdjacentHTML("afterbegin", user);
  }
};
export { userCard };
export { addUserCard };
export { addUserList };
