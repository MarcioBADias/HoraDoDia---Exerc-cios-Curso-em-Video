var msg = document.getElementById("msg");
var img = document.getElementById("imagem");
var foto = document.getElementById("foto");
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas`;
if (hora >= 0 && hora <= 12) {
    img.src = 'manha.png';
    document.body.style.background = "rgb(242, 199, 136)";
    //foto.innerHTML = "Bom dia!"
} else if (hora > 12 && hora <= 18) {
    img.src = 'tarde.png';
    document.body.style.background = "rgb(253, 133, 133)"
} else{
    img.src = 'noite.png';
    document.body.style.background = "rgb(42, 25, 103)"
}