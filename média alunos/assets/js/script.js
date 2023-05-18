// *----------Objeto!
var aluno = {
    notas: {
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0,
        nota5: 0,
    },
    pesos: {
        peso1: 0,
        peso2: 0,
        peso3: 0,
        peso4: 0,
        peso5: 0,
    },
    media() {
        var media1 = (aluno.notas.nota1 + aluno.notas.nota2 + aluno.notas.nota3 + aluno.notas.nota4 + aluno.notas.nota5) / 5
        var valor = document.getElementById('valor')
        if (media1 >= 7) {
            valor.innerHTML = "A média do aluno foi: " + media1.toFixed(2) + ", sendo assim: Aprovado"
        }
        else if (media1 >= 5 && media1 <= 6.9) {
            valor.innerHTML = "A média do aluno foi: " + media1.toFixed(2) + ", sendo assim: Recuperação"
        }
        else if (media1 < 5) {
            valor.innerHTML = "A média do aluno foi: " + media1.toFixed(2) + ", sendo assim: Reprovado"
        }
    },
    mediaponderada() {
        var media2 = ((aluno.notas.nota1 * aluno.pesos.peso1) + (aluno.notas.nota2 * aluno.pesos.peso2) + (aluno.notas.nota3 * aluno.pesos.peso3) + (aluno.notas.nota4 * aluno.pesos.peso4) + (aluno.notas.nota5 * aluno.pesos.peso5)) / ((aluno.pesos.peso1 + aluno.pesos.peso2 + aluno.pesos.peso3 + aluno.pesos.peso4 + aluno.pesos.peso5))
        var valorp = document.getElementById('valorp')
        valorp.innerHTML = "A média Ponderada do aluno foi: " + media2.toFixed(2)
    }
}
// ? Atribuindo Valores!
var btn = document.getElementById('form')
btn.addEventListener('submit', function (event) {
    event.preventDefault()
    let form = new FormData(btn)
    let nota1 = form.get('nota1')
    aluno.notas.nota1 = parseFloat(form.get('nota1'))
    let nota2 = form.get('nota2')
    aluno.notas.nota2 = parseFloat(form.get('nota2'))
    let nota3 = form.get('nota3')
    aluno.notas.nota3 = parseFloat(form.get('nota3'))
    let nota4 = form.get('nota4')
    aluno.notas.nota4 = parseFloat(form.get('nota4'))
    let nota5 = form.get('nota5')
    aluno.notas.nota5 = parseFloat(form.get('nota5'))
    // ! Divisão Media e Media Ponderada
    let nota1mp = form.get('nota1')
    aluno.pesos.peso1 = parseFloat(form.get('nota1mp'))
    let nota2mp = form.get('nota2')
    aluno.pesos.peso2 = parseFloat(form.get('nota2mp'))
    let nota3mp = form.get('nota3')
    aluno.pesos.peso3 = parseFloat(form.get('nota3mp'))
    let nota4mp = form.get('nota4')
    aluno.pesos.peso4 = parseFloat(form.get('nota4mp'))
    let nota5mp = form.get('nota5')
    aluno.pesos.peso5 = parseFloat(form.get('nota5mp'))
    if (aluno.pesos.peso1 > 0) {
        aluno.mediaponderada()
    }
    else {
        aluno.media()
    }
})

// Todo-- Funcionalidades de Display!
var divform = document.getElementById('form')
var mediaA = document.getElementsByClassName('mediaA')[0]
var divall = document.getElementsByClassName('formcontent')[0]
var divpeso = document.getElementsByClassName('divpesoall')[0]
var btnclose = document.getElementById('btnclose')
mediaA.addEventListener('click', function () {
    divform.style.display = 'grid'
    divform.style.gridTemplateColumns = "1fr"
    divform.style.gap = "10px"
    divpeso.style.display = 'none'
    if (divpeso.style.display = 'none') {
        divall.style.gridTemplateColumns = "1fr"
    }
})
var mediaP = document.getElementsByClassName('mediaP')[0]
mediaP.addEventListener('click', function () {
    divform.style.display = 'grid'
    divpeso.style.display = 'flex'
    divpeso.style.flexDirection = 'column'
    divall.style.display = 'grid'
    divall.style.gridTemplateColumns = "1fr 1fr"
    divall.style.gap = "10px"
})
btnclose.addEventListener('click', function () {
    divform.style.display = 'none'
})
