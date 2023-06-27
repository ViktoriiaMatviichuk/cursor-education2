

// function getRandomArray(length,min,max)

function getRandomArray(length,min,max){
    const test = [];
    const random = (min,max)=>{
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    test.length = length;
        for (i=0; i<test.length;i++){
            test[i]= random(min,max)
        }
        return test   
}





// function getAverage(...numbers)

 function getAverage(...numbers) {
        let sum = 0;
        let integer = 0;
        for (let i = 0; i < numbers.length; i++) {
            if  (Number.isInteger(numbers[i])) {
            sum += numbers[i];
            integer +=1;
            }
        }
        return sum / integer;
}

 
    

 // function filterEvenNumbers (...numbers)

function filterEvenNumbers (...numbers) {
    result=[]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0){
            result.push(numbers[i])
        }
     
    }
    return result
}



// function countPositiveNumbers(...numbers)

function countPositiveNumbers(...numbers) {
    let positive = 0
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]>0) {
            positive +=1;
        }
    return positive;
    }
}




// function  getDividedByFive(...numbers)


function  getDividedByFive(...numbers) {
    const newArr = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 5 == 0){
            newArr.push(numbers[i])
        }

    } 
    return newArr
}


// function  getDividedByFive(...numbers)

const b = ['shit', 'fuck']

function replaceBadWords (text){
    let result6 = text
        for (i=0; i<b.length;i++){
            result6 = result6.replaceAll(b[i], '***');
        }
    return result6
}




