const { database } = require('../database/memoryDB');

class FamiliarRepository {
    ultimoId = 0;

    findById(id) {
        return database.familiares.find(familiar => familiar.id == id);
    }

    save(familiar) {
        ultimoid++;
        familiar.id = ultimoid;
        database.familiares.push(familiar);
        return familiar;
    }

    update(id,familiar) {
        const indexFamiliar = database.familiares.findIndex(f => f.id == id);
        if (index === -1) return null;

        database.familiares[indexFamiliar] = {...database.familiares[indexFamiliar], ...familiar};
        return database.familiares[indexFamiliar];
    }
    
    delete(id) {
        const indexFamiliar = database.familiares.findIndex(f => f.id == id);
        if (index === -1) return null;

        db.users.splice(index, 1);

        return true;
    }
}

module.exports = FamiliarRepository;