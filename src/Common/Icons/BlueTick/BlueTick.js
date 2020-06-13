import React from 'react'

import { StyledImg } from './styledComponents'

class BlueTick extends React.Component {
   render() {
      const { ...other } = this.props
      return (
         <StyledImg
         {...other}
            src={`https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/8a67d4cb-fe4a-4a45-95ed-16d4c4822649.svg`}
         />
      )
   }
}
export default BlueTick
