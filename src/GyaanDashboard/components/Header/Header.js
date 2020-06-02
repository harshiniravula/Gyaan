import React from 'react'
import InputElement from '../../../Common/InputElement'
import Button from '../../../Common/Button'
import Strings from '../../i18n/Strings.json'
import { observer } from 'mobx-react'
import { StyledHeader } from './styledComponents'
@observer
class Header extends React.Component {
   render() {
      const { onClickWritePost } = this.props
      return (
         <StyledHeader>
            <InputElement size={Strings.PostInputWidth} />
            <Button
               onClick={onClickWritePost}
               kind={Button.kind.primary}
               size={Button.size.large}
            >
               {Strings.WritePost}
            </Button>
         </StyledHeader>
      )
   }
}

export default Header
