//Pegando os controles básicos
let num = document.querySelector('input#ifnum')
let lista = document.querySelector('select#iflista')
let res = document.querySelector('div#res')
let valores = [] //vetor que será usado para analisar os dados


//função que vai validar se o dado inserido é um numero
function isNumero(n) { 
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//função que vai analisar se o numero digitado está na lista
function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {// verifica se na lista o elemento indice (numero(n)) existe (ou seja, retorno diferente de -1). Se não existir, retorna true
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //so adiciona o elemento se for true. A ! quer dizer NÃO, em JS
        valores.push(Number(num.value))

        //adiciona elementos inseridos na linha anterior no select
        let item = document.createElement('option') 
        item.text = `Valor ${num.value} adicionado` //não precisa converter pq vai ficar como string
        lista.appendChild(item)//adicionando na lista

        res.innerHTML = '' //quando adicionar outro elemento após finalizar, ele apaga o resultado para finalizar novamente
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus() //volta o cursor automaticamente para o campo numero para digitar
}

function finalizar() {
    if(valores.length == 0) { // se vetor estiver vazio
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length //numero de elementos do vetor

        //procurando o maior e o menor numero do vetor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //Analisando, um por um, todos os elementos e descobrindo que é o maior e o menor. Usamos o mesmo laço para somar todos os valores
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]   
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}