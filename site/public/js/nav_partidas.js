for(var i = 0; i< 12; i++){
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (numeroAleatorio  == 1){
        nav_partidas.innerHTML +=`<a href="./partidas/partidaCSHeroic.html"><table><tr><th>CS:GO</th><th></th></tr><tr><td>Furia</td><td class="placar">16 (2)</td></tr><tr><td>Heroic</td><td>10 (1)</td></tr></table></a>`;
    }
    else if(numeroAleatorio == 2){
        nav_partidas.innerHTML +=`<a href="./partidas/partidaCSCloud9.html"><table><tr><th>CS:GO</th><th></th></tr><tr><td>Furia</td><td class="placar">16 (2)</td></tr><tr><td>Cloud 9</td><td>7 (0)</td></tr></table></a>`;
    }
    else if(numeroAleatorio == 3){
        nav_partidas.innerHTML += `<a href="./partidas/partidaRLM80.html"><table><tr><th>RL</th><th></th></tr><tr><td>Furia</td><td class="placar">6 (3)</td></tr><tr><td>M80 </td><td>3 (0)</td></tr></table></a>`;
    }
}