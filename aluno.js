function Aluno(nome, quantFalta, notas){
    this.nome = nome;
    this.quantFalta = quantFalta;
    this.notas = notas;

}

Aluno.prototype.calcularMedia = function () {
  total = 0;
  for (n = 0; n < this.notas.length; n++) {
    total += this.notas[n];
  }
  return total / this.notas.length;
};

Aluno.prototype.faltas = function(){
    falta = 1;
    return `O ${this.nome} faltou. Total de  ${this.quantFalta += falta} falta(s)`;
};

module.exports.Aluno = Aluno;
