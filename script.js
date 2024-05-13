function addData() {
    // Recupera os valores do formulário
    var alerta = document.getElementById('alerta').value;
    var usuario = document.getElementById('usuario').value;
    var caminhodoarquivo = document.getElementById('caminhodoarquivo').value;
    var tipodecompartilhamento = document.getElementById('tipodecompartilhamento').value;
    var dataehora = document.getElementById('dataehora').value;


    // Cria um item de lista com os dados inseridos
    var listItem = document.createElement('li');
    listItem.innerHTML =  '<br><strong>ALERTA:</strong> ' + alerta + '<br>' +
                          '<br><strong>Usuário:</strong> ' + usuario + '<br>' +
                          '<br><strong>Caminho do arquivo:</strong> ' + caminhodoarquivo + '<br>' +
                          '<br><strong>Tipo de compartilhamento:</strong> ' + tipodecompartilhamento + '<br>' +
                          '<br><strong>Data e Hora:</strong> ' + dataehora + '<br>';

    // Adiciona o item à lista de dados
    document.getElementById('dataList').appendChild(listItem);

}
