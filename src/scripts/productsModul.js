export class Products {
    #productName = '';
    #price = 0;
    #model = '';
    #quantity = 0;
    #imageUrl = '';  

    
    constructor(productName, price, model, quantity,  imageUrl) {
        this.#productName = productName;
        this.#price = price;
        this.#model = model;
        this.#quantity = quantity;
        this.#imageUrl = imageUrl;
    }

    get productName() {
        return this.#productName;
    }

    set productName(value) {
        this.#productName = value;
    }

    
    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        this.#model = value;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#quantity = value;
    }

    toJSON(){
        return{
            productName: this.#productName,
            price: this.#price,
            model: this.#model,
            quantity: this.#quantity,
            imageUrl: this.#imageUrl

        }
    }
   

    get imageUrl() {
        return this.#imageUrl;
    }

    set imageUrl(value) {
        this.#imageUrl = value;
    }

    
    displayImage() {
        return this.#imageUrl ? `<img src="${this.#imageUrl}"  class="product-image" />` : '';
    }

   
    getDetails() {
        return `Product Name: ${this.#productName}, Price: $${this.#price}, Quantity: ${this.#quantity}`;
    }
}

export class Phones extends Products {
    #color = '';
    
    constructor(productName, price, model, quantity, imageUrl, color, ) {
        super(productName, price, model, quantity,  imageUrl); 
        this.#color = color;
    }

  
    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    getDetails() {
        return `${super.getDetails()}, Color: ${this.#color}`;
    }

    toJSON(){
        return{
            ...super.toJSON(),
            color: this.#color
        }
    }

    
}

export class Laptops extends Products {
    #processor = '';
    #ram = '';

    constructor(productName, price, model, quantity,  imageUrl, processor, ram) {
        super(productName, price, model, quantity,  imageUrl); 
        this.#processor = processor;
        this.#ram = ram;
    }

    
    get processor() {
        return this.#processor;
    }

    set processor(value) {
        this.#processor = value;
    }

   
    get ram() {
        return this.#ram;
    }

    set ram(value) {
        this.#ram = value;
    }

    
    getDetails() {
        return `${super.getDetails()}, Processor: ${this.#processor}, RAM: ${this.#ram}`;
    }

    toJSON(){
        return{
            ...super.toJSON(),
            processor: this.#processor,
            ram: this.#ram
        }
    }

    
}

export class Tablets extends Products {
    #screenSize = '';
    #battery = '';

    
    constructor(productName, price, model, quantity,  imageUrl, screenSize, battery) {
        super(productName, price, model, quantity,  imageUrl); 
        this.#screenSize = screenSize;
        this.#battery = battery;
    }

   
    get screenSize() {
        return this.#screenSize;
    }

    set screenSize(value) {
        this.#screenSize = value;
    }

    
    get battery() {
        return this.#battery;
    }

    set battery(value) {
        this.#battery = value;
    }

    getDetails() {
        return `${super.getDetails()}, Screen Size: ${this.#screenSize}, Battery: ${this.#battery}`;
    }
    toJSON(){
        return{
            ...super.toJSON(),
            screenSize: this.#screenSize,
            battery: this.#battery
        }
    }
}



