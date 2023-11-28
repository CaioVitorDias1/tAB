

var listaEmails = ['andre@gmail.com', 'caio@gmail.com','ian@gmail.com']

function verificacaoEmail(){
    var email = document.getElementById('email-input').value;

    if (listaEmails.includes(email)) {
        // Se o email estiver registrado, exibir o conteúdo protegido
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
    } else {
        // Se o email não estiver registrado, exibir uma mensagem de erro (ou redirecionar para outra página)
        alert('Email não registrado. Tente novamente.');
    }

}