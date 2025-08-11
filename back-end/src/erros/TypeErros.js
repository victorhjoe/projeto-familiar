const ModeloInvalidoErro = class ModeloInvalidoErro {

    /**
     * Classe utilizada para exceções de modelos e dtos
     * @param {Number} status 
     * @param {String} mensagem 
     */
    constructor(status, mensagem){
        this.status = status || 400;
        this.message = mensagem || 'O modelo informado é invalido';
        this.name = 'ModeloInvalido';
        this.stack = (new Error()).stack
    }
}

const NaoEncontradoErro = class NaoEncontradoErro {

    /**
     * Classe utilizada para exceções de objetos ou recursos não encontrados.
     * @param {Number} status 
     * @param {String} mensagem 
     */
    constructor(status, mensagem){
        this.status = status || 404;
        this.message = mensagem || 'Não encontrado';
        this.name = 'NaoEncontrado';
        this.stack = (new Error()).stack
    }
}

const AplicacaoErro = class AplicacaoErro {

    /**
     * Classe utilizada para exceções de modelos e dtos.
     * @param {Number} status 
     * @param {String} mensagem 
     */
    constructor(status, mensagem){
        this.status = status || 500;
        this.message = `Erro interno na aplicação ${mensagem && '- ' + mensagem}`;
        this.name = 'Aplicacao';
        this.stack = (new Error()).stack
    }
}

module.exports = {
    ModeloInvalidoErro,
    NaoEncontradoErro,
    AplicacaoErro
}