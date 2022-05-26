

var logo = document.createElement('img')
logo.setAttribute('src', './img/pokemon_logo.png')
logo.setAttribute('style', 'margin:0 auto;')


var logoDiv = document.createElement('div')
document.body.appendChild(logoDiv)
logoDiv.setAttribute('style', 'align-items:center; display:flex; justify-content:center;')
logoDiv.appendChild(logo)


document.body.setAttribute('style', 'justify-content:center; background-color:#ffd845;')

var selectGross = document.createElement('select')
selectGross.setAttribute('style', 'border:2px solid black;padding:0 40px;border-radius:10px; justify-content:space-around;gap:20px')



var inputSearch= document.createElement('input')
inputSearch.setAttribute('style', 'border:2px solid black;padding-left:10px;border-radius:10px;')
inputSearch.setAttribute('placeholder', 'Search')


var selectLetter = document.createElement('select')
selectLetter.setAttribute('style', 'border:2px solid black;border-radius:10px;padding:0 40px;')


var buttonSubmit= document.createElement('button')
buttonSubmit.setAttribute('style', 'background-color:#ffffff;border-radius:10px;border:2px solid black;padding:0 20px;')
buttonSubmit.textContent = "Button"




var findDiv = document.createElement('div')
findDiv.setAttribute('style', 'display:flex;  max-width:1320px;gap:50px;margin: 0 auto; justify-content:center;')
findDiv.setAttribute('class', 'mt-5')


document.body.appendChild(findDiv)
findDiv.appendChild(selectGross)
findDiv.appendChild(inputSearch)
findDiv.appendChild(selectLetter)
findDiv.appendChild(buttonSubmit)

var optionGross = document.createElement('option')
optionGross.textContent= "Gross"
selectGross.appendChild(optionGross)

var optionLetter = document.createElement('option')
optionLetter.textContent= "Aa-Zz"
selectLetter.appendChild(optionLetter)


var evDiv = document.createElement('div')
evDiv.setAttribute('style', 'display:flex;')


var elsUl = document.createElement('ul')
elsUl.setAttribute('style' ,  'display:flex;max-width:1320px;margin:0 auto;flex-wrap:wrap; gap:30px; justify-content:center;')




for(var i = 0; i < pokemons.length; i++) {
    var elsDiv = document.createElement('li')
    elsDiv.setAttribute('style', 'list-style:none;border:2px solid black;border-radius:20px ;background-color:white; padding: 15px;')
    elsDiv.setAttribute('class', 'mt-5')

    
var elImg = document.createElement('img')
elImg.setAttribute('src' , pokemons[i].img)
elImg.setAttribute('class', 'pokemons-img')
elImg.setAttribute('style', ' padding: 40px; border-bottom: 2px solid black;')

var elName = document.createElement('h2')
elName.textContent =  pokemons[i].name;
elName.setAttribute('class', 'pokemons-name')

var elHeard = document.createElement('img')
elHeard.setAttribute('src', './img/MaskBlack.svg')
elHeard.setAttribute('style', 'margin-left:auto;height:27px;')

var elType = document.createElement('h4')
elType.textContent = pokemons[i].type;
elType.setAttribute('class', 'pokemons-type')
elType.setAttribute('style', 'margin: 5px 0')

var elWeight = document.createElement('h3')
elWeight.textContent = pokemons[i].weight;
elWeight.setAttribute('class', 'pokemons-weight')

var elHeight = document.createElement('h3')
elHeight.textContent = pokemons[i].height;
elHeight.setAttribute('class', 'pokemons-height')

var WeightHeightDiv = document.createElement('div')
WeightHeightDiv.appendChild(elWeight)
WeightHeightDiv.appendChild(elHeight)
WeightHeightDiv.setAttribute('style', 'display:flex;margin: 5px 0; flex-direction:row; justify-content:space-between;')

var divNameHeard = document.createElement('div')
divNameHeard.appendChild(elName)
divNameHeard.appendChild(elHeard)
divNameHeard.setAttribute('style', 'flex-direction:row; display:flex;margin: 5px 0;align-items:center;')

elsDiv.appendChild(elImg)

elsDiv.appendChild(divNameHeard)

elsDiv.appendChild(elType)

elsDiv.appendChild(WeightHeightDiv)

elsUl.appendChild(elsDiv)

evDiv.appendChild(elsUl)

document.body.appendChild(evDiv)}