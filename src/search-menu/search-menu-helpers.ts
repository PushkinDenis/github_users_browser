import { GitHubUser } from "../user-card/types";
import { userCard } from "../user-card/user-card";
import { addUserCard } from "../user-card/user-card-helper";
import { addUserList } from "../user-card/user-card-helper";

const findUser = async (userLogin: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${userLogin}`);
  const userData: GitHubUser = await response.json();
  return userData;
};

const getUsers = async () => {
  const response = await fetch(`https://api.github.com/users`);
  const json = await response.json();
  return json;
};

const createUserCard = (): void => {
  let gitUser: GitHubUser = {};
  const searchButtons: NodeListOf<Element> = document.querySelectorAll(".search__button");
  for (let searchButton of searchButtons) {
    searchButton.addEventListener("click", (btn: Event): void => {
      const searchBtnTarg = btn.target as HTMLElement;
      const searchInp = searchBtnTarg.previousElementSibling!.firstElementChild as HTMLInputElement;
      const searchInpVal: string = searchInp.value;
      if (searchInpVal !== "") {
        findUser(searchInpVal).then((result) => {
          gitUser = {
            login: result.login,
            id: result.id,
            avatar_url: result.avatar_url,
            html_url: result.html_url,
            name: result.name,
            location: result.location,
          };
          const card = userCard(gitUser);
          addUserCard(card);
        });
      }
    });
  }
};

const createUsersList = (): void => {
  const usersBtn = document.querySelector(".nav-bar__users") as HTMLElement;
  let users: object[] = [];
  usersBtn.addEventListener("click", () => {
    getUsers().then((result) => {
      users.push(result);
      for (let user of users[0] as GitHubUser[]) {
        user = {
          login: user.login,
          id: user.id,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          name: user.name,
          location: user.location,
        };
        const card = userCard(user);
        addUserList(card);
      }
    });
  });
};

export { createUserCard };
export { createUsersList };

// const createUsersList = (): void => {
//   const usersBtn = document.querySelector(".nav-bar__users") as HTMLElement;
//   let users = [];
//   usersBtn.addEventListener("click", () => {
//     getUsers().then(async (result) => {
//       for (let user of result) {
//         let response = await fetch(`https://api.github.com/users/${user.login}`);
//         let json = response.json();
//         json.then((result) => {
//           user = {
//             login: result.login,
//             id: result.id,
//             avatar_url: result.avatar_url,
//             html_url: result.html_url,
//             name: result.name,
//             location: result.location,
//           };
//           const card = userCard(user);
//           addUserList(card);
//         });
