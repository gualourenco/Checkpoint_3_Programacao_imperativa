const {Aluno} = require('./aluno.js');

const estudantes = [
    new Aluno('Fulano Humberto', 0, [10, 10, 10]),
    new Aluno('Fulano Doisberto', 1, [7, 8, 9]),
    new Aluno("Fulano Tresberto", 2, [8, 6, 9]),
    new Aluno("Fulano Quarberto", 3, [5, 5, 4]),
    new Aluno("Fulano Cinberto", 4, [5, 5, 5]),
    new Aluno("Fulano Seisberto", 5, [5, 5, 6]),
    new Aluno("Fulano Setberto", 6, [6, 6, 6]),
    new Aluno("Fulano Oiberto", 7, [5, 5, 8]),
    new Aluno("Fulano Norberto", 8, [5, 5, 9]),
    new Aluno("Fulano Dezberto", 9, [5, 5,  10]),
]

module.exports.estudantes = estudantes;
