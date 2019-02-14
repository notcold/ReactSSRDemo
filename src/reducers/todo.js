/**
 * Created by shikuan on 2017/11/13.
 */
import  reduxroot from '../constants/reduxRoot'
const todoApp=(state = reduxroot.index, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                value: state.value+2
            })
        default:
            return state
    }
}
export default todoApp