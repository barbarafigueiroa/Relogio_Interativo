function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var mensagem = window.document.getElementById("mensagem")
var quadradao =  window.document.getElementById("quadradao")//criei esse objeto caso eu queira mudar a cor da section
var data = new Date()
var hora= data.getHours()
//var hora = 15
msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
if (hora >=0 && hora <12){
    img.src = "manhã.png"
    document.body.style.background = "#F5D05E"
    mensagem.innerHTML = "Bom dia !!!"
}else if (hora >=12 && hora < 18){
    img.src = "tarde.png"
    document.body.style.background = "#FFC194"
    mensagem.innerHTML = "Boa tarde !!!"
}else{
    img.src = "noite.png"
    document.body.style.background = "#394D6B"
    mensagem.innerHTML = "Boa noite !!!"
}
}
