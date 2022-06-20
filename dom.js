
const btnPlus = document.querySelectorAll('#plus');
const btnMinus = document.querySelectorAll('#minus');
const qte = document.querySelectorAll('.qte');
const sum = document.querySelector('#total-sum');
const prix = document.querySelectorAll('.price');
const like = document.querySelectorAll('#li');
const dislike = document.querySelectorAll('#di');


//***************************the plus event********************
for (let i = 0; i <= btnPlus.length - 1; i++) {
    btnPlus[i].addEventListener('click', function () {
        qte[i].textContent++;
        sum.textContent = parseInt(sum.textContent) + parseInt(prix[i].textContent)

    })
};

//*******************************the minus event****************** :
for (let i = 0; i <= btnMinus.length - 1; i++) {
    btnMinus[i].addEventListener('click', function () {

        if (sum.textContent > 0 && qte[i].textContent > 0) {
            sum.textContent = parseInt(sum.textContent) - parseInt(prix[i].textContent)
        }

        if (qte[i].textContent > 0) {
            qte[i].textContent--;
        }
    })
}

//**********************the like event *******************************
for (let i = 0; i <= like.length - 1; i++) {
    like[i].addEventListener('click', function () {

        dislike[i].style.filter = 'invert(80%)'
        like[i].style.filter = 'invert(61%) sepia(73%) saturate(7472%) hue-rotate(344deg) brightness(97%) contrast(90%)';


    })
}
//**********************the dislike event *******************************

for (let i = 0; i <= dislike.length - 1; i++) {
    dislike[i].addEventListener('click', function () {
        like[i].style.filter = 'invert(80%)'
        dislike[i].style.filter = 'brightness(100%)'

    })
}

//*********************init function **************************** */
function init() {
    document.querySelector('#total-sum').textContent = '0';
    for (let i = 0; i <= qte.length - 1; i++) {
        qte[i].textContent = '0';
        like[i].style.filter = 'invert(80%)'
        dislike[i].style.filter = 'invert(80%)'
    }
 /*    for (let i = 0; i <= like.length - 1; i++) {
        
    }
    for (let i = 0; i <= dislike.length - 1; i++) {
       
    } */

}
init();
