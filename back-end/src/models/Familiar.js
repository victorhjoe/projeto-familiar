class Familiar {
    constructor(obj) {
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.dataNascimento = obj.dataNascimento;
        this.identidade = obj.identidade
        this.idAscendente = obj.idAscendente;
        this.descendentes = [];
    }
}

module.exports = Familiar;