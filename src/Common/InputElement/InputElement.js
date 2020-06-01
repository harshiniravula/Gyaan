import React from 'react'
import { Input } from './styledComponents'
import { computed } from 'mobx'
import { observer } from 'mobx-react';
@observer
class InputElement extends React.Component {

   @computed
   get borderAndTextColors() {
      const { hasError, isPositive } = this.props;
      let color, borderColor;
      if (hasError) {
         color = 'red';
         borderColor = 'red'
      }
      else if (isPositive) {
         color = 'green';
         borderColor = 'green';
      }
      else {
         color = 'black';
         borderColor = '#cbd5e0';
      }
      return {
         color: color,
         borderColor: borderColor
      }
   }
   @computed
   get size() {
      const { size } = this.props;

   }

   render() {
      const {
         inputRef,

      } = this.props;

      return <Input
      {...this.props}
      borderAndTextColors={this.borderAndTextColors}

      size={this.size}
      ref={inputRef} />
   }
}
export default InputElement
