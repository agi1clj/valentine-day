const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Îți promit că va fi de neuitat", images:"images/cat-02.gif"},
  {text:"Reconsideră", images:"images/cat-03.gif"},
  {text:"Hai, îndrăznește să spui da", images:"images/cat-04.gif"},
  {text:"Nu te teme", images:"images/cat-05.gif"},
]
const ohyes = {text:"Știam că vei accepta, beibiutaa", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Daa"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Nu'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
