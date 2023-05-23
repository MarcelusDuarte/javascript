function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // vai pegar o ano com 4 digitos
    var fano = window.document.getElementById('itxtano') // vai pegar o ano que veio do formulario (que foi digitado pelo usuario)
    var res = window.document.getElementById('res')
    //var res = window.document.querySelector('div#res') opção mais moderna mas funciona da mesma forma
    if (fano.value.length == 0 || Number(fano.value) > ano) { //verifica se a caixa esta vazia ou se é maior que o ano atual
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // radsex [0] é a bolinha masculino e radsex[1] é a bolinha feminino. Precisa indicar qual é pois ambos sao radsex
        var idade = ano - Number(fano.value) //calcula ano atual - ano digitado
        //res.innerHTML = `idade calculada ${idade}` -> testando funcionalidade da calculadora de ano
        var gênero = ''

        //criar img dinamicamente. Existem outras formas de fazer
        var img = document.createElement('img') //cria tag img
        img.setAttribute('id', 'foto')//coloca id para a tag img. Criou img com id='foto'

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'foto-criança-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-adoles-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'foto-criança-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-adoles-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulta-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center' //texto centralizado com JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos </br>`
        res.appendChild(img) //insere a imagem abaixo do res.innerHTML
    }
}