const { database } = require('../database/memoryDB');

class FamiliarRepository {
    ultimoId = 0;

    findById(id) {
        return database.familiares.find(familiar => familiar.id == id);
    }

    findByIdentidadeAscendente(identidadeAscendente) {
        return database.familiares.filter(fam => fam.identidadeAscendente === identidadeAscendente);
    }

    findByIdentidade(identidade) {
        return database.familiares.find(fam => fam.identidade === identidade);
    }

    save(familiar) {
        this.ultimoId++;
        familiar.id = this.ultimoId;
        database.familiares.push(familiar);
        return familiar;
    }

    update(familiar) {
        const indexFamiliar = database.familiares.findIndex(f => f.id == familiar.id);
        if (indexFamiliar === -1) return null;

        database.familiares[indexFamiliar] = {...database.familiares[indexFamiliar], ...familiar};
        return database.familiares[indexFamiliar];
    }
    
    delete(id) {
        const indexFamiliar = database.familiares.findIndex(f => f.id == id);
        if (indexFamiliar === -1) return null;

        database.familiares.splice(indexFamiliar, 1);

        return true;
    }
}

module.exports = FamiliarRepository;