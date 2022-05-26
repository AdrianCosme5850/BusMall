'use strict';
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
let retrievedProspects = localStorage.getItem('stringifiedProspects')
let parsedProspects = JSON.parse(retrievedProspects)
  if(retrievedProspects){
    itemProspects = parsedProspects
  } else{
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
  }

// new Item('sweep', 'png')
// new Item('bag')
// new Item('banana')
// new Item('bathroom')
// new Item('boots')
// new Item('breakfast')
// new Item('bubblegum')
// new Item('chair')
// new Item('cthulhu')
// new Item('dog-duck')
// new Item('dragon')
// new Item('pen')
// new Item('pet-sweep')
// new Item('scissors')
// new Item('shark')
// new Item('tauntaun')
// new Item('unicorn')
// new Item('water-can')
// new Item('wine-glass')

function randomNumber(){
let result = Math.floor(Math.random() * 19)
return result
}
let prospectsNumberIndex = []
function renderImages(){
  for(let i = prospectsNumberIndex.length; i < 6 ; i++){
    let randoNumber = randomNumber()
     while(prospectsNumberIndex.includes(randoNumber)){
      randoNumber = randomNumber()
    }
    prospectsNumberIndex.push(randoNumber)
  }
  console.log(prospectsNumberIndex)
  image1.src = itemProspects[prospectsNumberIndex[1]].photo;
  image1.alt = itemProspects[prospectsNumberIndex[1]].name;
  itemProspects[prospectsNumberIndex[1]].views++;
  image2.src = itemProspects[prospectsNumberIndex[2]].photo;
  image2.alt = itemProspects[prospectsNumberIndex[2]].name;
  itemProspects[prospectsNumberIndex[2]].views++;
  image3.src = itemProspects[prospectsNumberIndex[3]].photo;
  image3.alt = itemProspects[prospectsNumberIndex[3]].name;
  itemProspects[prospectsNumberIndex[3]].views++;
  prospectsNumberIndex.splice(0,3)
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
    voteViewArray()
    renderChart()
    let stringProspects = JSON.stringify(itemProspects)
    localStorage.setItem('stringifiedProspects', stringProspects)
    break;
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
let itemNames = []
let itemVotes = []
let itemViews = []
function voteViewArray(){
  for(let i = 0; i < itemProspects.length; i++){
    itemNames.push(itemProspects[i].name)
    itemVotes.push(itemProspects[i].votes)
    itemViews.push(itemProspects[i].views)
  }
}

const ctx = document.getElementById('myChart');
function renderChart(){const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemNames,
        datasets: [{
            label: '# of Votes',
            data: itemVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: '# of Views',
          data: itemViews,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})};
imgSection.addEventListener('click', handleClick)
resultsDisplay.addEventListener('click', handleShowResults)