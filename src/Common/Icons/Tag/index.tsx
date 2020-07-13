import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import Tag from './Tag'

class TagWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={Tag} {...this.props} />
   }
}

export default TagWrapper
