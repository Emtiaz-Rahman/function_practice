var computer = {
    price: 20000,
    storage: '200gb',
    color: 'black',
    processor: 'intel i5'
}
computer.price = 15000;
console.log(computer);
computer['color'] = 'silver';
console.log(computer);
