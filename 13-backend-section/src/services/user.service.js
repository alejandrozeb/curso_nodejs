const { User } = require("../models");
const BaseService = require("./base.service");
let _userRepository = null;


class UserService extends BaseService{
    constructor(UserRepository){
        super(UserRepository);
        _userRepository = UserRepository;
    }

    async getUserByUsernam(username){
        return await _userRepository.getUserByUsername(username);
    }
}

module.exports= UserService;