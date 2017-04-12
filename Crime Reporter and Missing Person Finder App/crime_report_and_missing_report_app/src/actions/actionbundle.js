
export default class ActionBundle {

    static ADD_ME_TO_LIST() {
        return {
            type: 'ADD_ME_TO_LIST'
        }
    }

    static OFF_ALERT() {
        return {
            type: 'OFF_ALERT'
        }
    }

    static INVALID_FIELDS() {
        return {
            type: 'INVALID_FIELDS'
        }
    }

    // static CRIME_INFO(info) {
    //     return {
    //         type: 'CRIME_INFO',
    //         reported_crime: info
    //     }
    // }

    static SHOW_COMPLAINT() {
        return {
            type: 'SHOW_COMPLAINT'
        }
    }

    static RESET() {
        return {
            type: 'RESET'
        }
    }

    static SHOW_DATA_ON_TABS(comp, miss, cri) {
        return {
            type: 'SHOW_DATA_ON_TABS',
            complaintOBJ: comp,
            missingOBJ: miss,
            crimeOBJ: cri
        }
    }

    static TOTAL_REPORTS(comp, miss, cri, totl){
        return {
            type: 'TOTAL_REPORTS',
            totalComp: comp,
            totalMiss: miss,
            totalCri: cri,
            total: totl
        }
    }
}