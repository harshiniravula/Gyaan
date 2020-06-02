import React from 'react'
import { Input } from './styledComponents'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import colors from '../../themes/Colors.json'
@observer
class InputElement extends React.Component {
   @computed
   get borderAndTextColors() {
      const { hasError, isPositive, isTitle } = this.props;
      let color, borderColor
      if (hasError) {
         color = colors.red
         borderColor = colors.red
      }
      else if (isPositive) {
         color = colors.green
         borderColor = colors.green
      }
      else if (isTitle) {
         color = colors.blue
         borderColor: colors.green
      }
      else {
         color = colors.black
         borderColor = colors.gray500
      }

      return {
         color: color,
         borderColor: borderColor
      }
   }
   @computed
   get size() {
      small: '20%'
      medium: '35%'
      large: '50%'
   }

   render() {
      const { inputRef, size } = this.props

      return (
         <Input
            {...this.props}
            borderAndTextColors={this.borderAndTextColors}
            size={size}
            ref={inputRef}
         />
      )
   }
}
export default InputElement
