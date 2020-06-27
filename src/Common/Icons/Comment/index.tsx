import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import Comment from './Comment'

class CommentWrapper extends Component {
   render() {
      return <SvgComponent renderComponent={Comment} {...this.props} />
   }
}

export default CommentWrapper
