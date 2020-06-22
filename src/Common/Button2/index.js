import React, { Component } from 'react'

import strings from '../../i18n/Strings.json';
import OutlineButton from './OutlineButton'
import BaseButton from './BaseButton'

import { buttonTypes, buttonShapes } from './constants'
import {
    rectangularCss,
    pillCss,
    roundCss,
    curvedCss
}
from './styledComponents'

class Button extends Component {
    static defaultProps = {
        type: buttonTypes.filled,
        shape: buttonShapes.rectangular
    }

    static types = buttonTypes;
    static shapes = buttonShapes;


    btnCss = () => {
        const { shape } = this.props;
        const {
            rectangular,
            pill,
            round,
            curved
        } = buttonShapes;
        switch (shape) {
            case rectangular:
                return rectangularCss
            case pill:
                return pillCss
            case round:
                return roundCss
            case curved:
                return curvedCss
            default:
                console.warn(strings.invalidBtnShape);
        }

    }

    render() {
        const {
            type,
            ...other
        } = this.props;
        const {
            filled,
            outline
        } = buttonTypes;
        switch (type) {
            case filled:
                return (
                    <BaseButton
                        {...other}
                        btnCss={this.btnCss}
                    />
                )
            case outline:
                return (
                    <OutlineButton
                        {...other}
                        btnCss={this.btnCss}
                    />
                )
            default:
                console.warn(strings.invalidBtnType)
        }

    }


}
export default Button
