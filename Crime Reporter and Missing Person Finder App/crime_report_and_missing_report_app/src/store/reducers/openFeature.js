
const INITIAL_STATE = {
    decideToShow: 'none',
    signIN: 'block',
    signOUT: 'none'
}

export default function OpenFeature(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SHOW_COMPLAINT':
            return Object.assign({}, state, { decideToShow: 'block', signIN: 'none', signOUT: 'block' })

        case 'RESET':
            return Object.assign({}, state, { decideToShow: 'none', signIN: 'block', signOUT: 'none' })

        default:
            return state
    }
}