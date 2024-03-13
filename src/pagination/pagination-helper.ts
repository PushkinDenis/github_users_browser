const fetchUsers = async () => {
  const usersData = await fetch("https://api.github.com/users?since=1&per_page=100");
  const json = await usersData.json();
  console.log(json);
};

export { fetchUsers };
