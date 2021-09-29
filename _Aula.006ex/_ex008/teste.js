function  verificar(){
    var data = new Date();

    var ano =  data.getFullYear();
    var nasc = document.getElementById('ano');
    var res = document.querySelector('#res');

    
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        alert('Dados inválidos, tente novamente')

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 12) {
                //criança
               img.setAttribute('src', 'criançaH.png')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src', 'jovemH.png')
            }
            else if(idade<59){
                //adulto
                img.setAttribute('src', 'adultoH.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosoH.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criançaM.png')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }
            else if(idade<59){
                //adulto
                img.setAttribute('src', 'adultoM.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosaM.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
        
}