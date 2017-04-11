
const INITIAL_STATE = {
    complaintTab: [],
    missingTab: [],
    crimeTab: []
}

export default function Tabs(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SHOW_DATA_ON_TABS':
            console.log(action.complaintOBJ, action.missingOBJ, action.crimeOBJ);
            return Object.assign({}, state, { complaintTab: action.complaintOBJ, missingTab: action.missingOBJ, crimeTab: action.crimeOBJ })

        default:
            return state
    }
}