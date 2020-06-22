import React from 'react'

import { StyledImg } from './styledComponents'

class Close extends React.Component {
   render() {
      const { ...other } = this.props
      return (
         <StyledImg 
          data-testid='close'
          { ...other } 
          src = { `https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/fe73d88e-a2f0-406b-a3da-3d72ad561509.svg` }
         />
      )
   }
}
export default Close
