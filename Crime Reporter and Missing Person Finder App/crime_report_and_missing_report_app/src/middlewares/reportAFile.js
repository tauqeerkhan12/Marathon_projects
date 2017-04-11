
import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';

export default class reportAFile {

    static reportAFile(fullInfo) {

        return (dispatch) => {
            if (fullInfo.selectedReportType != 0) {

                if (fullInfo.selectedReportType != '' && fullInfo.selectedArea != '' && fullInfo.selectedTitle != '' && fullInfo.selectedDiscription != '') {

                    firebase.database().ref('/' + fullInfo.selectedArea + '/' + fullInfo.selectedReportType).push(fullInfo)
                    dispatch(ActionBundle.ADD_ME_TO_LIST());
                }
                else {
                    dispatch(ActionBundle.INVALID_FIELDS())
                }
            }
            else {
                dispatch(ActionBundle.INVALID_FIELDS())
            }

        }
    }
}

