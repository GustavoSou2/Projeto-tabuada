const caseMenu = document.querySelector('.container-menu');
const btnOpenMenu = document.querySelector('.container-icon-open-menu')
const btnCloseMenu = document.querySelector('.fa-close');
const groupItemMenu = document.querySelectorAll('.item-menu')

var statusMenu = false;


/* btnOpenMenu.addEventListener('click', () => {
    if(!statusMenu) {

    }
}) */

window.onload = () => {
    btnOpenMenu.addEventListener('click', function (){
        if(!statusMenu) {
            caseMenu.classList.remove('hidden-left');
            caseMenu.classList.add('appear-auto');
            btnOpenMenu.classList.add('hidden');
        }
        groupItemMenu.forEach( itemMenu => {
            itemMenu.style.animation = "";
            itemMenu.addEventListener('click', () => {
                caseMenu.classList.remove('appear-auto');
                caseMenu.classList.add('hidden-left');
                btnOpenMenu.classList.add('appear')
            })
            setTimeout(() => {
                itemMenu.style.animation = "moviItem .5s ease-in";
            }, 250);
        }) 

    });

    btnCloseMenu.addEventListener('click', () => {
        caseMenu.classList.remove('appear-auto');
        caseMenu.classList.add('hidden-left');
        btnOpenMenu.classList.add('appear')
    })
} 