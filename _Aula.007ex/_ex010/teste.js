const num = document.getElementById('tabuada')
const tab = document.getElementById('seltab')
// const res = document.querySelector('#res');

function gerar(){

    res.style.color = 'black';

    if (num.value =='') {
        res.style.color = 'red'
        res.innerHTML = 'Por favor digete um número!'
    } else{
        let n = Number(num.value)
        res.innerHTML =''

        for (let c = 1; c <= 10;c++){
            // let item = document.createElement('option')
            res.innerHTML += `<p>${n} x  ${c} = ${n*c}</p>`
            // tab.appendChild(item)
            
        }
        
    }
}