import * as firebase from 'firebase';
import ActionBundle from '../../actions/actionbundle.js';


export default class loginMiddleware {

    static login(data) {

        return (dispatch) => {

            var refer = firebase.database().ref();
            refer.once('value', (snap) => {
                snap.forEach((usersnap) => {
                    var nameInfo = usersnap.val().userName;
                    var passInfo = usersnap.val().userPass;

                    if (data.USERNAME === nameInfo && data.PASSWORD === passInfo) {
                        // checkForLogin = true;
                        localStorage.setItem("locallySavedName", data.USERNAME);
                        console.log("yes");
                        dispatch(ActionBundle.IS_USER_CORRECT(true))
                    }
                    else{
                        dispatch(ActionBundle.IS_USER_CORRECT(false))
                    }
                })

            })

        }

    }
}