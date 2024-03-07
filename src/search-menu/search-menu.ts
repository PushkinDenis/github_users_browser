const searchMenu = (): string => {
  return `<div class="search">
    <div class="search__text">Search: </div>
    <div class="search__input-wrapper">
      <input type="text" class="search__input" placeholder = "Find user by name">
    </div>
    <button class="search__button">Find user</button>
  </div>`;
};

export { searchMenu };

const findUser = async (userName: string): Promise<void> => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const user: object = await response.json();
  console.log(user.avatar_url);
  document.body.insertAdjacentHTML("beforeend", `<img src="${user.avatar_url}" alt="avatar">`);
};

const findName = (): void => {
  const searchButtons: NodeListOf<Element> = document.querySelectorAll(".search__button");
  for (let searchButton of searchButtons) {
    searchButton.addEventListener("click", (btn: Event): void => {
      const searchBtnTarg = btn.target as HTMLElement;
      const searchInp = searchBtnTarg.previousElementSibling.firstElementChild as HTMLInputElement;
      const searchInpVal: string = searchInp.value;
      if (searchInpVal !== "") {
        findUser(searchInpVal);
      }
    });
  }
};

export { findName };
