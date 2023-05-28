const input = document.querySelector('.search_input')
const list = document.querySelector('.list_drinks')
const divSearch = document.querySelector('.search')

const listOfDrinks = [
    'Mleko',
    'Piwo',
    'Whisky',
    'Pepsi',
    'Woda gazowana',
    'Sok jabłkowy',
    'Sok pomarańczowy',
    'Sok bananowy',
    'Sok wieloowocowy',
    'Wino czerwone',
    'Wino białe',
    'Woda niegazowana',
    'Energy drink'
]

const addList = () => {
    for (const drink of listOfDrinks) {
        const list_drink = document.createElement('li')
        list_drink.classList = 'list_drink'
        list.append(list_drink)
        list_drink.textContent = drink
    }
}

const searchEngine = (e) => {
    const li = document.querySelectorAll('li')
    const text = e.target.value.toLowerCase()
    li.forEach(el => {
        const task = el.textContent
        if (task.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}
document.addEventListener('DOMContentLoaded', addList)
input.addEventListener('keyup', searchEngine)