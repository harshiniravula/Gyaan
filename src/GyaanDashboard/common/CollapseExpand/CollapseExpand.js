import React from 'react'

import {
   StyledContainer,
   StyledBtn,
   StyledHeading,
   StyledLabel,
   StyledExpand,
   StyledList,
   StyledItem,
   StyledExpandContainer
} from './styledComponents'
import WithToggle from '../../../common/hocs/WithToggle'
class CollapseExpand extends React.Component {
   render() {
      return (
         <StyledContainer>
            <StyledHeading>CollapseExpand</StyledHeading>

            <WithToggle>
               {state => (
                  <StyledExpandContainer>
                     {!state.toggleStatus ? (
                        <StyledExpand>
                           <StyledBtn onClick={state.onToggle}>
                              Collapse
                           </StyledBtn>
                           <StyledList>
                              <StyledItem>Eggs</StyledItem>
                              <StyledItem>Bread</StyledItem>
                           </StyledList>
                        </StyledExpand>
                     ) : (
                        <StyledBtn onClick={state.onToggle}>Expand</StyledBtn>
                     )}
                  </StyledExpandContainer>
               )}
            </WithToggle>
         </StyledContainer>
      )
   }
}
export default CollapseExpand
