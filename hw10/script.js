document.addEventListener('keypress', (event) => {
    const key = event.key;
  
    if (key == "a" || key == "A") {
      document.getElementById('audio1').play();

    }
    
    if (key == "b" || key == "B") {
      document.getElementById('audio2').play();
    }
    
      if (key == "c" || key == "C") {
        document.getElementById('audio3').play();
        
      }
  });


  document.addEventListener('keydown', (event) => {
    const key = event.key;
  
    if (key == "a" || key == "A") {
      a.style.backgroundColor = 'white'
    }
    
    if (key == "b" || key == "B") {
      b.style.backgroundColor = 'white'
    }
    
      if (key == "c" || key == "C") {
        c.style.backgroundColor = 'black'
        
      }
    
  }
  );



  document.addEventListener('keyup', (event) => {
    const key = event.key;
  
    if (key == "a" || key == "A") {
      a.style.backgroundColor = 'pink'
      document.getElementById('audio1').play();
    }
    
    if (key == "b" || key == "B") {
      b.style.backgroundColor = 'violet'
      document.getElementById('audio2').play();
    }
    
      if (key == "c" || key == "C") {
        c.style.backgroundColor = 'lightcyan'
        document.getElementById('audio3').play();
        
      }
    
  }
  );

  const a = document.createElement('input');
  a.setAttribute("type", "button")
  a.setAttribute("value", "A")
    a.style.backgroundColor = 'pink'
    a.style.borderRadius = '5px'
    a.style.width = '50px'
    a.style.height= '50px'
    a.style.borderColor = 'black'




  const b = document.createElement('input');
  b.setAttribute('class', 'bclass')
  b.setAttribute("type", "button")
  b.setAttribute("value", "B")


  const c = document.createElement('input');
  c.setAttribute("type", "button")
  c.setAttribute("value", "C")
  c.classList.add('cclass')

  document.body.append(a,b,c);

  

