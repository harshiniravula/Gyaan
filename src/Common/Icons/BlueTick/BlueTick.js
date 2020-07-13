import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
         <rect width={16} height={16} fill='#0B69FF' rx={8} />
         <path stroke='#fff' strokeWidth={1.5} d='M4 8.5L6.667 11 12 5' />
      </svg>
   )
}

export default SvgComponent
