import React from 'react'

import SignInPage from './'
import { addParameters } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const instruction = 'ywf uwr6kuf 6rwk uf  uyjhv  ewewt9ff'
export default {
   component: SignInPage,
   title: 'SignInPage',
   decorators: [withKnobs]
}
addParameters({ notes: instruction })

export const DefaultSignInPage = () => (
   <SignInPage isLoading={false} onClickSignIn={action('clicked')} />
)

export const ErrorViewSignInPage = () => (
   <SignInPage errorMessage={'errorMessage'} />
)

export const SignInPageLoadingView = () => <SignInPage isLoading={true} />

export const ErrorViewSignInPageWithKnob = () => (
   <SignInPage errorMessage={text('error messsge', 'error message')} />
)

export const SignInPageSpeacial = () => <SignInPage isLoading={false} />
SignInPageSpeacial.story = {
   decorators: [
      SignInPage => (
         <div style={{ backgroundColor: 'cyan', padding: '20%' }}>
            {SignInPage()}
         </div>
      )
   ]
}
