const foreachButton = document.getElementsByClassName('foreach-button')
const mapButton = document.getElementsByClassName('map-button')
const reduceButton = document.getElementsByClassName('reduce-button')
const filterButton = document.getElementsByClassName('filter-button')
const ul = document.querySelector('ul')

function formatNumbers(value){
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function showAll(productsArray) {

    let myLi = ''

    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src='${product.src}'>
                <h1>${product.name}</h1>
                <p>${formatNumbers(product.price)}</p>
            </li>
        `
        ul.innerHTML = myLi

    });
}

function discount() {
    const newPrices = menuOptions.map(product => {
        return {
            ...product,
            price: product.price - (product.price / 10)
        }

    })

    showAll(newPrices)
}

function totalValue() {
    const sumOfProducts = menuOptions.reduce((acc, value) => acc + value.price, 0)

    ul.innerHTML = `<li>
    <h1>A soma de todos os hamburguers é de: ${formatNumbers(sumOfProducts)}</h1></li>`
}

function onlyVeganBurguers() {
    const veganBurguers = menuOptions.filter(product => product.vegan === true)
    
    showAll(veganBurguers)
}