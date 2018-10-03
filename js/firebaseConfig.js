let data, request, dataBase;

let config = {
    apiKey: "AIzaSyAHA3_RBr7YuAoJdYAzi5bihv50dlQhN6c",
    authDomain: "myevents-2038f.firebaseapp.com",
    databaseURL: "https://myevents-2038f.firebaseio.com",
    projectId: "myevents-2038f",
    storageBucket: "myevents-2038f.appspot.com",
    messagingSenderId: "1013107234594"
};
firebase.initializeApp(config);

function getDataFromDB() {
    return new Promise(function(resolve, reject) {
        let dbRef = firebase.database().ref();
        dataBase = firebase.database();
        dbRef.on('value', function(snap) {
            if(firebase) {
            data = snap.val();
            resolve(data);
            }
            else {
                const reason = new Error('On maitenance');
                reject(reason);
            }
        });
    })
};