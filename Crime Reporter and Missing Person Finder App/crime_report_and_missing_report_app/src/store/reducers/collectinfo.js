
import * as firebase from 'firebase';

const INTIAL_STATE = {
    forGreen: "none",
    forRed: "none"
}

export default function CollectInfo(state = INTIAL_STATE, action) {

    switch (action.type) {

        case 'ADD_ME_TO_LIST':
            // console.log(action.information);
            firebase.database().ref('/RegisteredUsers').push(action.information);

            return state = { forGreen: 'block', forRed: 'none' }

        case 'OFF_ALERT':
            return state = { forGreen: 'none', forRed: 'none' }

        case 'INVALID_FIELDS':
            return state = { forGreen: 'none', forRed: 'block' }

        case 'CRIME_INFO':
            console.log(action.reported_crime);
            return state = { forGreen: 'block', forRed: 'none' }
        default:
            return state;
    }

}