function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5)) //se só mandar 1 numero, da msg de NaN. Para resolver:

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma (7)) // valor de n2 considerou 0.