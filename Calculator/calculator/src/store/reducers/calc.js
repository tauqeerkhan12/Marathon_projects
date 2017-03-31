
var n,val,x,y;

export function Calc(state = { screen: '' }, action) {

    switch (action.type) {
        case 'ADDITION':
             val = action.screenValue;
             n = val.indexOf("+")
             x = parseInt(val.slice(0, n),0);
             y = parseInt(val.slice(n + 1),0)
            var add = x + y
            if (isNaN(add)) {
                return state = { screen: '' }
            }
            else return state = { screen: add }

        case 'SUBTRACTION':
             val = action.screenValue;
             n = val.indexOf("-")
             x = parseInt(val.slice(0, n),0)
             y = parseInt(val.slice(n + 1),0)
            var sub = x - y
            if (isNaN(sub)) {
                return state = { screen: '' }
            }
            else return state = { screen: sub }

        case 'DIVIDE':
             val = action.screenValue;
             n = val.indexOf("/")
             x = parseInt(val.slice(0, n),0)
             y = parseInt(val.slice(n + 1),0)
            var div = x / y
            if (isNaN(div)) {
                return state = { screen: '' }
            }
            else return state = { screen: div }

        case 'MULTIPLICATION':
             val = action.screenValue;
             n = val.indexOf("*")
            x = parseInt(val.slice(0, n),0)
            y = parseInt(val.slice(n + 1),0)
            var multi = x * y
            if (isNaN(multi)) {
                return state = { screen: '' }
            }
            else return state = { screen: multi }
        default: return state

    }
}