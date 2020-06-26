import React from 'react'
import { observer } from 'mobx-react'
import Avatar from '../../../Common/Avatar'
import { StyledPostDomain, StyledDomainName } from './styledComponents'

interface Props{
   isTitle:boolean
   domainName:string
}
@observer
class PostDomain extends React.Component <Props>{
   render() {
      const { domainName, isTitle } = this.props
      const size = isTitle ? 'medium' : 'small'

      const iconAlt = domainName.slice(0, 2)
      return (
         <StyledPostDomain>
            <Avatar
               borderType={Avatar.borderType.rounded}
               size={Avatar.imageSize[size]}
               src=''
               alt={iconAlt}
            />
            <StyledDomainName isTitle={isTitle}>{domainName}</StyledDomainName>
         </StyledPostDomain>
      )
   }
}
export default PostDomain
