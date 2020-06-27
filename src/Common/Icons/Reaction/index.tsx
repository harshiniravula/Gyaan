import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import Reaction from './Reaction'

class ReactionWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={Reaction} {...this.props} />
   }
}

export default ReactionWrapper
