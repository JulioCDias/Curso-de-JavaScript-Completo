var p = document.getElementsByTagName("p"); // pego os elementos com a tag p
alert(p.length);
// no caso p é um objeto assim sendo ele possui propriedades
alert(p[0].innerHTML) // lendo elementos especifico com inner html e indece de elemento[]

p[3].innerHTML = "Manipulado via JS!";

for (var i = 0; i < p.length; i++) {
    p[i].innerHTML = "Manipulado via JS - " + i;
}