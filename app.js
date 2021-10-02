//  A junior developer structure student name, skills and score in array of arrays which may not easy to read.Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student;
console.log(name, skills, scores)
let jsScore = scores[2]
let reactScore = scores[3]
console.log("jsScore : " + jsScore + "\n" + "React Score : " + reactScore)



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





// Use the student object to solve the following questions:

// a.Find the length of student object keys
// use keys not key
console.log(Object.keys(student).length)

// b.Find the length of the student object values
// use values not not value 
console.log(Object.values(student).length)

// c.Find the length of skills object keys
console.log(Object.keys(student.skills).length)

// d.check if the student object has graphicDesign property
for (let i in student) {
    if (i == "graphicDesign") console.log("graphicDesign is present in the student object")
}

// e.Iterate the keys of the student object
for (let i in student) {
    console.log(i)
}




const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false
    }
];




const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]



// a.Imagine you are getting the above users collection from a MongoDB database.

//     a.Create a function called *** signUp *** which allows user to add to the collection.If user exists, inform the user that he has already an account.

function signUp(user) {
    let x = users.find(users => users._id == user._id)
    if (x != undefined) {
        console.log("user already exist")
    } else {
        users.push(user)
        console.log("user registered successfully")
        console.log(users)
    }
}

signUp({
    _id: 'aabbce',
    username: 'john',
    email: 'john@alex.com',
    password: '000000',
    createdAt: '19/02/2021 10:00 AM',
    isLoggedIn: false
})

//b.Create a function called *** signIn *** which allows user to sign in to the application

function signin(userdata) {
    let data = users.find(users => users.email == userdata.email && users.password == userdata.password)
    if (data == undefined) {
        console.log("User not exist")
    } else {
        data.isLoggedIn = true
        console.log(data)
        console.log("SignIn successfully")
    }
}


// b.The products array has  three elements and each of them has six properties.
//a.Create a function called *** rateProduct *** which rates the product
function rateProduct(product, rating) {
    let PRO = products.find(pro => pro.name == product)
    PRO.ratings.push(rating)
    console.log(PRO)
}

rateProduct('Laptop', { userId: 'hey', rate: 5 })

// b.Create a function called *** averageRating *** which calculate the average rating of a product

function averageRating() {

}

// c.Create a function called *** likeProduct ***.This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(product, userId) {
    let PRO = products.find(findProduct => findProduct.name == product);
    if (PRO != undefined) {
        let existLike = PRO.likes.find(findlike => findlike == userId)
        if (existLike == undefined) {
            PRO.likes.push(userId);
        } else {
            PRO.likes.pop();
        }
        console.log(products)
    } else {
        console.log("Product does not exist");
    }
}

likeProduct('TV', 'sseeff')
likeProduct('Laptop', 'qqwwee')