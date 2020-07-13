import React from 'react'
import { render, fireEvent } from '@testing-library/react'

/*global expect,jest*/

import Comment from '.'

describe('Comment testcases', () => {
   it('should render Comment', () => {
      const onClickReaction = jest.fn()

      const { getByText, getByTestId } = render(
         <Comment
            commentData={{
               commenter: 'comenter',
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
      const reaction = getByTestId('reaction')
      expect(reaction).toBeInTheDocument()
      fireEvent.click(reaction)
      expect(onClickReaction).toBeCalled()
   })
})
