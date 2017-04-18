
import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';
import countAllReports from '../middlewares/countAllReports.js';

export default class signInMiddleware {

    static SIGNIN() {

        return (dispatch) => {

            var provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                console.log(token)
                console.log(user.displayName)
                localStorage.setItem('locallySavedName', user.displayName)

                dispatch(ActionBundle.SHOW_COMPLAINT());
                dispatch(countAllReports.countAllReports())
            }).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            });

        }
    }

}
