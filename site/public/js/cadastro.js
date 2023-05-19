function cadastrar() {


    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var modalidadeVar = document.querySelector('input[name = "modalidade"]:checked').value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || modalidadeVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        
        return false;
    }
    else {
        setInterval(5000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            modalidadeServer: modalidadeVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

            limparFormulario();
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
    });

    return false;
}   