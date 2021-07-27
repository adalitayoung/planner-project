let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index')
let userRoute = require('../api-routes/user');

chai.use(chaiHttp);

describe("User API", function() {
    const user = {
        firstName:"Test",
        lastName:"User",
        email:"testuser@gmail.com"
    }
    describe ("Create User", function() {
        it("returns status 200", (done) => {
            chai.request(server)
                .post('/users/createUser')
                .set('content-type', 'application/json')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
            
        });
    })
})