document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const url = 'https://script.google.com/macros/s/AKfycbw_82-DOh5gdLjMqi9rd5IKBAla1tvqjeJKM4MDaOrt8sRdMhT11bFqe6vHDBCqIOI-pA/exec'; // Substitua pelo URL do Google Apps Script

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes('sucesso')) {
            document.getElementById('mensagem').textContent = 'Chamado registrado com sucesso!';
            document.getElementById('mensagem').classList.add('sucesso');
            document.getElementById('chamadoForm').reset();
        } else {
            throw new Error('Erro ao registrar o chamado.');
        }
    })
    .catch(error => {
        document.getElementById('mensagem').textContent = 'Erro ao enviar o chamado. Tente novamente.';
        document.getElementById('mensagem').classList.add('erro');
        console.error('Erro:', error);
    });
});
