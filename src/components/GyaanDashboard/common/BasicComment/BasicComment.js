import React from 'react';

import Avatar from '../../../common/Avatar';
import { Typo14Normal } from '../../../../styleGuide/Typos';
import Strings from '../../i18n/Strings.json';
import PostedAt from '../PostedAt';

import {
    StyledBasicComment,
    StyledRightPart
}
from './styledComponents';
class BasicComment extends React.Component {

    render() {
        const {
            commenter,
            commentContent,
            commentAt
        } = this.props;

        const {
            username,
            userId,
            profilePic

        } = commenter;

        console.log(this.props)

        return (

            <StyledBasicComment>
                <Avatar url={profilePic}
                border_radius_type={Strings.Rounded}
                height={Strings.ProfileSize}
                width={Strings.ProfileSize}
                />
                <StyledRightPart>
                    <PostedAt name={username}
                            date={commentAt}
                            isAuthor={false}/>
                <Typo14Normal>{commentContent}</Typo14Normal>

                </StyledRightPart>
            </StyledBasicComment>

        )
    }


}

export default BasicComment;
