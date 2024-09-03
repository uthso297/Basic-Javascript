const mobile ={
    brand: 'Samsung',
    price: 3400,
    color: 'blue',
    camera: '50mp',
    isNew: true,
}

// for of: array
// for in: object
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':',mobile[key]);
}

const pencil = new Object()
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);