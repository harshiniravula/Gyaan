import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={7} height={7} fill="none" viewBox="0 0 7 7" {...props}>
      <path
        fill="#0B69FF"
        fillRule="evenodd"
        d="M.206 3.353l3.15-3.15A.703.703 0 013.85 0H6.3c.385 0 .7.315.7.7v2.45a.697.697 0 01-.207.497l-3.15 3.15A.692.692 0 013.15 7a.686.686 0 01-.494-.207l-2.45-2.45A.686.686 0 010 3.85c0-.192.08-.371.206-.497zm5.57-1.603A.524.524 0 105.775.7a.525.525 0 100 1.05z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
