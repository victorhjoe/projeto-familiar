const { ModeloInvalidoErro } = require("../erros/TypeErros");

class Familiar {
    constructor(obj) {
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.dataNascimento = obj.dataNascimento;
        this.identidade = obj.identidade
        this.identidadeAscendente = obj.identidadeAscendente;
        this.descendentes = [];
    }

    modeloValidoCadastro() {
        let validação = !!(this.nome && this.dataNascimento && this.identidade);

        if(!validação) {
            throw new ModeloInvalidoErro(400, "Os campos nome, data de nascimento e identidade são obrigatórios.");
        }
    }

    modeloValidoAtualizacao() {
        let validação = !!(this.id && this.nome && this.dataNascimento && this.identidade);

        if(!validação) {
            throw new ModeloInvalidoErro(400, "Os campos id, nome, data de nascimento e identidade são obrigatórios.");
        }
    }
}

module.exports = Familiar;