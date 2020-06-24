import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

import WithToggle from '../../common/WithToggle'
import strings from '../../i18n/Strings.json'
import {
   StyledListTitle,
   StyledTitle,
   StyledListItem,
   StyledList,
   StyledWrapper
} from './styledComponents'
@observer
class DomainsList extends React.Component {
   @observable text
   @observable hasClickedSeeAll
   constructor(props) {
      super(props)
      this.hasClickedSeeAll = false
      this.limitOnShowingDomains = 2
      this.text = strings.seeAll
   }

   @computed
   get listOfItems() {
      const { listOfItems } = this.props
      if (listOfItems == undefined) {
         return []
      } else if (this.hasClickedSeeAll) {
         return listOfItems
      } else {
         let showListOfItems = listOfItems.slice(0, this.limitOnShowingDomains)
         return showListOfItems
      }
   }

   toggleSeeAll = () => {
      this.hasClickedSeeAll = !this.hasClickedSeeAll
      this.text =
         this.text === strings.seeAll ? strings.showLess : strings.seeAll
   }
   onClickDomain = event => {
      const { onClickFollowingDomain } = this.props
      onClickFollowingDomain(+event.target.id)
   }

   render() {
      const { title, selectedDomainId } = this.props

      return (
         <WithToggle text={this.text} hasClickedSeeAll={this.hasClickedSeeAll}>
            {state => (
               <StyledWrapper>
                  <StyledListTitle
                     isExpanded={!state.toggleStatus}
                     onClick={state.onToggle}
                  >
                     <StyledTitle>{title}</StyledTitle>
                  </StyledListTitle>
                  {!state.toggleStatus ? (
                     <StyledList>
                        {this.listOfItems.map(eachDomain => {
                           return (
                              <StyledListItem
                                 id={eachDomain.domainId}
                                 key={eachDomain.domainId}
                                 onClick={this.onClickDomain}
                                 isSelected={
                                    selectedDomainId == eachDomain.domainId
                                 }
                              >
                                 {eachDomain.domainName}
                              </StyledListItem>
                           )
                        })}
                        {this.props.listOfItems.length >
                           this.limitOnShowingDomains && (
                           <StyledListItem onClick={this.toggleSeeAll}>
                              {this.text}
                           </StyledListItem>
                        )}
                     </StyledList>
                  ) : null}
                  {}
               </StyledWrapper>
            )}
         </WithToggle>
      )
   }
}

export default DomainsList
