
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let expect = chai.expect();
let request = chai.request();


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

