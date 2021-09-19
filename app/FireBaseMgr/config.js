// Import the functions you need from the SDKs you need
let admin = require('firebase-admin');

module.exports.initdb=async ()=>{

 const firebaseConfig = require ('./homeserverDBConfig.json');
// Initialize Firebase database

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://databaseName.firebaseio.com"
});


//console.log(admin)

var db = admin.firestore();

/*
const ref =  db.collection("HomeInfo").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {      
		console.log(doc._fieldsProto.Address.stringValue);
			}
		)
      }
	);
	*/
	
const ref =  await db.collection("HomeInfo").doc('HomeData').get()
console.log(ref.data())
		

const ref2 =  await db.collection("HomeInfo").doc('Sensors').get()
console.log(ref2.data())	
		
		
		
	
}

