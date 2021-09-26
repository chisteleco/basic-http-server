let dbMgr= require('./dbFunctions.js');


module.exports.getHomeData=async ()=> {

console.log('Home data retrieved from db')
let address=await dbMgr.getHomeData();
return address;
}