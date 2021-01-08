const BaseRepository = require("./base.repository");
let _user=null;
class CommentRepository extends BaseRepository{
    constructor({ Comment }){
        super(Comment);
        _user = Comment;
    }

    
}

module.exports = CommentRepository;