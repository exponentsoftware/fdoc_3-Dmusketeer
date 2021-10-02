//  A junior developer structure student name, skills and score in array of arrays which may not easy to read.Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

// let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skills, scores] = student;
// console.log(name, skills, scores)
// let jsScore = scores[2]
// let reactScore = scores[3]
// console.log("jsScore : " + jsScore + "\n" + "React Score : " + reactScore)



// 	Write a function called convertArrayToObject which can convert the array to a structured object.
// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// function convertArrayToObject(students) {
//     const array = students.map((item) => {
//         const object = {
//             name: item[0],
//             skills: item[1],
//             scores: item[2]
//         }
//         return object
//     })
//     return array
// }

// console.log(convertArrayToObject(students))





//Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 1. Add Bootstrap with level 8 to the front end skill sets
// 2. Add Express with level 9 to the back end skill sets
// 3. Add SQL with level 8 to the data base skill sets
// 4. Add SQL without level to the data science skill sets

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

console.log(student)

// console.log("================================")

//this method will mutate the student object 

// let des = { ...student }
// let bs = des.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
// console.log(des.skills.frontEnd)


// let Ex = des.skills.backEnd.push({ skill: 'Express', level: 9 })
// console.log(des.skills.backEnd)


// let SQL = des.skills.dataBase.push({ skill: 'SQL', level: 8 })
// console.log(des.skills.dataBase)

// let SQLwithout = des.skills.dataScience.push({ skill: 'SQL' })
// console.log(des.skills.dataScience)

// console.log("+++++++++++++++++++++++++++")

let newStudent = JSON.parse(JSON.stringify(student));

let bs = newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
console.log(newStudent.skills.frontEnd)


let Ex = newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
console.log(newStudent.skills.backEnd)


let SQL = newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
console.log(newStudent.skills.dataBase)

let SQLwithout = newStudent.skills.dataScience.push('SQL')
console.log(newStudent.skills.dataScience)

console.log(newStudent)
console.log("================================")
console.log(student)
