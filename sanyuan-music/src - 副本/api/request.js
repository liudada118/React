import { axiosInstance } from './config'

export const getRecommendListRequest = () => {
    return new Promise((resolve, rejext) => {
        setTimeout(() => {
            resolve({
                data: [{
                    id: 1,
                    title: 'aaaaa'
                }]
            })
        }, 1000)
    })
}

export const getBannerRequest = () =>{
    return axiosInstance.get('/banner')
}