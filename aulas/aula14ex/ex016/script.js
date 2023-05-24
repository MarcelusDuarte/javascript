function contar(){
    // pegando os controles dos campos
    // as variaveis não vão existir quando sairem desse bloco

    var ini = document.getElementById('itxti')
    var fim = document.getElementById('itxtf')
    var passo = document.getElementById('itxtp')
    var res = document.getElementById('res')

    // Primeira coisa é verificar se os dados estão faltando

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando.. <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) { // Atribuindo p = 1 caso se insira o valor 0
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            //Contagem crescente
           for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} ` 
            }  
        } else {
            //Contagem regressiva
            for(var c = i; c > f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }   
        }
        res.innerHTML += `\u{1F3C1}`
    }
}



    
