
const INITIAL_STATE = {
    complaintTab: [],
    missingTab: [],
    crimeTab: [],
    totalComplaint: 0,
    totalMissing: 0,
    totalCrimes: 0,
    Total: 0
}

export default function Tabs(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SHOW_DATA_ON_TABS':
            console.log(action.complaintOBJ, action.missingOBJ, action.crimeOBJ);
            return Object.assign({}, state, { complaintTab: action.complaintOBJ, missingTab: action.missingOBJ, crimeTab: action.crimeOBJ })

        case 'TOTAL_REPORTS':
            console.log(action.totalComp, action.totalMiss, action.totalCri, action.total);
            return Object.assign({}, state, { totalComplaint: action.totalComp, totalMissing: action.totalMiss, totalCrimes: action.totalCri, Total: action.total })

        default:
            return state
    }
}