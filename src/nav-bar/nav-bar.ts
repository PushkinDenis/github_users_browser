import { searchMenu } from "../search-menu/search-menu";

export function navBar(frButton?: string, secButton?: string): string {
  return `<nav class="nav-bar">
    <ul class="nav-bar__ul">
      <li class="nav-bar__li"><a href="https://github.com/ " target="_blank">${frButton}</a></li>
      <li class="nav-bar__li"><a href="https://docs.github.com/en/rest?apiVersion=2022-11-28" target="_blank">${secButton}</a></li>
      <li class="nav-bar__li"><div class="button-wrapper"><button class="nav-bar__users">Users</button></div></li>
    </ul>
    ${searchMenu()}
  </nav>`;
}

// export {navBar}
//GitHub
//GitHub API`
