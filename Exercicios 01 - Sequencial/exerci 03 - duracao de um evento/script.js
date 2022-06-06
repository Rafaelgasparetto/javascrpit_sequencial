/*var horas_evento;

var minutos_tempo;
var minutos_evento;
var minutos_total;

var segundos_tempo;
var segundos_evento;
var segundos_total;

horas_evento = 6;

minutos_tempo = 60;
minutos_evento = 30;
minutos_total = (horas_evento*minutos_tempo+minutos_evento);


segundos_tempo = 60; 
segundos_evento = 40;
segundos_total = minutos_total*segundos_tempo+segundos_evento;

console.log("O tempo de duração do evento foi de: "+horas_evento+" Horas "+minutos_evento+" Minutos"+" e "+segundos_evento+" Segundos");

console.log("Duração do evento em Horas: "+horas_evento);

console.log("Duração do evento em Minutos: "+minutos_total);

console.log("Duração do evento em Segundos: "+segundos_total);

*/

var evento = 7500;
var segundos = 60;
var minutos = 60;
var horas = 60;

var evento_minutos = (evento/minutos);
var evento_horas = parseInt (evento_minutos/horas);

console.log("total de segundos do evento: "+evento);

console.log("total de minutos do evento: "+evento_minutos);

console.log("total de horas no evento: "+evento_horas);







