// Add button
let add = document.getElementById("add-item")
// Cart number
let cartCount = document.getElementById("count-el")
let sum1 = 0

function addButton() {

    // let checkOut = cartCount.innerHTML + 1
    // cartCount.innerHTML = checkOut
    // let checkOut = cartCount.textContent + 1
    // cartCount = checkOut
    sum1 += 1
    cartCount.textContent = sum1
    
}