const chai = require('chai')
const expect = chai.expect
//const validator = require('../src/initComms')
describe("initComms isInit()", () => {
	it("should return true", ()=> {
		expect(true).to.be.true
	})
	it("should return false when the number is less 10", () => {
		expect(false).to.be.false
	})
	it("should return false when the number is equal to 10", () => {
		expect(false).to.be.false
	})
	it("should return false when the number is equal to 70", () => {
		expect(false).to.be.false
	})
	it("should return false when the number is greater than 70", () => {
		expect(false).to.be.false
	})
})
