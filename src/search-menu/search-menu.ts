const searchMenu = (): string => {
  return `<form class="search">
    <div class="search__text">Search: </div>
    <div class="search__input-wrapper">
      <input type="text" class="search__input" placeholder = "Find user by name">
      <input type="submit" hidden>
    </div>
    <button class="search__button">Find user</button>
  </form>`;
};

export { searchMenu };
