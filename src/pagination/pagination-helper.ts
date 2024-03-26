import { GitHubUser } from "../user-card/types";
import { userCard } from "../user-card/user-card";
import { getUsers } from "../search-menu/search-menu-helpers";
const fetchUsers = async (page: string) => {
  const usersData = await fetch(`https://api.github.com/users?since=${page}04&per_page=100`);
  const json = await usersData.json();
  console.log(json);
  return json;
};

// export { fetchUsers };
import { pagination } from "./pagination";
const addPagination = (): void => {
  const userList = document.querySelector(".application-main") as HTMLElement;
  userList!.insertAdjacentHTML("beforeend", pagination());
};

const paginate = (): void => {
  const paginationButtons: Element[] = Array.from(document.querySelectorAll(".pagination__li"));
  paginationButtons.forEach((element) => {
    element.addEventListener("click", (el) => {
      const targ = el.target as HTMLElement;
      const val = targ.textContent as string;
      if (targ.textContent !== "0") {
        let users: GitHubUser[] = [];
        const userList = document.querySelector(".user-list__container") as HTMLDivElement;
        fetchUsers(val).then((result) => {
          const container = document.querySelector(".user-list__container");
          while (container!.firstChild) {
            container!.removeChild(container!.firstChild);
          }
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
            console.log(user);
            userList.insertAdjacentHTML("beforeend", userCard(user));
          }
        });
      } else {
        let users: GitHubUser[] = [];
        const userList = document.querySelector(".user-list__container") as HTMLDivElement;
        getUsers().then((result) => {
          const container = document.querySelector(".user-list__container");
          while (container!.firstChild) {
            container!.removeChild(container!.firstChild);
          }
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
            console.log(user);
            userList.insertAdjacentHTML("beforeend", userCard(user));
          }
        });
      }
    });
  });
  const dirBtns: Element[] = Array.from(document.querySelectorAll(".pagination__btn"));
  dirBtns.forEach((elem) => {
    elem.addEventListener("click", (elem) => {
      const targ = elem.target as HTMLElement;
      if (targ.textContent === ">") {
        const buttons: Element[] = Array.from(document.querySelectorAll(".pagination__num"));
        for (let button of buttons) {
          let val: number = +button.textContent!;
          button.textContent = String(val + 6);
        }
      } else if (targ.textContent === "<" && targ.nextElementSibling?.textContent !== "0") {
        const buttons: Element[] = Array.from(document.querySelectorAll(".pagination__num"));
        for (let button of buttons) {
          let val: number = +button.textContent!;
          button.textContent = String(val - 6);
        }
      }
    });
  });
};

export { addPagination };
export { paginate };
