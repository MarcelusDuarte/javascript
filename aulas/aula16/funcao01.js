function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(223)
//so funcionou depois que criou a chamada.
//não precisa de variavel. Pode fazer: console.log(parimpar(4))
console.log(res)