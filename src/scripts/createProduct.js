import{ Phones, Laptops, Tablets} from './productsModul.js';
import { displayProduct } from './mainModul.js';


const form = document.querySelector('.create-product-form');
form.addEventListener('submit', createProductList);

document.getElementById("select").addEventListener("change", handleProductSelection);



function handleProductSelection() {
    const selectedProduct = document.querySelector("#select").value;
    
    const fields = {
        phone: ['color'],
        laptop: ['processor', 'ram'],
        tablet: ['size', 'battery'],
    };

    const allFields = ['color', 'processor', 'ram', 'size', 'battery'];


    allFields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.style.display = 'none';
        }
    });

    if (fields[selectedProduct]) {
        fields[selectedProduct].forEach(field => {
            const element = document.getElementById(field);
            if (element) {
                element.style.display = 'block';
                element.style.flexDirection = 'column';
                element.style.display = 'flex';
            }
        });
    }
}


function validateInputs() {
    const productName = document.getElementById('product-name').value.trim();
    const productPrice = document.getElementById('product-price').value.trim();
    const productModel = document.getElementById('model').value.trim();
    const productQuantity = document.getElementById('product-quantity').value.trim();
    const productImage = document.getElementById('product-image').value.trim();
    const productColor = document.getElementById('product-color').value.trim();
    const productProcessor = document.getElementById('product-processor').value.trim();
    const productRam = document.getElementById('product-ram').value.trim();
    const productSize = document.getElementById('product-size').value.trim();
    const productBattery = document.getElementById('product-battery').value.trim();

    let isValid = true;

    const select = document.getElementById('select').value;

    if (!productName || !productPrice || !productModel || !productQuantity || !productImage) {
        isValid = false;
        alert('Please fill in all required fields.');
    }

    if (select === 'phone' && !productColor) {
        alert('Please select a color for the phone.');
        isValid = false;
    } else if (select === 'laptop' && (!productProcessor || !productRam)) {
        alert('Please select a processor and RAM for the laptop.');
        isValid = false;
    } else if (select === 'tablet' && (!productSize || !productBattery)) {
        alert('Please select a size and battery for the tablet.');
        isValid = false;
    }

    return isValid;
}





function getFormValue() {
    const select = document.getElementById('select').value;

    const productName = document.getElementById('product-name').value.trim();
    const productPrice = document.getElementById('product-price').value.trim();
    const productModel = document.getElementById('model').value.trim();
    const productQuantity = document.getElementById('product-quantity').value.trim();
    const productImage = document.getElementById('product-image').value.trim();
    const productColor = document.getElementById('product-color') ? document.getElementById('product-color').value.trim() : ''; 
    const productProcessor = document.getElementById('product-processor') ? document.getElementById('product-processor').value.trim() : '';
    const productRam = document.getElementById('product-ram') ? document.getElementById('product-ram').value.trim() : '';
    const productSize = document.getElementById('product-size') ? document.getElementById('product-size').value.trim() : '';
    const productBattery = document.getElementById('product-battery') ? document.getElementById('product-battery').value.trim() : '';

    if (validateInputs()) {
        return {
            select,
            productName,
            productPrice,
            productModel,
            productQuantity,
            productImage,
            productColor,
            productProcessor,
            productRam,
            productSize,
            productBattery
        };
    }
    return null;
}




function getProductBasedOnType(formValue) {
    const { select, productName, productPrice, productModel, productQuantity, productImage, productColor, productProcessor, productRam, productSize, productBattery } = formValue;

    switch (select) {
        case 'phone':
            return new Phones(productName, productPrice, productModel, productQuantity, productImage, productColor);
        case 'laptop':
            return new Laptops(productName, productPrice, productModel, productQuantity, productImage, productProcessor, productRam);
        case 'tablet':
            return new Tablets(productName, productPrice, productModel, productQuantity, productImage, productSize, productBattery);
        default:
    
            return null;  
    }
}



function createProductList(event) {
    event.preventDefault();

    const formValue = getFormValue();
    if (formValue) {
        const product = getProductBasedOnType(formValue); 
        
        if (product) {
            let productList = JSON.parse(localStorage.getItem('productList')) || [];
            productList.push(product);

            localStorage.setItem('productList', JSON.stringify(productList)); 
        

            displayProduct(product, '.createdBox');

            
        }
    }

    event.target.reset();
}







