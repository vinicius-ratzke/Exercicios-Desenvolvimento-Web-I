function myfunction(){
    var colunas = 7;
    var linhas = 7;
    var vazio= '';
    for(var i = 0; i<=colunas; i++){
      for (var j = 0; j<=linhas; j++) {
        if ((i + j) % 2 === 0) vazio += '#';
        else vazio += ' ';
      }
      vazio += '\n';
    }
    console.log(vazio);
  }
  myfunction();