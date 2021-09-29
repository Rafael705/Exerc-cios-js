const inicio = document.querySelector('#txti');
const fim = document.querySelector('#txtf');
const passo = document.querySelector('#txtp');
const res = document.getElementById('res');

function conferir() {

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value);

    var emoji = '\u{21FD}'
    var emoji2 = `\u{21FE}`
    var flag =  '\u{1F3C1}'

    if (p<=0) {
        p = 1
    }
    


    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        res.style.color = 'red';
        res.innerHTML = '[ERROR] Preencha todos os dados';
    }

     else{
        res.innerHTML = 'Contando:  <br>';
        res.style.color =  'black';

        if (i>f) {
            // decresente

            for (let c = i; c>=f; c-= p){
                res.innerHTML += `<span>${c} ${emoji}  </span>`
            }
            res.innerHTML += `${flag}`
        }   

        else {
            // cresente
            
            for (let c = i; c <= f; c += p){
                res.innerHTML += `<span>${c} ${emoji2}</span> `;
            }
            res.innerHTML += `${flag}`
        }
    }     
}   

