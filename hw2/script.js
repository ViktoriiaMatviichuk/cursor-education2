
function sumOddFromToWithWhile(n,m) {
    if (n > m) return sumOddFromToWithWhile(m, n);
    let result = 0;
    
    while (m >= n) {
        if (n%2 !== 0) {
            result+=n
        }
        n++;
    }
    return result;
}

function sumFromToWithWhile(n,m) {
    if (n > m) return sumFromToWithWhile(m, n);
    let result = 0;
    
    while (m >= n) {
        result+=n
        n++;
    }
    return result;
}

function enterInteger(variableName) {
    let result = Number(prompt(`ведіть число ${variableName} `,""));
    if (!Number.isInteger(result) || isNaN(result)) {
        return enterInteger(variableName)
    }
    return result;
}

let n = enterInteger('n');
let m = enterInteger('m');

console.log ("N:",n);

console.log ("M:",m);

let skipEven= confirm('чи потрібно пропускати парні числа?') 

if  (skipEven===true) {   
    // не парні
        console.log('sum n+m=', sumOddFromToWithWhile(n, m)); 
}
else {
    console.log('sum n+m=', sumFromToWithWhile(n, m)); 

}



/* function sumOddFromTo(n,m) {
    if (n > m) return sumOddFromTo(m, n);

    if (m===n) {
        if(n%2 === 0) return 0;
        return n;
    }
    if (n%2===0) return sumOddFromTo(n+1, m);
    return n + sumOddFromTo(n+1, m);
} */


/* function sumFromTo(n,m) {
    if (n > m) return sumFromTo(m, n);
    if (m===n) return n;
    return n + sumFromTo(n+1, m);
}
 */