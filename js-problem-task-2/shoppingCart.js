const products = [
    { name: 'Shampoo', price: 300 , quantity: 5},
    { name: 'Chiruni', price: 100 , quantity: 3},
    { name: 'Mug', price: 30 , quantity: 1},
    { name: 'Shirt', price: 1200 , quantity: 2},

]

function cartTotal(){
    let total =0;
    for(const product of products){
        total = total + (product.price*product.quantity);
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost); 