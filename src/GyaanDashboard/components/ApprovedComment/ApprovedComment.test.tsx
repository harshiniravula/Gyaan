import React from 'react'
import { render, fireEvent } from '@testing-library/react'

/*global expect,jest*/

import ApprovedComment from '.'

describe('ApprovedComment testcases', () => {
   it('should render ApprovedComment', () => {
      const onClickReaction = jest.fn()

      const { getByText, getByTestId } = render(
         <ApprovedComment
         postedBy={{ username: 'harshini' }}
            commentData={{
               commenter: {
                  userId:1,
                  username:'harshi',
                  profilePic:''
               },
               commentAt: 'time',
               commentContent: 'sample content',
               isReacted: false,
               reactionsCount: 10,
               repliesCount: 3,
               getCommentReactionAPIStatus: 200,
               onClickReaction: onClickReaction
            }}
         />
      )
      // expect(getByText('comenter')).toBeInTheDocument();
      expect(getByText('harshini')).toBeInTheDocument()
      const reaction = getByTestId('reaction')
      expect(reaction).toBeInTheDocument()
      fireEvent.click(reaction)
      expect(onClickReaction).toBeCalled()
   })
})
