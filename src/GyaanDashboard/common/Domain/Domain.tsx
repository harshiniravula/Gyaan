import React from 'react'
import { observer } from 'mobx-react'
import { StyledListItem } from './styledComponents'
interface Props{
   domain: string, onClickDomain: ()=>void, id: number 

}
@observer
class Domain extends React.Component<Props> {
   render() {
      const { domain, onClickDomain, id } = this.props
      return (
         <StyledListItem id={String(id)} onClick={onClickDomain}>
            {domain}
         </StyledListItem>
      )
   }
}
export default Domain
