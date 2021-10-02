//  A junior developer structure student name, skills and score in array of arrays which may not easy to read.Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student;
console.log(name, skills, scores)
let jsScore = scores[2]
let reactScore = scores[3]
console.log("jsScore : " + jsScore + "\n" + "React Score : " + reactScore)