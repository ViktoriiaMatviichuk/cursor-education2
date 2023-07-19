

 async function getRandomChinese2(length) {
    let promise = new Promise(async(resolve, reject) => {
    let i=0;
    let result = ''
                while (i<length) {
                    const sign = Date.now() % 100000;
                    result += String.fromCharCode(sign);
                    await new Promise(resolve => setTimeout(resolve, 50));
                    i++;
                }
                resolve(result); 
        })
        return promise.then(result => {
            console.log(result);
            });
            
    }

getRandomChinese2(5);
