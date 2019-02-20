
var Reducer = function (state, action) {
    if (typeof state === 'undefined') {
        return {
            msg: "主页"
        }
    }
    switch (action.type) {

        case 'SIZE_naem':
            state.msg = action.text
            return state
        default:

            return state
    }
}
export default Reducer