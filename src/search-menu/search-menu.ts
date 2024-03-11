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
