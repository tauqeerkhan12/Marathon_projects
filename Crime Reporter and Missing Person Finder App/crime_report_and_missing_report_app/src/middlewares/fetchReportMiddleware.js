
import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';

export default class fetchReportMiddleware {

    static fetchReport(cityName) {

        return (dispatch) => {

            var complaint = [];
            var missing = [];
            var crime = [];

            var refer = firebase.database().ref('/' + cityName);
            refer.on('value', (snap) => {
                snap.forEach((snapShot) => {
                    if (snapShot.key === 'Complaint') {
                        snapShot.forEach((snp) => {
                            complaint.push(snp.val())
                        })
                    }
                    else if (snapShot.key === 'Missing') {
                        snapShot.forEach((snp) => {
                            missing.push(snp.val())
                        })
                    }
                    else if (snapShot.key === 'Crime') {
                        snapShot.forEach((snp) => {
                            crime.push(snp.val())
                        })
                    }
                })
                // console.log(crime, missing, complaint);
                dispatch(ActionBundle.SHOW_DATA_ON_TABS(complaint, missing, crime));
            })

        }
    }

}
