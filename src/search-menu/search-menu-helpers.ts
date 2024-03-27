import { GitHubUser } from "../user-card/types";
import { userCard, userSearchCard } from "../user-card/user-card";
import { addUserCard, addSearchUserCard } from "../user-card/user-card-helper";
import { addUserList } from "../user-card/user-card-helper";
import { addPagination, paginate } from "../pagination/pagination-helper";

const findUser = async (userLogin: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${userLogin}`);
  const userData: GitHubUser = await response.json();
  return userData;
};

const getUsers = async () => {
  const response = await fetch(`https://api.github.com/users?since=0&per_page=100`);
  const json = await response.json();
  console.log(json);
  return json;
};

const createUserCard = (): void => {
  let gitUser: GitHubUser = {};
  const searchButtons: NodeListOf<Element> = document.querySelectorAll(".search");
  for (let searchButton of searchButtons) {
    searchButton.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchBtnTarg = event.target as HTMLElement;
      console.log(searchBtnTarg);
      const searchInp = searchBtnTarg.firstElementChild!.nextElementSibling!.firstElementChild as HTMLInputElement;
      console.log(searchInp);
      const searchInpVal: string = searchInp.value;
      if (searchInpVal !== "") {
        findUser(searchInpVal).then((result) => {
          if (result.login !== undefined) {
            gitUser = {
              login: result.login,
              id: result.id,
              avatar_url: result.avatar_url,
              html_url: result.html_url,
              name: result.name,
              location: result.location,
            };
            const card = userSearchCard(gitUser);
            addSearchUserCard(card);
          }
        });
      }
    });
  }
};

const createUsersList = (): void => {
  const usersBtn = document.querySelector(".nav-bar__users") as HTMLElement;
  let users: GitHubUser[] = [];
  usersBtn.addEventListener("click", () => {
    if (document.querySelector(".user-list__container") === null) {
      addUserList();
      const userList = document.querySelector(".user-list__container") as HTMLDivElement;
      console.log(getUsers());
      getUsers()
        .then((result) => {
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
            userList.insertAdjacentHTML("beforeend", userCard(user));
          }
        })
        .then(() => {
          addPagination();
          paginate();
        });
    } else {
      return;
    }
  });
};

const searchUser = (): void => {
  const input = document.querySelector(".search__input");
  input!.addEventListener("input", (elem) => {
    setTimeout(() => {
      let gitUser: GitHubUser = {};
      let inp = elem.target as HTMLInputElement;
      let val = inp.value;
      findUser(val).then((result) => {
        if (result.login !== undefined) {
          gitUser = {
            login: result.login,
            id: result.id,
            avatar_url: result.avatar_url,
            html_url: result.html_url,
            name: result.name,
            location: result.location,
          };
          const card = userSearchCard(gitUser);
          addSearchUserCard(card);
        }
      });
    }, 1500);
  });
};

export { createUserCard };
export { createUsersList };
export { getUsers };
export { searchUser };
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
// const createUserCard = (): void => {
//   let gitUser: GitHubUser = {};
//   const searchButtons: NodeListOf<Element> = document.querySelectorAll(".search__button");
//   for (let searchButton of searchButtons) {
//     searchButton.addEventListener("click", (btn: Event): void => {
//       const searchBtnTarg = btn.target as HTMLElement;
//       const searchInp = searchBtnTarg.previousElementSibling!.firstElementChild as HTMLInputElement;
//       const searchInpVal: string = searchInp.value;
//       if (searchInpVal !== "") {
//         findUser(searchInpVal).then((result) => {
//           gitUser = {
//             login: result.login,
//             id: result.id,
//             avatar_url: result.avatar_url,
//             html_url: result.html_url,
//             name: result.name,
//             location: result.location,
//           };
//           const card = userCard(gitUser);
//           addUserCard(card);
//         });
//       }
//     });
//   }
// };
