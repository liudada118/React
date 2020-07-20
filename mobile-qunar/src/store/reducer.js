import { combineReducers, createStore } from "redux"

const defulatState = ['赣州','南昌']
function address(state = defulatState,action){
    switch(action.type){
        // case 'CHANGELEFT' :
        //     let arr = []
        //     arr[0] = action.left
        //     arr[1] = state[1]
        //     return arr
        // case 'CHANGELEFT' :
        //     let arr = []
        //     arr[1] = action.right
        //     arr[0] = state[0]
        //     return arr
        case 'CHANGE':
            let arr = []
            console.log(2,arr,state[0],state[1])
            arr.push(state[1],state[0])
            return arr
        default :
            return state
    }
}

function piao(state = 0,action){
    switch(action.type){
        default : 
            return state
    }
}
const reduce = combineReducers({
    address : address,
    piao : piao
})
 const store = createStore(reduce)
export default store