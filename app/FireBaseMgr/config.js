// Import the functions you need from the SDKs you need
let admin = require('firebase-admin');
module.exports.admin=admin;
module.exports.initdb=async ()=>{

 const firebaseConfig = require ('./homeserverDBConfig.json');
// Initialize Firebase database

	admin.initializeApp({
	  credential: admin.credential.cert(firebaseConfig),
	  databaseURL: "https://databaseName.firebaseio.com"
	});
	
}

//function name:getAddress
//input arguments:none
//return value:none
//logs: Home address
module.exports.getAddress=async()=>{
	var db = admin.firestore();
	const ref =  await db.collection("HomeInfo").doc('HomeData').get()
	//console.log(ref.data())
	
	return ref.data();
}


//function name:getSensorData
//input arguments:none
//return value:none
//logs: Home Temperature
module.exports.getSensorData=async()=>{
	var db = admin.firestore();
	const ref =  await db.collection("HomeInfo").doc('Sensors').get()
	console.log(ref.data())
	return ref.data();
}