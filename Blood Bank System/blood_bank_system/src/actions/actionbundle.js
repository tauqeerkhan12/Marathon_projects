
export default class ActionBundle {

    static ADD_ME_TO_LIST(objInfo) {
        return {
            type: 'ADD_ME_TO_LIST',
            donarInformation: objInfo
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

}