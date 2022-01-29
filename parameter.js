function bringSingara(taka) {
    console.log('sungara jonno taka dice', taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log('ai nen singara');