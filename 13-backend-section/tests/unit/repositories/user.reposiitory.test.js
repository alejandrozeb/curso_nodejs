const {UserRepository} = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const {User} = require("../../../src/models");

let {
    UserModelMock: {user,users}
} = require("../../mocks");

//grupo de tests

describe("User Repository Test", ()=>{
    //hook
    beforeEach(()=>{
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it("Should return a user by id", async () => {
        const _user = {...User};
        delete _user.password;
        mockingoose(User).toReturn(user, "findOne");
        //prepara la entidad

        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.get(_user._id);

        //asercion
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });
})