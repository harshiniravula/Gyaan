import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import CreatePostPage from '.'

describe('close icon', () => {

   it('should render close icon', () => {
      const onChangeTitle = jest.fn();
      const onChangeContent = jest.fn();
      const onChangeDomainId = jest.fn();
      const onClickSubmit = jest.fn();
      const onSelectTag = jest.fn();

      const { getByText } = render(
         <CreatePostPage
         title={'title'}
         content={'content'}
         onChangeTitle={onChangeTitle}
         onChangeContent={onChangeContent}
         selectedDomainId={1}
         onChangeDomainId={onChangeDomainId}
         onClickSubmit={onClickSubmit}
         onSelectTag={onSelectTag}
         followingDomains={
         [
            {
               domainId:1,
               domainName:'react',
               getTagsAPIError:null,
         getTagsAPIStatus:200,
         tags:[{}]
            },
            {
               domainId:2,
               domainName:'django',
               getTagsAPIError:null,
         getTagsAPIStatus:200,
         tags:[{}]
            }
         ]}
         />
      )

      expect(getByText('select domain')).toBeInTheDocument();
      onChangeDomainId(2);
      expect(getByText('select tag')).toBeInTheDocument()
   })


})
