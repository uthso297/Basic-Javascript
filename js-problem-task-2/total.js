const products = [
    { name: 'Shampoo', price: 300 },
    { name: 'Chiruni', price: 100 },
    { name: 'Mug', price: 30 },
    { name: 'Shirt', price: 1200 },

]

function getTotalCost(products){
    let total =0;

    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getTotalCost(products);
console.log("Total cost: ",total);