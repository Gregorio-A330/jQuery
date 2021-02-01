//Aguarda o documento carregar para executar o jQuery
$(document).ready(function () {


    $("h1").addClass("big-title margin-50");
    //Adiciona uma ou mais classes ao h1 e abaixo remove a classe
    //$("h1").removeClass("big-title"); ou $("h1").removeClass("big-title margin-50"); 


    //alterando o "innerHtml" e colocando tags 
    //$("button").html("<em>hey</em>")

    //alterando texto com jQuery
    $("button").text("Dont click me")

    //altera o atributo exemplo <img src="imagem.jpg">....
    //
    console.log($("img").attr("src"));
    //
    //aqui vai pegar o conteudo do atributo e jogar no log, vai dar erro porque não tem imagem atribuida
    //
    $("a").attr("href")
    //no primeiro caso se comporta como metodo GETTER e o segundo como SETTER 
    $("a").attr("href", "https://www.yahoo.com")
    //seleciona todos os anchor tag, pega o atributo HREF e seta com o segundo parametro que é o link
    $("h1").attr("class")
    //retorna os valores de atributo do elemento HTML como metodo GETTER e mostra as classes atribuidas

    //adicionando eventListenet
    $("h1").click(function () {
        //criando função anonima com callback function
        $("h1").css("color", "pink")
    })

    //adicionando eventListener para todos os botões
    /*for (var i = 0; i < 5; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function () {
            document.querySelector("h1").style.color = "purple"
        })
    }*/

    $("button").click(function () {
        $("h1").css("color", "purple")
    })


    //qualquer tecla que voce clicar dentro do input ele vai jogar dentro do parametro da callback function e voce acessa
    //ele pelo "evento".key o evento é o que foi definido como recebimento de parametro, que no caso é o que voce pressionar
    //no teclado dentro do input e no console.log será demonstrado via event.key 
    $("input").keypress(function (event) {
        console.log(event.key)
         //como teste qualquer tecla que for pressionada irá alterar o texto de H1
        $("h1").text(event.key)
    })
    // metodo .on pode ser inserido qualquer tipo de evento 
    $("h1").on("mouseover",function(){
        $("h1").css("color", "blue")
    })

})