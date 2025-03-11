const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response?.json();
    console.log("users", users)
    const formattedUsers = users.map(({ id, name, email }) => ({
        id,
        name,
        email,
    }));

    console.log(formattedUsers);
}

fetchUsers();
