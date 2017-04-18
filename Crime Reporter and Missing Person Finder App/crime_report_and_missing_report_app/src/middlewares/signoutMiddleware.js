
import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';
import countAllReports from '../middlewares/countAllReports.js';


export default class signoutMiddleware {

    static SIGNOUT() {

        return (dispatch) => {

            firebase.auth().signOut().then(function () {
                console.log('Signout successful!')
            }, function (error) {
                console.log('Signout failed')
            });

            dispatch(ActionBundle.RESET())
            dispatch(countAllReports.countAllReports())
            localStorage.removeItem('locallySavedName');

        }
    }

}
