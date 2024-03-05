import { navBar } from "../nav-bar/nav-bar";


export function header() {
    document.body.insertAdjacentHTML("afterbegin", `  <header class ="header">
    <img src="./github-mark-white.svg" alt="logo" class ="logo">
    ${navBar("GitHub", "GitHub API")}
  </header>`)
}