import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import Close from './Close'

class CloseWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={Close} {...this.props} />
   }
}

export default CloseWrapper
