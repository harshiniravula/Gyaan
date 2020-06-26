import React from 'react'
import strings from '../../i18n/Strings.json'
import { observer } from 'mobx-react'
import SuggesttedDomainModel from "../../stores/models/SuggesttedDomainModel"
import { StyledDomain, StyledDomainName, StyledBtn } from './styledComponents'

interface Props{
   domainData:SuggesttedDomainModel
}
@observer
class SuggestedDomain extends React.Component<Props>{
   render() {
      const {
         domainName,
         isRequested,
         onClickFollowOrCancel
      } = this.props.domainData
      return (
         <StyledDomain>
            <StyledDomainName>{domainName}</StyledDomainName>
            <StyledBtn
               onClick={onClickFollowOrCancel}
               isRequested={isRequested}
            >
               {isRequested ? strings.cancel : strings.follow}
            </StyledBtn>
         </StyledDomain>
      )
   }
}

export default SuggestedDomain
