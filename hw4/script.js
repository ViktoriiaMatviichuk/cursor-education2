const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const allowedBoys = ["Олександр", "Ігор", "Олексій"]


let oneByOne = []
size = 2;
let result1 = [];
let solution2 = [];
let prepoints =[]
let result3 = []



function devidedStudentsBySex (students) {
    const boys= []
    const girls= []
    for (let i = 0; i < students.length; i++) {
        if  (allowedBoys.includes(students[i])) {
            boys.push(students[i])}
        else {
            girls.push(students[i]);
        }
    }
    return [boys, girls];
}

const [boys, girls] = devidedStudentsBySex(students)


function makePars(boys,girls) {
    const oneByOne = []
    let len = boys.length >= girls.length ? boys.length : girls.length;
    for (let i = 0; i < len; i++) {
        if (boys[i] && girls[i]) {
            oneByOne.push([boys[i], girls[i]]);
        }
    }
    return oneByOne;
}


function getPairsOfStudents (students) {
    const [boys, girls] = devidedStudentsBySex(students)
    return makePars(boys,girls)
}
console.log(getPairsOfStudents (students))
// завдання 2

const studentsPair = getPairsOfStudents(students);

let result2 = []

const pairsWithThemes = studentsPair.map(function(pair, index){
    return [ pair.join(' i '), themes[index]]
})

console.log(pairsWithThemes)



//   завдання 3

const studentsWithMarks = students.map(function(student, index){
    return [ student, marks[index]]
})

console.log(studentsWithMarks)




    //  4 task


      const random = (min,max)=>{
        return Math.floor(Math.random()*(max-min+1))+min;
      }
      console.log(random(1,5));


      const pairsWithMarks = pairsWithThemes.map(function(pair, index){
        return [...pair, random(1,5)]
    })
    
    console.log(pairsWithMarks)
    
    

     