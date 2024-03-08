const text = document.getElementById('text')
const symbols = document.getElementById('numberSymbol')
const words = document.getElementById('wordsSymbols')

function getSymbols() {
    text.value.length > 0
    ? symbols.innerHTML = text.value.length
    : symbols.innerHTML = ''
}

function getWords() {
    text.value.length > 0
    ? words.innerHTML = text.value.trim().split(/\s+/).length
    : words.innerHTML = ''
}

text.oninput = () => {
    getSymbols() 
    getWords()
} 


// black-white

const icon = document.querySelector('.black-white')
const faColor = document.querySelector('.fa')
document.body.style.color = 'black'

icon.addEventListener('click', () => {
    if (document.body.style.color === 'black') {
        document.body.style.cssText = `
            background: linear-gradient(0deg, #000000 10%, #242424 49%, #545454 99%);
            color: white;
        `
        icon.style.backgroundColor = '#777' 
        faColor.className = 'fa fa-sun-o'
    } else if (document.body.style.color === 'white') {
        document.body.style.cssText = `
            background: linear-gradient(0deg, #75f6ff 0%, #e1fef9 100%);
            color: black;
        `
        icon.style.backgroundColor = '#cfcfcf' 
        faColor.className = 'fa fa-moon-o'
    }
})
