let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let employees = [
    { name: "John", salary: 5000 },
    { name: "Jane", salary: 7000 },
    { name: "Alex", salary: 6000 }
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

employees.forEach(employee => {
    employee.salary += 1000;
});

console.log(employees);
