import React from 'react'
import loading from '../../../assets/img/loading.gif'
export default function Loading() {
    return (
        <div className="loading">
            <div className="loading-img">
                <img src={loading} alt=""/>
            </div>
        </div>
    )
}
