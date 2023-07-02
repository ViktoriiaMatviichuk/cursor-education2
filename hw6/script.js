const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
 



    



  /*   Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
science"] - яка повертає список предметів
1.
для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
замінити на пробіл */


 
const getSubjects = (studentNumber) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // const student = students[studentNumber]
   // const subjects = students[studentNumber].subjects
    const subjectsKeys = Object.keys(students[studentNumber].subjects)
    const upperCase = subjectsKeys.map((item)=>(capitalizeFirstLetter(item)))
    return upperCase
}

console.log(getSubjects(2))


/* 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
середню оцінку по усім предметам для переданого студента НЕ МАСИВА
СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
попередніх домашніх завданнях :)
 */
const getAverageMark = (studentNumber) => {
    
    // const student = students[studentNumber]
   // const subjects = students[studentNumber].subjects
    const subjectsValues = Object.values(students[studentNumber].subjects)
    const oneArray = subjectsValues.flat()
    const average = oneArray.reduce((accum, currentV) => accum + currentV, 0) / oneArray.length;
    return average
}

console.log(getAverageMark(2))


/* 
3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
"Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка.
 */
const getStudentInfo = (studentNumber) => {
    const student = students[studentNumber]
    return {
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(studentNumber)
    }
}


console.log(getStudentInfo(2))

   /* 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
    – яка повертає імена студентів у алфавітному порядку. */ 
    function getStudentsNames(students) {
    
        let studentsNames = [];
    
        for (let i=0; i < students.length ; ++i) {
    
            // extract value from property
            studentsNames.push(students[i].name);
        }
        return studentsNames.sort();
    }
    console.log(getStudentsNames(students))



    function getStudentsNamesMap(arr) {
        const studentsNames = arr.map((item)=>(item.name))
        return studentsNames.sort();
    }
     


/* 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
кращого студента зі списку по показнику середньої оцінки.*/


const getBestStudent = (students) => {
   
  const studentsMark = students.map((item,index )=>( getAverageMark(index)))
  let max =0
  let index =0
 for (let i =0; i<studentsMark.length;i++){
    if (studentsMark[i]>max) {
        max = studentsMark[i]
        index = i
    }
    
 }
 return students[index].name
}
console.log(getBestStudent(students))



/* 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
повторень. */ 


function calculateWordLetters (text) {
    const chars = text.split('');  

   const obj = chars.reduce((acumulator, currentValue)=>{
        acumulator[currentValue] = (acumulator[currentValue] || 0 ) + 1
        return acumulator
    },{} )
    return obj
}

console.log(calculateWordLetters ('text'))