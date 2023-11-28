
function verificarEmail() {
    var email = document.getElementById('email-input').value;
    console.log('1')
    fetch('/verificarEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            // Se o email for válido, redirecionar para a página desejada
            window.location.href = '/paginaaudhihdua.html';
        } else {
            // Se o email não for válido, exibir uma mensagem de erro
            alert('Email não permitido. Tente novamente.');
        }
    })
    .catch((error) => {
        console.error('Erro ao enviar a requisição:', error);
    });
}