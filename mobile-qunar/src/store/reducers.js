import {ACTION_SET_FROM , ACTION_SET_TO} from './action'
import { func } from 'prop-types'
export default {
    from(state = '北京',action){
        const { type , payload } = action
        switch(type){
            case ACTION_SET_FROM:
                return payload
            default : 
                return state
        }
        return state
    },
    to(state = '上海',action){
        const { type , payload } = action
        switch(type){
            case ACTION_SET_TO:
                return payload
            default :
                return state
        }
        return state
    }
}

// export function from(state = '北京',action){
//     const { type , payload } = action
//     switch(type){
//         case ACTION_SET_FROM:
//             return payload
//         default : 
//             return state
//     }
//     return state
// }
// export function to(state = '上海',action){
//     const { type , payload } = action
//     switch(type){
//         case ACTION_SET_TO:
//             return payload
//         default :
//             return state
//     }
//     return state
// }