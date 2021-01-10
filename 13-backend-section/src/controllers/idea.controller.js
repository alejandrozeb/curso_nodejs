let _ideaService = null;

class IdeaController {
    constructor({IdeaService}){
        _ideaService = IdeaService;
    }

    async get(req,res){
        const { ideaId } = req.params; //sadasd/asdasd/id
        const idea = await _ideaService.get(ideaId);

        return res.send(idea);
    }

    async getAll(req, res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async update(req,res){
        const {body} = req; 
        const {ideaId} = req.params;
        const updatedIdea = await _ideaService.update(ideaId,body);

        return res.send(updatedIdea);
    }

    async delete (req,res){
        const { ideaId } = req.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

}

module.exports = IdeaController;