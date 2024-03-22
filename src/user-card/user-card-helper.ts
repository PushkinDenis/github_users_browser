const addUserCard = (user: string) => {
  const userCard = document.querySelector(".user-card__container");
  if (userCard === null) {
    const userCardContainer = document.createElement("div");
    userCardContainer.className = "user-card__container";
    const main = document.querySelector(".application-main") as HTMLElement;
    userCardContainer.innerHTML = user;
    main.prepend(userCardContainer);
  } else {
    userCard.innerHTML = user;
  }
};

const addUserList = () => {
  const userList = document.querySelector(".user-list");
  if (userList === null) {
    const userLi = document.createElement("div");
    userLi.className = "user-list__container";
    const main = document.querySelector(".application-main") as HTMLElement;
    main.append(userLi);
  } else {
    return;
  }
};

export { addUserCard };
export { addUserList };

// const addUserList = (user: string) => {
//   const userList = document.querySelector(".user-list");
//   if (userList === null) {
//     const userLi = document.createElement("div");
//     userLi.className = "user-list__container";
//     const main = document.querySelector(".application-main") as HTMLElement;
//     userLi.insertAdjacentHTML("afterbegin", user);
//     main.append(userLi);
//   } else {
//     const main = document.querySelector(".application-main") as HTMLElement;
//     main.insertAdjacentHTML("afterbegin", user);
//   }
// };
