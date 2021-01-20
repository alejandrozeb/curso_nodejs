//base para un crud

class BaseRepository{
    constructor(model){
        this.model = model;
    }

    async get(id){
        //documetno de mongo
        return await this.model.findById(id);
    }

    async getAll(pageSize = 5, pageNum = 1){
        //skip cuantos elementos debe saltar limit limita los elementos que retorna
        const skips= pageSize*(pageNum - 1);
        return await this.model
        .find()
        .skip(skips)
        .limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }
    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;