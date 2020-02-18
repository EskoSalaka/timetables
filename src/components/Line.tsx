import React from 'react'

const Line = ({ type, thickness, color, width }) => {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: `${thickness}px ${type} ${color}`,
        width: `${width}`
      }}
    />
  )
}

export default Line
