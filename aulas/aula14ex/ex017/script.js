function tabuada() {
    //pega todos os elementos
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //limpa o campo select antes de iniciar novo ciclo
        while(c <= 10) {
            var item = document.createElement('option') // Cria o elemento option pois a tabuada se encontra em um select, que precisa do option
            item.text = `${n} x ${c} = ${n*c}` //estrutura de cada item do campo select
            item.value = `tab${c}` // importante para outras linguagens, como PHP. Os itens precisam ter value em outras linguagens 
            tab.appendChild(item) //mostra os elementos. Adiciona o elemento filho
            c++
        }
    }
}