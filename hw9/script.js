

document.body.style.justifyContent = 'center'
document.body.style.display = 'flex'

let wrapper = document.createElement('div');
document.body.append(wrapper);
wrapper.style.display = 'flex'
wrapper.style.flexWrap = 'wrap'
wrapper.style.width = '250px'
wrapper.style.justifyContent = 'center'


const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

for (let i = 1; i <= 25; i++) {
	let div = document.createElement('div');
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.backgroundColor = randomRgbColor()
	wrapper.appendChild(div);
}


const element = document.getElementsByTagName('p')
console.log(element)
