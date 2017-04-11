
const INTIAL_STATE = {
    forGreen: "none",
    forRed: "none"
}

export default function validation(state = INTIAL_STATE, action) {

    switch (action.type) {

        case 'ADD_ME_TO_LIST':

            return state = { forGreen: 'block', forRed: 'none' }

        case 'OFF_ALERT':
            return state = { forGreen: 'none', forRed: 'none' }

        case 'INVALID_FIELDS':
            return state = { forGreen: 'none', forRed: 'block' }

        case 'CRIME_INFO':
        
            return state = { forGreen: 'block', forRed: 'none' }
        default:
            return state;
    }

}