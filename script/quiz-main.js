const buttonQuiz = document.getElementById('button-quiz');
const caseQuestion = document.getElementById('random-question');
const caseStatusAnswerCorrect = document.querySelector('.correct')
const caseStatusAnswerWrong = document.querySelector('.wrong') 

var number,
numberRandom = [],
numberGenerate = [],
groupElementClick = [],
numberQuestion,
numberAnswer1, 
numberAnswer2,
answer,
bodyQuestion,
userAnswerOption;

var option1, option2, option3, option4;
option1 = document.querySelector('.option-1');
option2 = document.querySelector('.option-2');
option3 = document.querySelector('.option-3');
option4 = document.querySelector('.option-4');

const btnBackMainScreen = document.querySelector('.container-icon-open-menu');
btnBackMainScreen.addEventListener('click', () => {
    window.location.href = "../index.html";
});

function toGenrateListRandom(list) {
    while (list.length < 4){
        var random = Math.floor(Math.random() * 100);

        if (list.indexOf(random) == -1) {
                list.push(random);
        }
    } 
    return list;
}
function toRandomQuestion(max) {
    var random = Math.floor(Math.random() * max);
    return random;
} 

toGenrateListRandom(numberGenerate);

option1.innerHTML = numberGenerate[0];
option2.innerHTML = numberGenerate[1];
option3.innerHTML = numberGenerate[2];
option4.innerHTML = numberGenerate[3];

number = toRandomQuestion(4);

numberRandom = [option1, option2, option3, option4];
for (let i = 0; i <= number; i++) {
    numberQuestion = numberRandom[i];
}

numberAnswer1 = toRandomQuestion(20);
numberAnswer2 = toRandomQuestion(20);

answer = numberAnswer1 * numberAnswer2;

bodyQuestion = numberAnswer1 + " X " + numberAnswer2;
caseQuestion.innerHTML = bodyQuestion;
numberQuestion.innerHTML = answer;

window.onload = () => {
    var groupElementClick = document.querySelectorAll('.answers-element');

    for (let y = 0; y < groupElementClick.length; y++) {
        groupElementClick[y].addEventListener("click", function () {
            groupElementClick.forEach(elementChoide => {
                elementChoide.classList.remove('userAnswer');
            })
            this.classList.add('userAnswer');
            userAnswerOption = $(this).text();

            buttonQuiz.addEventListener('click', () => {
                if (userAnswerOption == answer) {
                    caseStatusAnswerCorrect.classList.remove('hidden')
                    caseStatusAnswerCorrect.classList.add('appear')
                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);
                }
                else {
                    caseStatusAnswerWrong.classList.remove('hidden')
                    caseStatusAnswerWrong.classList.add('appear')
                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);

                }
            });        
            
        });
    }
}





