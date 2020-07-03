import React from 'react'
import { addParameters } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { InputValidation } from '../../utils/ValidationUtils'
import TextInput from '.'

const instruction = 'ywf uwr6kuf 6rwk uf  uyjhv  ewewt9ff'
export default {
   component: TextInput,
   title: 'TextInput',
   decorators: [withKnobs]
}
addParameters({ notes: instruction })

export const DefaultTextInput = () => (
   <TextInput
      validation={value => {
         action(value)
         return InputValidation(value)
      }}
   />
)

export const TextInputWithTypeKnobs = () => (
   <TextInput validation={InputValidation} type={text('type', 'text')} />
)
