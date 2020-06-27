import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <circle cx={8} cy={8} r={8} fill="#D7DFE9" />
      <path
        fill="#171F46"
        fillRule="evenodd"
        d="M7.293 8L4.818 5.525l.707-.707L8 7.293l2.475-2.475.707.707L8.707 8l2.475 2.475-.707.707L8 8.707l-2.475 2.475-.707-.707L7.293 8z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
