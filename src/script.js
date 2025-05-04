
// Koppla HTML-taggar till js-variabler
const addButton = document.getElementById("addButton")
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const cartList = document.getElementById("cartList")

//Skapar en tom array för varukorgen
  let cart = []

  //funktion som lägger till objekt (varor) i arrayen
function addToCart(){
    const productName = productInput.value //kopplar ihop variabeln productName och productPrice med våra inputfält 
    const productPrice = Number(priceInput.value) // Number() ser till att värdet blir en siffra

    // en ny produkt i varukorgen skapas i form av ett objekt. Antalet börjar på 1
    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1
    }
    
    // börja med utgångspunkten att inget item existerar för att sen kunna använda det som krav för att ett objekt ska läggas till.
    let itemExist = false

    // loopa igenom varukorgen.
    // Ifall det redan finns ett item med samma namn i arrayen: lägg till +1 på quantity
    // itemExist blir sant
    for (item of cart) {
        if (item.productName === productName){
            item.quantity++
            itemExist = true
        }
    }
// om itemexist är falskt (dvs att if-satsen ovan inte körts och det inte skapats ett item), skapa ett item
    if (!itemExist){
        // lägg till ett objekt i arrayen
    cart.push(newProduct)
   
}

//nollställ inputvärdet 
productInput.value = ""
priceInput.value = ""

//kör funktionen som skapar varukorgen i HTML-koden
renderCart()
}

//funktion som skapar en lista i HTML-koden
function renderCart(){

//nollställer listan i HTML-koden
cartList.innerHTML= ""

// loopar igenom arrayen och skapar li-element utifrån objekten i arrayen
// i li-elementet skrivs en sträng innehållande produkt, pris och antal
// li-elementen blir children till ul-elementet i HTML-koden

    for(item of cart){
        const li = document.createElement("li")
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`
        cartList.appendChild(li)
}
}
// när man klickar på knappen körs funktionen addtoCart som lägger till objekt i arrayen
addButton.addEventListener("click", () => { 
    addToCart()
})


