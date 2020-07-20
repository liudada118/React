import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Header.css'

export default function Head(props) {
    const { title , onBack } = props
    return (
        <div className="header">
            <div className="header-back" onClick = {onBack}>
                <svg width='42' height='42'>
                <polyline 
                points="25,13 16,21 25,29"
                stroke = "#fff"
                strokeWidth = "2"
                fill = 'none'
                />
                </svg>
            </div>
            <div className="header-title">{title}</div>
        </div>
    )
};
Head.propsType = {
    title: PropTypes.string.isRequired,
    onBack : PropTypes.func.isRequired
}