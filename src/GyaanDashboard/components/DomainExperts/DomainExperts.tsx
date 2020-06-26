import React from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Typo14Gray500 } from '../../../styleGuide/Typos'
import Avatar from '../../../Common/Avatar'
import strings from '../../i18n/Strings.json'
import { StyledDomainExperts, StyledExperts } from './styledComponents'

interface Props{
   domainExperts:Array<{id:number,name:string,profilePic:string}>
}
@observer
class DomainExperts extends React.Component <Props>{
   @observable limit
   constructor(props) {
      super(props)
      this.limit = 3
   }
   @computed
   get domainExperts() {
      const { domainExperts } = this.props
      const expertLength = domainExperts.length
      if (expertLength > this.limit) {
         return domainExperts.slice(0, this.limit - 1)
      }

      return domainExperts
   }
   onClickSeeAll = () => {
      this.limit = this.props.domainExperts.length
   }

   render() {
      const { domainExperts } = this.props

      return (
         <StyledDomainExperts>
            <Typo14Gray500>{strings.domainExperts}</Typo14Gray500>
            <StyledExperts>
               {this.domainExperts.map(expert => (
                  <Avatar
                     key={expert.id}
                     src={expert.profilePic}
                     alt={expert.name.split('')[0].toUpperCase()}
                     size={Avatar.imageSize.small}
                     borderType={Avatar.borderType.rounded}
                  />
               ))}
               {domainExperts.length > this.limit && (
                  <Avatar
                     onClick={this.onClickSeeAll}
                     alt={`+${domainExperts.length - this.limit + 1}`}
                     size={Avatar.imageSize.small}
                     borderType={Avatar.borderType.rounded}
                  />
               )}
            </StyledExperts>
         </StyledDomainExperts>
      )
   }
}

export default DomainExperts
