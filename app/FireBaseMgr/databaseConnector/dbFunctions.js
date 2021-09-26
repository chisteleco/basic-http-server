let firebase= require('../config.js');


module.exports.initDB=()=> {


console.log('Initializing database in firebase')
firebase.initdb();

}

module.exports.getAddress=async()=>{
	
	let data= await firebase.getAddress();
	return data;
}

module.exports.getSensorData=async ()=>{
	
	let data = await firebase.getSensorData();
	return data;
}

module.exports.closingDB=()=> {


console.log('Closing database')


}


