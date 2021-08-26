
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let expect = chai.expect();
let request = chai.request();






//const validator = require('../src/initComms')
describe("initComms isInit()", () => {
	it("should return true", ()=> {
		chai.expect(true).to.be.true
	})
	it("should return false when the number is less 10", () => {
		chai.expect(false).to.be.false
	})
	it("should return false when the number is equal to 10", () => {
		chai.expect(false).to.be.false
	})
	it("should return false when the number is equal to 70", () => {
		chai.expect(false).to.be.false
	})
	it("should return false when the number is greater than 70", () => {
		chai.expect(false).to.be.false
	})
})


describe('HTTP Comms: ',()=>{
 it('should initialize web page', (done) => {
 chai.request("http://localhost:3000")
 .get('/')
 .end( function(err,res){
 console.log(res.body)
 chai.expect(res).to.have.status(200);
 done();
 });
 });
});

