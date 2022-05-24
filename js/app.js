"use strict";
let itemProspects = []
let totalAnswers = 25
let currentAnswers = 0
let imgSection = document.getElementById('img-section')
let image1 = document.getElementById('img1')
let image2 = document.getElementById('img2')
let image3 = document.getElementById('img3')
let resultsDisplay = document.getElementById('results')
let resultsList = document.getElementById('results-list')

function Item(name, fileExtension = 'jpg' ){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = 'img/' + name + '.' + fileExtension
  itemProspects.push(this)
}

new Item('sweep', 'png')
new Item('bag')
new Item('banana')
new Item('bathroom')
new Item('boots')
new Item('breakfast')
new Item('bubblegum')
new Item('chair')
new Item('cthulhu')
new Item('dog-duck')
new Item('dragon')
new Item('pen')
new Item('pet-sweep')
new Item('scissors')
new Item('shark')
new Item('tauntaun')
new Item('unicorn')
new Item('water-can')
new Item('wine-glass')

function randomNumber(){
let result = Math.floor(Math.random() * 19)
return result
}

function renderImages(){
  let prospectsNumber1 = randomNumber()
  let prospectsNumber2 = randomNumber()
  let prospectsNumber3 = randomNumber()
  while(prospectsNumber1 === prospectsNumber2 || prospectsNumber1 === prospectsNumber3 || prospectsNumber2 === prospectsNumber3){
    prospectsNumber2 = randomNumber()
    prospectsNumber3 = randomNumber()
  }
  image1.src = itemProspects[prospectsNumber1].photo;
  image1.alt = itemProspects[prospectsNumber1].name;
  itemProspects[prospectsNumber1].views++;
  image2.src = itemProspects[prospectsNumber2].photo;
  image2.alt = itemProspects[prospectsNumber2].name;
  itemProspects[prospectsNumber2].views++;
  image3.src = itemProspects[prospectsNumber3].photo;
  image3.alt = itemProspects[prospectsNumber3].name;
  itemProspects[prospectsNumber3].views++;
}
renderImages()

function handleClick(event){
let clickedImage = event.target.alt

for(let i = 0; i < itemProspects.length; i++){
  if(clickedImage === itemProspects[i].name){
    itemProspects[i].votes++;
    currentAnswers++;
    renderImages();
  }
  if(currentAnswers === 25){
    imgSection.removeEventListener('click', handleClick)
  }
}
}
function handleShowResults(event) {
  if(currentAnswers === 25){
    for(let i = 0; i < itemProspects.length; i++){
    let results = document.createElement('li')
    results.textContent = itemProspects[i].name + ' was voted for ' + itemProspects[i].votes + ' and was viewed ' + itemProspects[i].views + '.'
    resultsList.appendChild(results)
  }
}
}
imgSection.addEventListener('click', handleClick)
resultsDisplay.addEventListener('click', handleShowResults)