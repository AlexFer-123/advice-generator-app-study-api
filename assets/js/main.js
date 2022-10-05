let button = document.getElementById('btn')
let cardAdvice = document.getElementById('id')
let cardText = document.getElementById('text')

button.addEventListener('click', getAdvices)

getAdvices();
function getAdvices() {
 fetch("https://api.adviceslip.com/advice")
  .then( (response) => response.json())
  .then(renderAdvices)
  .catch( (error) => console.log(error))
}

function renderAdvices(advice){
  cardAdvice.innerHTML = ` A  d  v  i  c  e  # ${advice.slip.id}`
  cardText.innerHTML = `"${advice.slip.advice}"`
  console.log(advice)
}
