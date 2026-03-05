const aboutContainer = document.createElement('div')
aboutContainer.className = 'about_container'

const aboutHeader = document.createElement('h1')
aboutHeader.textContent = ' About US'

const paraOne = document.createElement('p')
paraOne.textContent = ` Kitty Cafe is a re-homing and care facility for cats and kittens from a range of backgrounds. From rescue cats, 
 to strays, to cats which have had medical issues - we take them in and look after them until they find their forever home.
 Our mission is to make sure that every kitty, regardless of the situation, finds a loving home and has a long and healthy life! 
 Kitty Cafe uses it's high street presence, not only to promote and facilitate the rescue and rehoming of cats in the community, 
 local rescues and abandoned 
 cats, but to set the best practice standards by ensuring that all of our kitties have all of their vet care taken care of at our own expense! `
paraOne.className= 'para'

 const paraTwo = document.createElement('p')
 paraTwo.textContent = `We hope you have fun at kitty Cafe, where coffee meets cuddles! Nestled in the heart of the city,
 we offer a unique and cozy environment where cat lovers can enjoy a delicious cup of coffee and mouthwatering sandwiches 
 while mingling with our resident feline friends. Our mission is to provide a purrfect sanctuary for both humans and cats alike, 
 creating memorable moments and endless purrs.
 All of our food is prepared by our team of trained kitchen staff from the sealed glass kitchen where you can see your food being made,
  without risk of little paws getting involved. The cafe is kept at 
 the highest standard of hygiene and cleanliness, which is proven from our Food Standard rating of 5 -
  something the kitties are very proud of!`
 paraTwo.className= 'para'

 aboutContainer.appendChild(aboutHeader)
 aboutContainer.appendChild(paraOne)
 aboutContainer.appendChild(paraTwo)

 export {aboutContainer}

