const sala = Number(prompt(`Digite sua nota de atividades em sala de Arquitetura de Hardware e Software de 0 a 10:`));
const casa = Number(prompt(`Digite sua nota de atividades em casa de Arquitetura de Hardware e Software de 0 a 10:`));
const aprendizagem = Number(prompt(`Digite sua nota de situação de aprendizagem de Arquitetura de Hardware e Software de 0 a 10:`));
const avaliacao = Number(prompt(`Digite sua nota nas avaliações objetivas de Arquitetura de Hardware e Software de 0 a 10:`));

const atvsala = sala 
const atvcasa = casa
const atvaprendi = aprendizagem
const atvavaliacao = avaliacao

const notaFinal = (atvsala + atvcasa + atvaprendi + atvavaliacao) / 4

alert (`Sua media final da unidade de Arquitetura de hardware e Software é :${notaFinal.toFixed(2)}`);

//______________________________________________________________________________________

const sala2 = Number(prompt(`Digite sua nota de atividades em sala de Lógica Computacional:`));
const casa2 = Number(prompt(`Digite sua nota de atividades em casa de Lógica Computacional:`));
const aprendizagem2 = Number(prompt(`Digite sua nota de situação de aprendizagem de Lógica Computacional:`));
const avaliacao2 = Number(prompt(`Digite sua nota nas avaliações objetivas de Lógica Computacional:`));

const atvsala2 = sala2 
const atvcasa2 = casa2
const atvaprendi2 = aprendizagem2
const atvavaliacao2 = avaliacao2

const notaFinal2 = (atvsala2 + atvcasa2 + atvaprendi2 + atvavaliacao2) / 4

alert (`Sua media final da unidade de Lógica Computacional é :${notaFinal2.toFixed(2)}`);

//______________________________________________________________________________________

const sala3 = Number(prompt(`Digite sua nota de atividades em sala de Fundamento de banco de dados:`));
const casa3 = Number(prompt(`Digite sua nota de atividades em casa de Fundamento de banco de dados:`));
const aprendizagem3 = Number(prompt(`Digite sua nota de situação de aprendizagem de Fundamento de banco de dados:`));
const avaliacao3 = Number(prompt(`Digite sua nota nas avaliações objetivas de Fundamento de banco de dados:`));

const atvsala3 = sala3 
const atvcasa3 = casa3
const atvaprendi3 = aprendizagem3
const atvavaliacao3 = avaliacao3

const notaFinal3 = (atvsala3 + atvcasa3 + atvaprendi3 + atvavaliacao3) / 4

alert (`Sua media final da unidade de Fundamento de banco de dados é :${notaFinal3.toFixed(2)}`);

//______________________________________________________________________________________

const sala4 = Number(prompt(`Digite sua nota de atividades em sala de Metodologia e Desenvolvimento de Projetos de 0 a 10:`));
const casa4 = Number(prompt(`Digite sua nota de atividades em casa de Metodologia e Desenvolvimento de Projetos de 0 a 10:`));
const aprendizagem4 = Number(prompt(`Digite sua nota de situação de aprendizagem de Metodologia e Desenvolvimento de Projetos de 0 a 10:`));
const avaliacao4 = Number(prompt(`Digite sua nota nas avaliações objetivas de Metodologia e Desenvolvimento de Projetos de 0 a 10:`));

const atvsala4 = sala4 
const atvcasa4 = casa4
const atvaprendi4 = aprendizagem4
const atvavaliacao4 = avaliacao4

const notaFinal4 = (atvsala4 + atvcasa4 + atvaprendi4 + atvavaliacao4) / 4

alert (`Sua media final da unidade de Metodologia e Desenvolvimento de Projetos é:${notaFinal4.toFixed(2)}`);

alert (`Sua media final em Arquitetura de Hardware e Software é:${notaFinal}`);
alert (`Sua media final em Metodologia e Desenvolvimento de Projetos é:${notaFinal4}`);
alert (`Sua media final em Lógica Computacional é:${notaFinal2}`);
alert (`Sua media final em Fundamento de banco de dados é:${notaFinal3}`);
