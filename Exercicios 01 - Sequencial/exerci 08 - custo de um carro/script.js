var fabrica = 20000;
var p_distribuidor = (30*fabrica/100);
var imposto = (45*fabrica/100);
var valor_carro_total = (fabrica+p_distribuidor+imposto);  


console.log("O valor do carro sem impostos e sem porcentagem do distribuidor: "+fabrica);
console.log("Taxa do distribuidor: "+p_distribuidor);
console.log("Taxa de imposto sobre fabrica: "+imposto);
console.log("Custo do carro para o consumidor final: "+valor_carro_total);