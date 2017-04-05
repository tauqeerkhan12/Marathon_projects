
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

    static SORTING_ARRAY(item){
        return{
            type: 'SORTING_ARRAY',
            unSortedAry: item
        }
    }

    static SEND_SELECTED_BLOOD(Bval, unSt){
      return {
          type: 'SEND_SELECTED_BLOOD',
          userBloodGroup: Bval,
          unSortedAryFromFB: unSt
      }   
    }
}