/* ==========================
   FF STORE
   app.js
========================== */

// Carrinho
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Atualiza contador
function updateCartCount() {
    const badge = document.querySelector(".cart span");

    if (badge) {
        badge.textContent = cart.length;
    }
}

// Salvar
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Produtos da loja
const products = [
    {
        id: 1,
        name: "100 Diamantes",
        price: 4.99,
        image: "assets/img/100.png"
    },
    {
        id: 2,
        name: "310 Diamantes",
        price: 12.99,
        image: "assets/img/310.png"
    },
    {
        id: 3,
        name: "520 Diamantes",
        price: 18.99,
        image: "assets/img/520.png"
    },
    {
        id: 4,
        name: "Passe de Elite",
        price: 49.90,
        image: "assets/img/passe.png"
    }
];

// Adicionar ao carrinho
function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    cart.push(product);

    saveCart();

    alert(product.name + " foi adicionado ao carrinho.");
}

// Liga os botões
function initButtons() {

    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            addToCart(products[index].id);

        });

    });

}

// Mostrar carrinho no console
function showCart() {

    console.clear();

    console.table(cart);

}

// Total
function cartTotal() {

    let total = 0;

    cart.forEach(item => {

        total += item.price;

    });

    return total.toFixed(2);

}

// Limpar carrinho
function clearCart() {

    if(confirm("Deseja limpar o carrinho?")){

        cart=[];

        saveCart();

        alert("Carrinho limpo.");

    }

}

// Pesquisa
const searchInput = document.querySelector("#search");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

})

})

}

// Efeito Scroll Header

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.background="#fff";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// Inicialização

updateCartCount();

initButtons();

console.log("FF STORE carregada com sucesso!");
