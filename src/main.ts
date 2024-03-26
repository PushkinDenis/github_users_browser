import { header } from "./header/header";
import { createUserCard } from "./search-menu/search-menu-helpers";
import { createUsersList } from "./search-menu/search-menu-helpers";
import { searchUser } from "./search-menu/search-menu-helpers";

header();
createUserCard();
createUsersList();
searchUser();
