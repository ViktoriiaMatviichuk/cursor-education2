function* createIdGenerator(){
    var index = 1;
    while(true){
      yield index++;
    }
  }

  
  const idGenerator = createIdGenerator();
  console.log( idGenerator.next().value)
  console.log( idGenerator.next().value)
  console.log( idGenerator.next().value)




  function* newFontGenerator(i) {
    let startFontSize = i;
    while (true) {
      let value = yield startFontSize
      if (value === "up") {
        startFontSize +=2
      } else if (value === "down") {
        startFontSize -=2
      }
    
    }
  }
  
  const fontGenerator = newFontGenerator(14);
  console.log(fontGenerator.next("up").value )
  console.log(fontGenerator.next("up").value )
  console.log(fontGenerator.next("down").value )
  console.log(fontGenerator.next("down").value )