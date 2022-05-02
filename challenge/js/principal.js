document.getElementById('copy').addEventListener('click', function() {/* adicionando um evento 
                                                                         para quando o botão de cópia for
                                                                         acionado*/
    document.getElementById('second').select();

    document.execCommand('copy'); // atribuindo o comando de cópia ao botão

    document.getElementById('second').value = ''; // após a cópia, o campo de resultado receberá um valor nulo
})

// alterando os caracteres especiais e com acento, assim evitando que a criptografia passe com acentos etc...
function remover_acentos_espaco(str) {
    /* aqui foi usado da função normalize para remover os acentos das palavras e também foi utilizado
    de expressões regulares (/[^a-zA-Z\s]/) o que remove todos os caracteres especiais */
    return str.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}

// pegando do DOM o meu botão de criptografia e adicionando o evento para quando ele for clicado
var btnAdd = document.getElementById('crypto').addEventListener('click', function(event){
    // chamando minha função para remover do texto, todos os caracteres indesejados!
    var input = remover_acentos_espaco(document.getElementById('first').value);
    var convert = input.replace(/e/g, 'enter');
    convert = convert.replace(/i/g, 'imes');
    convert = convert.replace(/a/g, 'ai');
    convert = convert.replace(/o/g, 'ober');
    convert = convert.replace(/u/g, 'ufat');

    document.getElementById('second').value = convert;// atribuindo o valor do campo de texto primário para o secundário 
    document.getElementById('first').value = '';// em seguida ele recebe um valo nulo

})

var btnRmv = document.getElementById('uncrypto').addEventListener('click', function (event) {
    // como a função já foi chamada, ela não precisa ser chamada novamente!
    var input = remover_acentos_espaco(document.getElementById('first').value);
    var convert = input.replace(/imes/g, 'i');
    convert = convert.replace(/enter/g, 'e');
    convert = convert.replace(/ai/g, 'a');
    convert = convert.replace(/ober/g, 'o');
    convert = convert.replace(/ufat/g, 'u');

    document.getElementById('second').value = convert;
    document.getElementById('first').value = '';
})
