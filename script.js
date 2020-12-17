let switchInput = document.querySelector('.switch');
let checkBox = document.querySelector('.checkbox');

let price_1 = document.querySelector('.price-1');
let price_2 = document.querySelector('.price-2');
let price_3 = document.querySelector('.price-3');


const changePrices = () =>{
    if (checkBox.checked === true){
        price_1.textContent = '19.99';
        price_2.textContent = '24.99';
        price_3.textContent = '39.99';

    }else{
        price_1.textContent = '199.99';
        price_2.textContent = '249.99';
        price_3.textContent = '399.99';
    }
}

switchInput.addEventListener('click', changePrices);