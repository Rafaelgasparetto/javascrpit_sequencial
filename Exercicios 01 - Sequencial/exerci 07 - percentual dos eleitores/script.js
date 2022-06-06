var eleitores = 5000;
var brancos = 600;
var nulos = 400;
var validos = eleitores-brancos-nulos;

console.log("Total de eleitores: "+eleitores);

console.log("Percentual de votos brancos: "+(brancos/eleitores*100)+"%");

console.log("Percentual de votos nulos: "+(nulos/eleitores*100)+"%");

console.log("Percentual de votos validos: "+(validos/eleitores*100)+"%");
