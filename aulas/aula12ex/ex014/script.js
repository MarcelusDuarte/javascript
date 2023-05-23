
function carregar() { //
    var msg = window.document.getElementById('msg') // cria variavel msg
    var img = window.document.getElementById('imagem') // cria variavel img
    var data = new Date() // pega a data do sistema
    var hora = data.getHours() // pega a hora do sistema
    msg.innerHTML = `Agora são ${hora} horas.` //substitui o texto colocado na div de id=msg
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png' // comando para inserir a foto
        document.body.style.background = '#f3e9dd'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fec59f' // comando para inserir background por JS
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#0f1021'
    }
}
