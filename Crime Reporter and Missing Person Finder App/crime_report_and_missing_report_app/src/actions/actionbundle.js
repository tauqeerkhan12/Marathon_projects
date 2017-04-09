
export default class ActionBundle {

    static ADD_ME_TO_LIST(userInfo) {
        return {
            type: 'ADD_ME_TO_LIST',
            information: userInfo
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

    static CRIME_INFO(info) {
        return {
            type: 'CRIME_INFO',
            reported_crime: info
        }
    }
    
    static SHOW_COMPLAINT() {
        return {
            type: 'SHOW_COMPLAINT'
        }
    }

    static RESET(){
        return {
            type: 'RESET'
        }
    }
}