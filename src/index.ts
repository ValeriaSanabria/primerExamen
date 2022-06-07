let dimensionArreglo: number = Number(
  prompt("Ingrese la dimension del arreglo")
);
let arreglo: number[] = new Array(dimensionArreglo);

function cargarArreglo(vCargar: number[], dimension: number) {
  let indice: number;
  for (indice = 0; indice < dimension; indice++) {
    vCargar[indice] = Math.floor(Math.random() * 100);
  }
}

function mostrarArreglo(vMostrar: number[], dimension: number) {
  let indice: number;
  for (indice = 0; indice < dimension; indice++) {
    console.log(vMostrar[indice]);
  }
}

function menorValor(entrada: number[]) {
  let total: number = entrada.length;
  let menor: number = 0;
  if (total > 0) {
    menor = entrada[0];
    if (total > 1) {
      for (let i = 0; i < total; i++) {
        if (entrada[i] < menor) menor = entrada[i];
      }
    }
  }
  console.log("Menor valor: " + menor);
}

cargarArreglo(arreglo, dimensionArreglo);
mostrarArreglo(arreglo, dimensionArreglo);
menorValor(arreglo);
