import { header } from "./header/header";
import { createUserCard } from "./search-menu/search-menu-helpers";
import { createUsersList } from "./search-menu/search-menu-helpers";
import { fetchUsers } from "./pagination/pagination-helper";

header();
createUserCard();
createUsersList();
fetchUsers();
