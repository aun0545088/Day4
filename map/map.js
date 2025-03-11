const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const students = [
    { name: "John", marks: 85 },
    { name: "Jane", marks: 92 },
    { name: "Tom", marks: 74 }
];

// const formattedArr = kvArray.map(({ key, value }) => ({ [key]: value }))

const formattedArr = kvArray.map(({ key, value }) => {
    return { [key]: value }
})

const result = students.map(student => ({
    ...student,
    grade: student.marks > 90 ? "A+" : student.marks > 80 ? "A" : "B"
}));

console.log(formattedArr, result);