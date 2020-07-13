import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={10} height={10} fill="none" viewBox="0 0 10 10" {...props}>
      <path stroke="#fff" strokeWidth={1.5} d="M1 5.5L3.667 8 9 2" />
    </svg>
  )
}

export default SvgComponent
