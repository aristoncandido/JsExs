

var m = [];

linhas = 4;
colunas = 5;

for (i = 0; i < linhas; i++) {
  m[i] = [];

  for (j = 0; j < colunas; j++) {
    if (i == 0) {
      // primeira linha que é Múltiplo de 2

      m[i][j] = j * 2;
    } else if (i == 1) {
      ///segunda linha Múltiplo de 3

      m[i][j] = j * 3;
    } else if (i == 2) {
      //terceira linha Múltiplo 4

      m[i][j] = j * 4;
    } else if (i == 3) {
      //Quarta linha Múltiplo de 5

      m[i][j] = j * 5;
    }
  }
}

console.log(m);
