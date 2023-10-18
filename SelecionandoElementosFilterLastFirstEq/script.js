//aplicando o metodo filter, para filtrar elementos.
// let selected = $("div").filter(".div2");


//aplicando o metodo filter e children para selecionar somente os elementos filhos.
// let selected = $("#container2").children().filter(".div2")


//aplicando o metodo first para selecionar somente o primeiro elemento filho.
// let selected = $("#container2").children().first();


//aplicando o metodo first para selecionar somente o último elemento filho.
// let selected = $("#container2").children().last();


//aplicando o metodo not para selecionar todos os elementos menor o que tiver no filtro de not.
// let selected = $("#container2").children().not("#div8");


//aplicando o metodo eq para selecionar o elemento equivalente ao indice.
let selected = $("#container2").children().eq(3);


console.log(selected)