/* 1- Colocar os dados em variáveis */
/* 2- Executar uma função após apertar o btnn */
/* 3- Fazer o loop pra gerar as respostas */
/* 4- Guardar as informações de cada loop em uma variavel */
/* 5- Encerrar o loop e apresentar os dados do loop na tela */

var numberAnswer = document.getElementById("answer-question");
const button = document.getElementById('button');
const containerMultTable = document.querySelector('.sub-case-mult-table');
const caseMultipleTable = document.getElementById('element-case-mult-table'); /* container */
var isActiveCaseMult = false;

button.addEventListener('click', () => {
    var arrayNumberMultiTable = "";
    let number;
    /* Calcular a tabuada com o numero dado pelo usuário */
    for (let i = 0; i <= 10; i++) {
        number = numberAnswer.value * i;
        arrayNumberMultiTable += numberAnswer.value + " X " + i + " = " + number + "<br>";
        isActiveCaseMult = false;
    }
    if(!isActiveCaseMult) {
        containerMultTable.classList.remove('hidden')
        containerMultTable.classList.add('appear')
        caseMultipleTable.innerHTML = arrayNumberMultiTable;
    }

    containerMultTable.style.animation = "";
    setTimeout(() => {
        containerMultTable.style.animation = "faded 1s cubic-bezier(0.25, 0.1, 0.36, 0.69)"        
    }, 5)
})
