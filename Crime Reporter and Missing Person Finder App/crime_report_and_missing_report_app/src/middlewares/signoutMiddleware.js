


import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';

export default class signoutMiddleware {

    static SIGNOUT() {

        return (dispatch) => {

            firebase.auth().signOut().then(function () {
                    console.log('Signout successful!')
                }, function (error) {
                    console.log('Signout failed')
                });
            
            dispatch(ActionBundle.RESET())
            localStorage.removeItem('locallySavedName');

        }
    }

}
