class FamiliarService {

    constructor(familiarRepository) {
        this.familiarRepository = familiarRepository;
    }
    
    obterPorId(id) {
        return this.familiarRepository.findById(id);
    }

    cadastrar() {

    }

    atualizar() {

    }

    deletar() {

    }
}

module.exports = FamiliarService;