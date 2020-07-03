import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import BlueTick from './BlueTick'

class BlueTickWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={BlueTick} {...this.props} />
   }
}

export default BlueTickWrapper
