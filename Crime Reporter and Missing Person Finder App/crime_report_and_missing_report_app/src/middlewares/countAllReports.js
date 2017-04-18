

import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';
import { Store } from '../store/store.js';


export default class countAllReports {

    static countAllReports() {

        return (dispatch) => {
            var Total = 0;
            var missing = 0;
            var crimes = 0;
            var complaint = 0;

            firebase.database().ref('/').on('value', (citySnap) => {
                missing = 0; crimes = 0; complaint = 0;
                citySnap.forEach((cityOneByOneSnap) => {

                    cityOneByOneSnap.forEach((reports) => {
                        if (reports.key === 'Complaint' && Store.getState().OpenFeature.decideToShow == 'block') {

                            complaint = complaint + Object.keys(reports.val()).length
                        }
                        else if (reports.key === 'Crime') {

                            crimes = crimes + Object.keys(reports.val()).length
                        }
                        else if (reports.key === 'Missing') {

                            missing = missing + Object.keys(reports.val()).length
                        }
                    })
                })
                // console.log(missing, crimes, complaint);
                Total = complaint + missing + crimes;
                dispatch(ActionBundle.TOTAL_REPORTS(complaint, missing, crimes, Total));
            })

        }
    }

}






