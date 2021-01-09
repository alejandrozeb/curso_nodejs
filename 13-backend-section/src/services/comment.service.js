const BaseService = require("./base.service");
let _commentRepository = null;
let _ideaRepository= null;

class CommentService extends BaseService{
    constructor(CommentRepository, IdeaRepository){
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "IdeaID must be sent";
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = "Idea does not exist";
            throw error;
        }

        const {comments} = idea;

        return comments;
    }
}

module.exports= CommentService;