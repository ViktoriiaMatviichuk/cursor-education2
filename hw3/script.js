

function maxDigit(n){
    if(n == 0){ return 0;}
    else{
      return Math.max(n%10, maxDigit(Math.floor(n/10)));
    }
  }




 function stupinChisla(chislo,stepin) {
    let result = chislo;
    for (i=1; i<stepin; i++) {
       result *= chislo;
    }   
    return result;
}




function nameChange() {
    enterName= prompt("vvedit imja", "")
    const str2 = enterName.charAt(0).toUpperCase() + enterName.slice(1);
    console.log( str2 );
}

 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} 





function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('text with letter', 'letter'));





function getRandomInt(i) {
    
if ( i>=1) {
   console.log (Math.floor(Math.random() * (10**i - 1)) + 1); 
}
  else 
  console.log(Math.floor(Math.random() * (100000000 - 1)) + 1); 
}


/* НЕ ПРАЦЮЄ

function repStr(){
console.log(prompt("text:",str));
const str

const newStr = str.replace("W", ""); // "Hello orld"

console.log(newStr);
} */