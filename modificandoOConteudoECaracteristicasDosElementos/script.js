//usando o .text para substituir o texto do h1.
// console.log($("h1").text("Lista de Compras"));


//usando o .html para substituir o texto do h1.
// console.log($("h1").html("Lista de Compras 2"));


//usando o .find para substituir o texto, filtrando com o .text.
// console.log($("#lista1").find(".item2").text("novo item"));


//usando o .find para substituir o texto, filtrando com o .html.
// console.log($("#lista1").find(".item4").html("novo item4"));


//usando o .html para criar tag's html para substituir outras tag's já criadas. 
// console.log($("#lista1").html("<li> Novo Item A</li> <li> Novo Item B</li> <li> Novo Item C</li>"));


//alterando o valor do input.
// console.log($("#novo").val("Arroz"));


//alterando o name do input.
// console.log($("#novo").attr("name", "Item de Compra"));


//usando funcao para alterar o name como um array.
// console.log($("li").attr("name", function (i) {
//   return "Item " + i;
// }));


//usando funcao para alterar o name como um array.
// $("li").attr("name", (i, oValue) => {


//   return oValue + i;
// })


//usando o maxlength no imput para colocar um limite de caracteres na entrada do input.
// $("input").attr("maxlength", 5)


//chaining > usando o attr para alterar o type para password.
// $("input").attr("maxlength", 5).attr("type", "password");
