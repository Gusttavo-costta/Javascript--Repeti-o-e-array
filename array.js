// array 
// metodo 1 

var frutas = array();
frutas[0] = "morango";
frutas[1] = "Pessego";
frutas[2] = "Kiwi";
frutas[3] = "abacate";

console.log(frutas);

// metodo 2 

var legumes = ["repolho","alface","cenoura","brocolis"];
console.log(legumes);
console.log(legumes[2]);

// comandos do array
// adicionar elementos no fim do array

frutas.push("uva");
console.log(frutas);

// adicionar elementos no começo do array

frutas.unshift(laranja);
console.log(frutas);

// remover elementos do fim do array

frutas.pop();   //pop vai tirar sempre o último elemento do array.
console.log(frutas);

// remover elementos no fim do array

frutas.shift();
console.log(frutas);

// adicionar elementos no meio do array 
// SLICE (Indice, quantos indices ele vai sobrescrever, dados)

frutas.slice(2,0,"abacaxi"); // o zero não vai sobrescrever ninguem
frutas.slice(3,1,"Goiaba");
frutas[0] = "Jabuticaba";
console.log(frutas);