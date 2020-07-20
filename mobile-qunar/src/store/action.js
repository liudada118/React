export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_FROM = 'SET_FROM'

export function setTo(to){
    return{
        type : ACTION_SET_TO,
        payload : to
    }
}
export function setFrom(from){
    return{
        type : ACTION_SET_FROM,
        payload : from
    }
}
export function exchangeFromTo(){
    // console.log(getState())
    return (dispatch ,  getState) =>{
        const {from , to} = getState()
        dispatch(setTo(from))
        dispatch(setFrom(to))
    }
    // 1. 两个action都  要调用
    // 2. payload  穿参
} 
