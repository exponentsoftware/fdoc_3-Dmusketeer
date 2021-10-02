//  A junior developer structure student name, skills and score in array of arrays which may not easy to read.Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

// let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skills, scores] = student;
// console.log(name, skills, scores)
// let jsScore = scores[2]
// let reactScore = scores[3]
// console.log("jsScore : " + jsScore + "\n" + "React Score : " + reactScore)



// 	Write a function called convertArrayToObject which can convert the array to a structured object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students) {
    const array = students.map((item) => {
        const object = {
            name: item[0],
            skills: item[1],
            scores: item[2]
        }
        return object
    })
    return array
}

console.log(convertArrayToObject(students))
