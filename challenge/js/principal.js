document.getElementById('copy').addEventListener('click', function() {/* adicionando um evento 
                                                                         para quando o botão de cópia for
                                                                         acionado*/
    document.getElementById('text-result').select();

    document.execCommand('copy'); // atribuindo o comando de cópia ao botão

    document.getElementById('text-result').value = 'TEXTO COPIADO COM SUCESSO!'; // após a cópia, o campo de resultado receberá um valor nulo
})

// alterando os caracteres especiais e com acento, assim evitando que a criptografia passe com acentos etc...
function remover_acentos_espaco(str) {
    /* aqui foi usado da função normalize para remover os acentos das palavras e também foi utilizado
    de expressões regulares (/[^a-zA-Zs]/) o que remove todos os caracteres especiais */
    return str.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}

// pegando do DOM o meu botão de criptografia e adicionando o evento para quando ele for clicado
var btnAdd = document.getElementById('crypto').addEventListener('click', function(event){
    // chamando minha função para remover do texto, todos os caracteres indesejados e transformando tudo o que for maiusculo em minusculo .toLowerCase();!
    var input = remover_acentos_espaco(document.getElementById('main-text').value.toLowerCase());
    var convert = input.replace(/e/g, 'enter');
    convert = convert.replace(/i/g, 'imes');
    convert = convert.replace(/a/g, 'ai');
    convert = convert.replace(/o/g, 'ober');
    convert = convert.replace(/u/g, 'ufat');

    document.getElementById('text-result').value = convert;// atribuindo o valor do campo de texto primário para o secundário 
    document.getElementById('main-text').value = '';// em seguida ele recebe um valor nulo

})

var btnRmv = document.getElementById('uncrypto').addEventListener('click', function (event) {
    // como a função já foi chamada, ela não precisa ser chamada novamente!
    var input = document.getElementById('main-text').value;
    var convert = input.replace(/imes/g, 'i');
    convert = convert.replace(/enter/g, 'e');
    convert = convert.replace(/ai/g, 'a');
    convert = convert.replace(/ober/g, 'o');
    convert = convert.replace(/ufat/g, 'u');

    document.getElementById('text-result').value = convert;
    document.getElementById('main-text').value = '';
})