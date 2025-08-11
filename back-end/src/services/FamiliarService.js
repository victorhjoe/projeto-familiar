const { NaoEncontradoErro, AplicacaoErro } = require("../erros/TypeErros");
const Familiar = require("../models/Familiar");

class FamiliarService {

    constructor(familiarRepository) {
        this.familiarRepository = familiarRepository;
    }
    
    obterPorId(id) {
       let familiar = this.familiarRepository.findById(id);

       if(!familiar) {
            throw new NaoEncontradoErro(404, "Não foi possível encontrar o familiar pelo id " + id);
       }

       return familiar;
    }

    cadastrar(familiar) {
        let familiarCadastrado = this.familiarRepository.save(familiar);

        if(!familiarCadastrado) {
            throw new AplicacaoErro(500, 'Falha ao cadastrar o familiar');
        }

        return new Familiar(familiarCadastrado);
    }

    atualizar(familiar) {
       let familiarAtualizado = this.familiarRepository.findById(familiar.id);

        if(!familiarAtualizado) {
            throw new NaoEncontradoErro(404, "Não foi possível encontrar o familiar pelo id " + familiar.id);
        }

        familiarAtualizado = this.familiarRepository.update(familiar);

        if(!familiarAtualizado) {
            throw new AplicacaoErro(500, 'Falha ao atualizar o familiar');
        }

        return familiar;
    }

    deletar(id) {
       let familiarDeletado = this.familiarRepository.findById(id);

        if(!familiarDeletado) {
            throw new NaoEncontradoErro(404, "Não foi possível encontrar o familiar pelo id " + id);
        }

        familiarDeletado = this.familiarRepository.delete(id);

        return familiarDeletado;
    }
}

module.exports = FamiliarService;