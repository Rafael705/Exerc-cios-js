function carregarFoto() {
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()


    mensagem.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha1.png'
        document.body.style.background ='##ffee05'
    }

    else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde1.png'
        document.body.style.background ='#ea6c55'
    }
    
    else{
        // BOA NOITE!
        img.src = 'noite1.png'
        document.body.style.background ='#473146'
    }

}   



