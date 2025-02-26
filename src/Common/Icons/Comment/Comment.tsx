import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={14} height={14} fill="none" viewBox="0 0 14 14" {...props}>
      <path
        fill="#0B69FF"
        fillRule="evenodd"
        d="M0 1.875C0 .84.895 0 2 0h10c1.105 0 2 .84 2 1.875v7.502c0 1.036-.895 1.875-2 1.875H8L5.735 13.68c-.527.565-1.512.35-1.718-.376l-.584-2.05H2c-1.105 0-2-.84-2-1.876V1.875zm3 2.11c0-.388.336-.703.75-.703h6.5c.414 0 .75.315.75.703 0 .389-.336.703-.75.703h-6.5c-.414 0-.75-.314-.75-.703zm0 3.282c0-.388.336-.703.75-.703h3.5c.414 0 .75.315.75.703 0 .388-.336.703-.75.703h-3.5c-.414 0-.75-.315-.75-.703z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
