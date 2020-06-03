const productsForShoppingCartArray = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

//console.log(productsForShoppingCartArray);

let productsDiv = document.getElementById('products-div');

const xhr = new XMLHttpRequest;

xhr.onload = function() { 

    if(xhr.status === 200) {

        let responseObject = JSON.parse(xhr.responseText);

        productsDiv.innerHTML = '';

        const btnArray = [];
        const productArray = [];
        const productDivArray = [];
        const productImageDivArray = [];
        const productImageArray = [];
        const productNameArray = [];
        const productPriceArray = [];

        for(let i = 0; i < responseObject.products.length; i++) {

            productArray[i] = responseObject.products[i];

            productDivArray[i] = document.createElement('div');
            productDivArray[i].className = "product-div";
            productDivArray[i].id = '"product-div-nr-' + (i+1) + '"';
            productsDiv.appendChild(productDivArray[i]);

            productImageDivArray[i] = document.createElement('div');
            productImageDivArray[i].classList.add = 'product-image-div';
            productImageDivArray[i].id = '"product-image-div-nr-' + (i+1) + '"';
            productDivArray[i].appendChild(productImageDivArray[i]);

            productImageArray[i] = document.createElement('img');
            productImageArray[i].classList.add = 'product-image';
            productImageArray[i].id = '"product-image-nr-' + (i+1) + '"';
            productImageArray[i].alt = productArray[i].name;
            productImageArray[i].src = productArray[i].picture;
            productImageDivArray[i].appendChild(productImageArray[i]);

            productNameArray[i] = document.createElement('p');
            productNameArray[i].classList.add = 'product-name';
            productNameArray[i].id = '"product-name-nr-' + (i+1) + '"';
            productNameArray[i].textContent = productArray[i].name;
            productDivArray[i].appendChild(productNameArray[i]);

            productPriceArray[i] = document.createElement('p');
            productPriceArray[i].classList.add = 'product-price';
            productPriceArray[i].id = '"product-price-nr-' + (i+1) + '"';
            productPriceArray[i].textContent = productArray[i].price + ':-';
            productDivArray[i].appendChild(productPriceArray[i]);

            btnArray[i] = document.createElement('button');
            btnArray[i].id = "btn_nr_" + (i+1);

            //console.log(btnArray[i]);

            btnArray[i].addEventListener('click', function(event) {

                productsForShoppingCartArray.push(responseObject.products[i]);
                localStorage.setItem('products', JSON.stringify(productsForShoppingCartArray));
                //console.log("Hej"); 
            })

            productDivArray[i].appendChild(btnArray[i]);
            btnArray[i].textContent = "Add to shopping cart";
            

            //productsDiv.innerHTML += '</div>';

        }

        //document.getElementById('products-div').innerHTML;

    }
};

xhr.open('GET', 'json/jsondata.json', true);
xhr.send(null);