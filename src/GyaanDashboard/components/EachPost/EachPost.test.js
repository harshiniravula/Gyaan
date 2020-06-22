import React from 'react'
import { render, fireEvent } from '@testing-library/react'

/*global expect,jest*/

import Comment from '.'

describe('Comment testcases', () => {

    it('should render Comment', () => {
        const onClickPost = jest.fn();

        const { getByText, getByTestId } = render(
            <Comment
            onClickPost={onClickPost}
      postData={{
         comments: {
          approvedComment:{
              commenter:'comenter',
            commentAt:'time',
            commentContent:'sample content',
            isReacted:false,
            reactionsCount:10,
            repliesCount:3,
            getCommentReactionAPIStatus:200,
          },
          unapprovedComments:[{
          commentId:1,
              commenter:'comenter',
            commentAt:'time',
            commentContent:'sample content',
            isReacted:false,
            reactionsCount:10,
            repliesCount:3,
            getCommentReactionAPIStatus:200
          }]
            
         },
         tags:[],
         postedBy:{username:'abcd'},
         postDomainName:'react'
          
      }
          
      }/>
        )
        const reaction = getByTestId('post')
        expect(reaction).toBeInTheDocument();
        fireEvent.click(reaction)
        expect(onClickPost).toBeCalled();

    })


})
