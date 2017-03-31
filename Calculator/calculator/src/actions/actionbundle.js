
export default class ActionBundle {

    static ADDITION(scr) {
        return {
            type: 'ADDITION',
            screenValue: scr
        }
    }

    static SUBTRACTION(scr) {
        return {
            type: 'SUBTRACTION',
            screenValue: scr
        }
    }
    static DIVIDE(scr) {
        return {
            type: 'DIVIDE',
            screenValue: scr
        }
    }
    static MULTIPLICATION(scr) {
        return {
            type: 'MULTIPLICATION',
            screenValue: scr
        }
    }
}