const FamiliarService = require('../src/services/FamiliarService');
const Familiar = require('../src/models/Familiar');
const { NaoEncontradoErro, AplicacaoErro, ModeloInvalidoErro } = require('../src/erros/TypeErros');

describe('FamiliarService', () => {
    let repositoryMock;
    let service;

    beforeEach(() => {
        repositoryMock = {
            findById: jest.fn(),
            findByIdentidadeAscendente: jest.fn(),
            findByIdentidade: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new FamiliarService(repositoryMock);
    });

    describe('obterPorId', () => {
        it('deve lançar erro se familiar não encontrado', () => {
            repositoryMock.findById.mockReturnValue(null);
            expect(() => service.obterPorId(1)).toThrow(NaoEncontradoErro);
        });

        it('deve retornar familiar com descendentes', () => {
            const familiar = { id: 1, identidade: '123', descendentes: [] };
            const descendentes = [{ id: 2, identidadeAscendente: '123' }];

            repositoryMock.findById.mockReturnValue(familiar);
            repositoryMock.findByIdentidadeAscendente.mockReturnValue(descendentes);

            const result = service.obterPorId(1);

            expect(result).toEqual({
                id: 1,
                identidade: '123',
                descendentes,
            });
            expect(repositoryMock.findByIdentidadeAscendente).toHaveBeenCalledWith('123');
        });
    });

    describe('cadastrar', () => {
        it('deve lançar erro se identidade duplicada', () => {
            const familiar = { identidade: '123' };
            repositoryMock.findByIdentidade.mockReturnValue({ id: 1, identidade: '123' });

            expect(() => service.cadastrar(familiar)).toThrow(ModeloInvalidoErro);
        });

        it('deve cadastrar familiar quando identidade não existe', () => {
            const familiar = { identidade: '456', nome: 'Novo' };
            const saved = { id: 2, ...familiar };

            repositoryMock.findByIdentidade.mockReturnValue(null);
            repositoryMock.save.mockReturnValue(saved);

            const result = service.cadastrar(familiar);

            expect(result).toBeInstanceOf(Familiar);
            expect(result.id).toBe(2);
            expect(repositoryMock.save).toHaveBeenCalledWith(familiar);
        });

        it('deve lançar erro se save falhar', () => {
            const familiar = { identidade: '789' };
            repositoryMock.findByIdentidade.mockReturnValue(null);
            repositoryMock.save.mockReturnValue(null);

            expect(() => service.cadastrar(familiar)).toThrow(AplicacaoErro);
        });
    });

    describe('atualizar', () => {
        it('deve lançar erro se familiar não encontrado', () => {
            const familiar = { id: 1 };
            repositoryMock.findById.mockReturnValue(null);

            expect(() => service.atualizar(familiar)).toThrow(NaoEncontradoErro);
        });

        it('deve lançar erro se update falhar', () => {
            const familiar = { id: 1 };
            repositoryMock.findById.mockReturnValue(familiar);
            repositoryMock.update.mockReturnValue(null);

            expect(() => service.atualizar(familiar)).toThrow(AplicacaoErro);
        });

        it('deve atualizar familiar com sucesso', () => {
            const familiar = { id: 1, nome: 'Atualizado' };
            repositoryMock.findById.mockReturnValue(familiar);
            repositoryMock.update.mockReturnValue(familiar);

            const result = service.atualizar(familiar);

            expect(result).toBe(familiar);
            expect(repositoryMock.update).toHaveBeenCalledWith(familiar);
        });
    });

    describe('deletar', () => {
        it('deve lançar erro se familiar não encontrado', () => {
            repositoryMock.findById.mockReturnValue(null);

            expect(() => service.deletar(1)).toThrow(NaoEncontradoErro);
        });

        it('deve deletar familiar com sucesso', () => {
            repositoryMock.findById.mockReturnValue({ id: 1 });
            repositoryMock.delete.mockReturnValue(true);

            const result = service.deletar(1);

            expect(result).toBe(true);
            expect(repositoryMock.delete).toHaveBeenCalledWith(1);
        });
    });
});
