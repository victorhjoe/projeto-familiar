const FamiliarService = require('../services/FamiliarService')
const FamiliarRepository = require('../repositories/FamiliarRepository');
const Familiar = require('../models/Familiar');


class FamiliarController {
    constructor() {
        this.familiarService = new FamiliarService(new FamiliarRepository());
    }

    obterTodos = (req, res) => {
        try {
            const familiares = this.familiarService.obterTodos();
            return res.json(familiares);
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json(error);
        }
    }

    obterPorId = (req, res) => {
        const { id } = req.params;

        try {
            if(!id) {
                throw new ModeloInvalidoErro(400, "O id é obrigatório para obter o familiar");
            }

            const familiar = this.familiarService.obterPorId(id);

            return res.json(familiar);
        } catch (error) {
            console.log(error);
            return res.status(error.status).json(error);
        }
    }

    adicionar = (req, res) => {
        try {
            let familiarReq = new Familiar(req.body);
            familiarReq.modeloValidoCadastro();

            let familiarCadastrado = this.familiarService.cadastrar(familiarReq);

            return res.json(familiarCadastrado);
        } catch (error) {
            console.log(error);
            return res.status(error.status).json(error);
        }
    }

    atualizar = (req, res) => {
        const { id } = req.params;

        try {
            if(!id) {
                throw new ModeloInvalidoErro(400, "O id é obrigatório para obter o familiar");
            }

            let familiarReq = new Familiar(req.body);
            familiarReq.id = id;
            familiarReq.modeloValidoAtualizacao();

            let familiarAtualizado = this.familiarService.atualizar(familiarReq);

            return res.json(familiarAtualizado);
        } catch (error) {
            console.log(error);
            return res.status(error.status).json(error);
        }
    }

    deletar = (req, res) => {
        const { id } = req.params;

        try {
            this.familiarService.deletar(id);
            
            return res.json({ mensagem: "Familiar deletado com sucesso!" })
        } catch (error) {
            console.log(error);
            return res.status(error.status).json(error);
        }
    }
}

module.exports = FamiliarController;