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

    
})