

const container = document.createElement('div')
container.className = 'container'
const text = document.createElement('div')
text.className = 'text'
const header = document.createElement('h1')
header.className = 'header'
header.textContent = 'Welcome to Kitty Cafe'
const para = document.createElement('p')
para.className = 'para'
para.textContent = "The kitty cafe is designed with felines in mind, with wide open spaces and lots of kitty toys - but that is not to say humans are left out! Each table has comfortable sofas and armchairs to maximise yoy experience and relaxation! Come and say hello!"
const image = document.createElement('div')
image.className = 'image'



 text.appendChild(header)
 text.appendChild(para)
 container.appendChild(text)
container.appendChild(image)

 export {container}
 
