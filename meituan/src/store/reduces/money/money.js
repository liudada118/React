import { MoneysAdd, MoneysSub } from "../../constants";
export default function (state=50 , action){
    console.log('---------',state)
    switch (action.type){
        case MoneysAdd :
            return state + action.allPrice
        case MoneysSub:
            return state - action.allPrice
        default: return state
    }
}

