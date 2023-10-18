//(chaining) encadeamento várias funcoes uma seguida da outra.(usando o jQuery).
let jq = $("#lista1").slideUp(2000)
                     .slideDown(2000)
                     .fadeOut(1000)
                     .fadeIn(1000);

console.log(jq);





//(chaining) encadeamento várias funcoes uma seguida da outra.(usando o javascript).
let objeto = {
  print10: function() {
    console.log(10);
    return this;
  },

  print20: function() {
    console.log(20);
    return this;
  }
}

objeto.print10().print20().print10().print20();;

