import React from 'react';


import Avatar from '../../../common/Avatar';
import Tag from '../../common/Tag';
import PostDomain from '../../common/PostDomain';
import Strings from '../../i18n/Strings.json';
import PostedAt from '../../common/PostedAt';
import ReactionIcon from '../../common/ReactionIcon';
import CommentIcon from '../../common/CommentIcon';



import {
    StyledTitleSection,
    StyledHeader,
    StyledRightPart,
    StyledTags,
    StyledFooter,
    StyledRight,
    StyledPostTitle
}
from './styledComponents';


class TitleSection extends React.Component {

    render() {
        const {
            domainName,
            tags,
            postedBy,
            postedAt,
            reactionsCount,
            commentsCount,
            isReacted,
            postTitle
        } = this.props;
        return (<StyledTitleSection>
        <Avatar url={postedBy.profilePic}
                border_radius_type={Strings.Rounded}
                height={Strings.ProfileSize}
              width={Strings.ProfileSize}/>
              <StyledRightPart>
        <StyledHeader>


            <PostedAt name={postedBy.username} date={postedAt}isAuthor={true}/>


        <PostDomain fontSize={Strings.DomainTitleSize} domainName={domainName}/>
        </StyledHeader>
        <StyledPostTitle>{postTitle}</StyledPostTitle>
        <StyledFooter>
            <StyledTags>
            {
            tags.map((tag)=>
                <Tag key={tag.tagId} color={'green'} id={tag.id} name={tag.tagName}/>

            )
            }
        </StyledTags>

            <StyledRight>
                <ReactionIcon
                isReacted={isReacted}
                count={`${reactionsCount} ${Strings.Reactions}`}
                />

                <CommentIcon count={`${commentsCount} ${Strings.Comments}`}/>
            </StyledRight>
        </StyledFooter>
        </StyledRightPart>
        </StyledTitleSection>);
    }
}
export default TitleSection;
