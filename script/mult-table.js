
/* 1- Colocar os dados em variáveis */
/* 2- Executar uma função após apertar o btnn */
/* 3- Fazer o loop pra gerar as respostas */
/* 4- Guardar as informações de cada loop em uma variavel */
/* 5- Encerrar o loop e apresentar os dados do loop na tela */

var numberAnswer = document.getElementById("answer-question");
const button = document.getElementById('button');
const caseMultipleTable = document.getElementById('element-case-mult-table'); /* container */
const containerMultTable = document.querySelector('.sub-case-mult-table');
const containerMensageWarning = document.querySelector('.container-warning-mensage');
var isActiveCaseMult = false;


const btnBackMainScreen = document.querySelector('.container-icon-open-menu');
btnBackMainScreen.addEventListener('click', () => {
    window.location.href = "../index.html";
});


button.addEventListener('click', () => {
    var arrayNumberMultiTable = "";
    let number;

    caseMultipleTable.innerHTML = arrayNumberMultiTable;
    /* Calcular a tabuada com o numero dado pelo usuário */
    /* Validators */
    if (numberAnswer.value.length <= 0) {
        containerMultTable.classList.remove('hidden');
        containerMensageWarning.classList.remove('hidden');
        containerMultTable.classList.add('appear');
        containerMensageWarning.classList.add('appear');


    } else if (!numberAnswer.value.length == 0)  {
        for (let i = 0; i <= 10; i++) {
            number = numberAnswer.value * i;
            arrayNumberMultiTable += numberAnswer.value + " X " + i + " = " + number + "<br>";
            isActiveCaseMult = false;
        }

        if (!isActiveCaseMult) {
            containerMensageWarning.classList.remove('appear');
            containerMensageWarning.classList.add('hidden');
            containerMultTable.classList.remove('hidden');
            containerMultTable.classList.add('appear');
            caseMultipleTable.innerHTML = arrayNumberMultiTable;
        }
    }     

    containerMultTable.style.animation = "";
    setTimeout(() => {
        containerMultTable.style.animation = "faded 1s cubic-bezier(0.25, 0.1, 0.36, 0.69)"        
    }, 5)
})
