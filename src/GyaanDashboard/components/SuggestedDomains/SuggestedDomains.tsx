import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

import SuggestedDomainModel from "../../stores/models/SuggestedDomainModel"
import WithToggle from '../../common/WithToggle'
import strings from '../../i18n/Strings.json'
import SuggestedDomain from '../SuggestedDomain'

import {
   StyledListTitle,
   StyledTitle,
   StyledListItem,
   StyledList,
   StyledWrapper
} from './styledComponents'

interface Props{
   title:string
   suggestedDomains:Array<SuggestedDomainModel>
}
@observer
class SuggestedDomains extends React.Component<Props> {
   @observable text!:string
   @observable hasClickedSeeAll!:boolean
   limitOnShowingDomains!:number
   constructor(props) {
      super(props)
      this.hasClickedSeeAll = false
      this.limitOnShowingDomains = 2
      this.text = strings.seeAll
   }
   @computed
   get suggestedDomains() {
      const { suggestedDomains } = this.props
      if (suggestedDomains == undefined) {
         return []
      } else if (this.hasClickedSeeAll) {
         return suggestedDomains
      } else {
         let showListOfItems = suggestedDomains.slice(
            0,
            this.limitOnShowingDomains
         )
         return showListOfItems
      }
   }

   toggleSeeAll = () => {
      this.hasClickedSeeAll = !this.hasClickedSeeAll
      this.text =
         this.text === strings.seeAll ? strings.showLess : strings.seeAll
   }

   renderSuggestedDomains = state => {
      const { title, suggestedDomains } = this.props

      return (
         <StyledWrapper>
            <StyledListTitle
               isExpanded={!state.toggleStatus}
               onClick={state.onToggle}
            >
               <StyledTitle>{title}</StyledTitle>
            </StyledListTitle>
            {!state.toggleStatus ? (
               <StyledList>
                  {this.suggestedDomains.map(eachDomain => (
                     <SuggestedDomain
                        domainData={eachDomain}
                        key={eachDomain.domainId}
                     />
                  ))}
                  {suggestedDomains.length > this.limitOnShowingDomains && (
                     <StyledListItem onClick={this.toggleSeeAll}>
                        {this.text}
                     </StyledListItem>
                  )}
               </StyledList>
            ) : null}
            {}
         </StyledWrapper>
      )
   }

   render() {
      return (
         <WithToggle text={this.text} hasClickedSeeAll={this.hasClickedSeeAll}>
            {state => this.renderSuggestedDomains(state)}
         </WithToggle>
      )
   }
}
export default SuggestedDomains
