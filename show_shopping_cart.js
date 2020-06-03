let productsInShoppingCartDiv = document.querySelector('#products-in-shopping-cart-div');

const localStorageArray = JSON.parse(localStorage.getItem('products'));

if (localStorageArray != null) {

    for(let i = 0; i < localStorageArray.length; i++) {

        productsInShoppingCartDiv.innerHTML += '<div class="product">';
        productsInShoppingCartDiv.innerHTML += '<div class="product-image-div">';                                   
        productsInShoppingCartDiv.innerHTML += '<img src="' + localStorageArray[i].picture + '"> ';
        productsInShoppingCartDiv.innerHTML += '<alt="' + localStorageArray[i].name + '" />';
        productsInShoppingCartDiv.innerHTML += '</div>';
        productsInShoppingCartDiv.innerHTML += '<p><b>' + localStorageArray[i].name + '</b><br>';
        productsInShoppingCartDiv.innerHTML += localStorageArray[i].price + ':-</p>';
        productsInShoppingCartDiv.innerHTML += '</div>';
    }
    
    function sumOfPricesInShoppingCart() {
            
        let priceSum = 0;
    
        for(let i = 0; i < localStorageArray.length; i++) {
            priceSum += localStorageArray[i].price;
        }
    
        return priceSum;
    };
    
    priceSumH3 = document.querySelector('#price-sum-h3');
    
    priceSum = sumOfPricesInShoppingCart();
    priceSumH3.textContent = "Sum total: " + priceSum + ":-";
    
    let productsInShoppingCartH2 = document.querySelector('#products-in-shopping-cart-h2');
    let orderBtn = document.querySelector('#order-btn');
    let orderBtnDiv = document.querySelector('#order-btn-div');
    
    orderBtn.addEventListener('click', function(event){
        localStorage.clear();
        productsInShoppingCartH2.textContent = "YOUR ORDER:";
        productsInShoppingCartDiv.innerHTML = "You have ordered products to a sum of " + priceSum + ":-.";
        priceSumH3.textContent = '';
        orderBtnDiv.innerHTML = '';
    });
}
