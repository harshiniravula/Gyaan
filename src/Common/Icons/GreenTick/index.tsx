
import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import GreenTick from './GreenTick'

class GreenTickWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={GreenTick} {...this.props} />
   }
}

export default GreenTickWrapper
