import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBfm1rye9yESxV1XegFyvWKkyc52jumfwY",
    authDomain: "cjb-react-todo.firebaseapp.com",
    databaseURL: "https://cjb-react-todo.firebaseio.com",
    projectId: "cjb-react-todo",
    storageBucket: "cjb-react-todo.appspot.com",
    messagingSenderId: "422250541662"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
