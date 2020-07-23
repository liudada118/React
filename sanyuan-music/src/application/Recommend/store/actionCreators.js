import * as actionType from './constants'
import { getRecommendListRequest,getBannerRequest } from '../../../api/request'

export const changeRecommendList = (data) => {
    return {
        type: actionType.CHANGE_RECOMMEND_LIST,
        data: data
    }
}

export const changeEnterLoading = (data) => {
    return {
        type: actionType.CHANGE_ENTERLOADING,
        data: data
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data))
            dispatch(changeEnterLoading(false))
        }).catch(() => {
            console.log('歌单数据传输有误')
        })

    }
}

export const getBanners = ()=> {
    return (dispatch) => {
        getBannerRequest().then(data => {
            dispatch(changeBanners(data))
            // dispatch(changeEnterLoading(false))
        }).catch(() => {
            console.log('轮播图数据传输有误')
        })
    }
}

export const changeBanners = (data)=>{
    return {
        type : actionType.CHANGE_BANNER,
        data
    }
}