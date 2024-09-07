const phones = [
    {name: 'Samsung', price: 50000,camera: '12mp',color: 'black' },
    {name: 'Xiomi', price: 20000,camera: '12mp',color: 'black' },
    {name: 'Oppo', price: 30000,camera: '12mp',color: 'black' },
    {name: 'Walton', price: 10000,camera: '12mp',color: 'black' },
    {name: 'Iphone', price: 100000,camera: '12mp',color: 'black' },

];

function getCheapestPhones(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhones(phones);
console.log('Cheapest phone is: ',cheap);