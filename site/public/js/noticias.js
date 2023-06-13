for(var i = 0; i< 4; i++){
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (numeroAleatorio  == 1){
        noticias.innerHTML +=`<a href="./noticias/noticia1.html" style="background-image: url(../assets/noticia1.jpg);background-position:80%;background-size: cover;">noticia 1</a>`;
    }
    else if(numeroAleatorio == 2){
        noticias.innerHTML +=`<a href="./noticias/noticia2.html" style="background-image: url(../assets/noticia2.jpg);background-position:80%;background-size: cover;">noticia 2</a>`;
    }
    else if(numeroAleatorio == 3){
        noticias.innerHTML += `<a href="./noticias/noticia3.html" style="background-image: url(../assets/noticia3.png);background-position:80%;background-size: cover;">noticia 3</a>`;
    }
}