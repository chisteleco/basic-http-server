let firebase= require('../config.js');

const auth = firebase.admin.auth();
module.exports.auth=auth;

// signInWithCustomToken(auth, token)
  // .then((userCredential) => {
    // // Signed in
    // const user = userCredential.user;
    // // ...
  // })
  // .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // ...
  // });
  


module.exports.signIn=(auth, email, password)=>{
// auth.signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
    // // Signed in
    // const user = userCredential.user;
    // // ...
  // })
  // .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  // });
  
  auth.getToken();
}
  
module.exports.signOut=(auth)=>{
auth().signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}