let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#fnum')
let res = document.querySelector('#res')
let valores = []

function adicionarnum(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        
        let item = document.createElement('option');
        item.text = `Valor ${num.value} foi adicionado`;
        lista.appendChild(item);
        res.innerHTML =''

    } else{
        res.style.color = 'red'
        res.innerHTML = 'Valor inválido ou ja existente na lista'
    }
    num.value = '';
    num.focus();

}

// função construtora
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } 
    else{
        return false
    }
}

// função construtora
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } 
    else{
        return false
    }
}

function finalizar() {
    if (valores.length == '') {
        alert('Adicione valores antes de finalizar');

    }
    else{
        let total = valores.length;
        res.innerHTML =''
        res.style.color ='green'
        res.innerHTML += `<p>Ao todo temos ${total} elementos adicionados.</p>` 
        
    }
}

