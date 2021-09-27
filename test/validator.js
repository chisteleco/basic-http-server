
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


//home section testing

describe('Home Comms: ', () => {
    it('should initialize home', (done) => {
        chai.request("http://localhost:3000/home")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize about', (done) => {
        chai.request("http://localhost:3000/home/about")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize info', (done) => {
        chai.request("http://localhost:3000/home/info")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                
                done();
            });
    });

    it('should publish home address', (done) => {
        chai.request("http://localhost:3000/home/info")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res.body).to.deep.equal({ "Address": "Santander 6 BA" });

                done();
            });
    });


    
});



//pool section testing

describe('pool Comms: ', () => {
    it('should initialize pool', (done) => {
        chai.request("http://localhost:3000/pool")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize about', (done) => {
        chai.request("http://localhost:3000/pool/about")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize info', (done) => {
        chai.request("http://localhost:3000/pool/info")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });
});


//garden section testing

describe('Garden Comms: ', () => {
    it('should initialize home', (done) => {
        chai.request("http://localhost:3000/garden")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize about', (done) => {
        chai.request("http://localhost:3000/garden/about")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('should initialize info', (done) => {
        chai.request("http://localhost:3000/garden/info")
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                chai.expect(res).to.have.status(200);
                done();
            });
    });
});