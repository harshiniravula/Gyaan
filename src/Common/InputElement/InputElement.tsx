import React from 'react'
import { Input } from './styledComponents'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import colors from '../../themes/Colors.json'


interface Props{
   hasError?:boolean,
   isPositive?:boolean,
   isTitle?:boolean,
   isText?:boolean,
   isNormal?:boolean,
   inputRef?:any,
   size?:{
      width:string,
      fontSize:string
   },
   defaultValue?:string,
   onChange?:(event:any)=>void,
   type?:string,
   placeholder?:string
   value?:any
}


@observer
class InputElement extends React.Component <Props>{
   @computed
   get borderAndTextColors():any {
      const { hasError, isPositive, isTitle, isText, isNormal } = this.props
      let color:string= colors.black
      let borderColor:string= colors.gray500
      if (hasError) {
         color = colors.red
         borderColor = colors.red
      } else if (isPositive) {
         color = colors.green
         borderColor = colors.green
      } else if (isTitle) {
         color = colors.black
         borderColor = colors.white
      } else if (isText) {
         color = colors.gray500
         borderColor = colors.white
      } else if (isNormal) {
         color = colors.black
         borderColor = colors.white
      } else {
         color = colors.black
         borderColor = colors.gray500
      }

      return {
         color: color,
         borderColor: borderColor
      }
   }
   static size = {
      small: {
         width: '20%',
         fontSize: '20px'
      },
      medium: {
         width: '35%',
         fontSize: '20px'
      },
      large: {
         width: '50%',
         fontSize: '16px'
      },
      normal: {
         width: '100%',
         fontSize: '14px'
      },
      full: {
         width: '100%',
         fontSize: '25px'
      }
   }

   render() {
      const { inputRef, size,...other } = this.props
      return (
         <Input
            {...other}
            borderAndTextColors={this.borderAndTextColors}
            inputSize={size}
            ref={inputRef}
         />
      )
   }
}
export default InputElement
