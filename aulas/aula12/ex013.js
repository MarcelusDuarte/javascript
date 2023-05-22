/*
var agora = new Date() //pega a hora atual do sistema em que esta rodando o script
var hora = agora.getHours() // pode pegar a hora, min, dia, etc
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
} */

var agora = new Date()
var diaSem = agora.getDay() //Pega o dia da semana segundo a t abela abaixo. Mostra o numero do dia
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break
}