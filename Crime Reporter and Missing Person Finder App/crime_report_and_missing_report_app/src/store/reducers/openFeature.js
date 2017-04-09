
const INITIAL_STATE = {
    decideToShow: 'none'
}

export default function OpenFeature(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SHOW_COMPLAINT':
            return state = {decideToShow: 'block'}

        case 'RESET': 
            return state = {decideToShow: 'none'}

        default:
            return state
    }
}