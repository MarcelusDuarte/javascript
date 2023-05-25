let array = []
var res = document.getElementById('res')

function adicionar() {

    let num = document.getElementById('inum')
    let tab = document.getElementById('idados')
    let numero = Number(num.value)
    if (numero < 1 || numero > 100 || numero.length == 0) {
        alert('Valor inválido!')
    } else {
        var existe = 
        array.push(numero)
        //alert(array)
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        tab.appendChild(item)
    }
}
function finalizar() {
    
    array.sort()
    
    var quant = array.length
    var maior = array[(array.length)-1]
    var menor = array[0]
   
    var soma = 0
    var cont = 0

    while (cont < quant) {
        soma += array[cont]
        cont++
    }

    var media = soma/(quant)

    
    res.innerHTML += `<p>Ao todo, temos ${quant} números informados.</p>`
    res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

}






