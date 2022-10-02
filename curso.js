const {estudantes} = require('./estudante.js');


let curso = {
  nome: "===== CTD =====",
  notaDeAprovacao: 7,
  faltasMaximas: 4,
  listaAluno: [],
  adcionarAluno(estudante) {
    
    for(i =0; i < estudante.length; i++){
    this.listaAluno.push(estudante[i]);
    }
  },
  verificaNotas(aluno) {
    if (
      aluno.calcularMedia() >= this.notaDeAprovacao &&
      aluno.quantFalta < this.faltasMaximas
    ) {
      return true;
    } else if ((aluno.quantFalta = this.faltasMaximas)) {
      if (
        aluno.calcularMedia() >
        this.notaDeAprovacao * 0.1 + this.notaDeAprovacao
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  listagemAprovados() {
    listagem = [];
    for (i = 0; i < this.listaAluno.length; i++) {
      alunoi = [
        this.listaAluno[i].nome,
        this.verificaNotas(this.listaAluno[i]),
      ];
      listagem.push(alunoi);
    }
    console.log("======= Lista geral de aprovados =======");
    return listagem;
  },
};


curso.adcionarAluno(estudantes);
console.table(curso.nome);
console.table(curso.listaAluno);
console.log(curso.verificaNotas(curso.listaAluno[1]));
console.table(curso.listagemAprovados());
