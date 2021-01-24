$(document).ready(function () {
    $('#esconder').click(function () { // chama pela div #esconder
        $('h1').hide(); //esconde a tag
        //$('h1').css("color", "red"); // realizar alteração no css recebe dois parametros
        //$('#unico').css("color", "red"); // realiza alteração no css via ID
    });
    $('#azul').click(function () {
        $('p').css("color", "blue");
        /* $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow'); */
        $('#mensagem').text("Cor alterada com sucesso")
            .css({color: 'blue', border:'1px solid blue'})
            .fadeIn('fast')
            .delay(3000)
            .fadeOut('fast')
            .addClass('green')
    });
    $('#vermelho').click(function () {
        $('p').css("color", "red");
        /* $('p').fadeOut('fast');
        $('p').fadeIn(5000); */
        $('#mensagem').text("Cor alterada com sucesso")
        $('#mensagem').css('color', 'red')
        $('#mensagem').css('border', '1px solid red')
        $('#mensagem').fadeIn('fast')
        $('#mensagem').delay(3000)
        $('#mensagem').fadeOut('fast')
        
        $('#vermelho').removeClass('red')
    });

});

// linha 1 -> verifica se o documento está carregado para esecutar algo
// linha 2 -> ao clicar no botão executa a função onclick que contem outra função de esconder
// linha 3 -> esconde o h1 criado dentro de uma função 