import React from 'react'

import { StyledLogo } from './styledComponents'
class IBHubsLogo extends React.Component {
   render() {
      let source =
         'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg'
      const { size } = this.props
      return <StyledLogo src={source} size={size} alt={`ibhubs`} />
   }
}
export default IBHubsLogo
