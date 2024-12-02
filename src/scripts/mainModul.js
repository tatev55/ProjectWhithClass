import{ Phones, Laptops, Tablets} from './productsModul.js';



export function displayProduct(product, sectionClass){

    const section = document.querySelector(sectionClass);

    if (!section) {
        console.error(`Section with ID "${sectionClass}" not found.`);
        return; 
    }

    const productBox = document.createElement('div');
    const btnAdd = document.createElement('button');
    const btnRemove = document.createElement('button');
    const icon = document.createElement('i');
    icon.classList.add("fa-solid", "fa-star", "box-cart-icon");


    btnAdd.innerHTML = 'ADD';
    btnAdd.classList.add('btn');
    btnAdd.addEventListener('click', function() {
        addCart(icon);
    });

    btnRemove.classList.add('btn');
    btnRemove.innerHTML = 'REMOVE';
    btnRemove.addEventListener('click', function() {
        removeCart(icon);
    })

    productBox.classList.add('box');
    productBox.innerHTML = `${product.displayImage()}
        <h2>${product.productName} (${product.model})</h2>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <p>Description: ${product.getDetails()}</p>`

        productBox.appendChild(btnAdd);
        productBox.appendChild(btnRemove);
        productBox.appendChild(icon);
        document.querySelector(sectionClass).appendChild(productBox);

}


 function addCart(icon) {
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    
    if(icon.style.color === 'green'){
        alert('You already have it in your cart')
    }else{
        count++; 
        localStorage.setItem('cartCount', count);
        icon.style.color = 'green';
    }
    

    const header = document.querySelector('header');
    header.querySelector('.box-cart-count').innerHTML = count;
   
}

function removeCart(icon){
    let count = parseInt(localStorage.getItem('cartCount')) || 0;

    if(icon.style.color === 'gold'){
        alert('You already removed it from your cart');
    }
    
    if(count > 0){
        count--;
    }else if(count === 0){
        alert('Your cart is empty');
    }

    localStorage.setItem('cartCount', count);

    const header = document.querySelector('header');
    header.querySelector('.box-cart-count').innerHTML = count;

    icon.style.color = 'gold';

}
 

const iphone = new Phones('iphone', 1500, '16pro',  30,  'https://3dplanet.am/wp-content/uploads/2024/09/16pro-black.jpg', 'Black' );
const samsung = new Phones('Samsung',400, 'Galaxy S24 Ultra', 20,'https://yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/s/2/s24_2.jpg', 'Titanium Gray' );
const xiaomi = new Phones('Xiaomi', 350, '14T Pro', 32, 'https://www.euronics.lv/UserFiles/Products/Images/378601-569985-medium.png', 'Titan Black');

const phones = [iphone, samsung, xiaomi];

phones.forEach(phone => {
    displayProduct(phone, '.box-phones')
})


const macBook = new Laptops('Apple MacBook Air', 2000, 'M2', 12, 'https://i.pcmag.com/imagery/reviews/01mBttlv1qMiXYpc1bfOj1h-1.fit_lim.size_640x358.v1657726621.jpg','8-core CPU', '8GB');
const dell = new  Laptops('Dell', '1500', 'XPS 15', 45, 'https://m.media-amazon.com/images/I/71EbMDsXK+L.jpg', '5 GHz apple_ci7', '16 DDR5');
const lenovo = new Laptops('Lenovo', '1400', 'IdeaPad 3', 33, 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/4/2/4277437-2.jpeg', '2.6 GHz ryzen_3_3250u', '4 GB DDR4');

const laptops = [macBook, dell, lenovo];

laptops.forEach(laptop =>{
    displayProduct(laptop, '.box-laptops');
})

const ipad = new Tablets('iPad Pro', 800, '2024', 23, 'https://static.esrgear.com/wp-content/uploads/2024/03/ipad-pro-13-inch-clear-case-m4-clear-black.jpg', '281.6mm : 215.1mm', '31.29-watt');
const galaxy = new Tablets('Samsung Galaxy', 1100, 'S9+', 11, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6JaOnyNY_FfwIIxpm7wIqyHjZwAYXrwV2A&s','5.8 inches', '3,500 mAh');
const amazon = new Tablets('Amazon Fire', 900, 'HD 10 ', 8,      'https://cdn.mos.cms.futurecdn.net/zzG4suxMrGDsamZmgSRFLc.jpg', '8 inches', '28.21-watt-hour' );

const tab = [ipad, galaxy, amazon];

tab.forEach(tablet => {
    displayProduct(tablet, '.box-tablets');
})












   

