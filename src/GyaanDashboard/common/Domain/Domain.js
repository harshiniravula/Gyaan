import React from 'react'
import { observer } from 'mobx-react'
import { StyledListItem } from './styledComponents'
@observer
class Domain extends React.Component {
   render() {
      const { domain, onClickDomain, id } = this.props
      console.log(this.props)
      return (
         <StyledListItem id={id} onClick={onClickDomain}>
            {domain}
         </StyledListItem>
      )
   }
}
export default Domain
