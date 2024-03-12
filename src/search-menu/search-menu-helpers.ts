import { GitHubUser } from "../user-card/types";
import { userCard } from "../user-card/user-card";
import { addUserCard } from "../user-card/user-card";

const findUser = async (userLogin: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${userLogin}`);
  const userData: GitHubUser = await response.json();
  return userData;
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

export { createUserCard };
