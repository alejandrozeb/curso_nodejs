const {generateToken} = require("../helpers/jwt.helper");
let _userService = null;

class AuthService{
    constructor({UserService}){
        _userService= UserService;
    }
    async signUp(user){
        const {username} = user;
        const userExits = await _userService.getUserByUsername(username);
        if(!userExits){
            const error = new Error();
            error.status = 401;
            error.message = "User already exist";
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user){
        const {username, password} = user;
        const userExits = await _userService.getUserByUsername(username);
        if(!userExits){
            const error = new Error();
            error.status = 404;
            error.message = "User does not exist";
            throw error;
        }

        const validPassword = userExits.comparePasswords(password);
        if(!validPassword){
            const error = new Error();
            error.status = 400;
            error.message = "Invalid password";
            throw error;
        }

        const userToEncode = {
            username: userExits.username,
            id: userExits._id,
        };

        const token = generateToken(userToEncode);//generamos el token con dicho usuario

        return {token, user: userExits};
    }



}

module.exports = AuthService;