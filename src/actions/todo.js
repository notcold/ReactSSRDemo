/**
 * Created by shikuan on 2017/11/13.
 */

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
export  default addTodo;