import React from 'react'

const ErrorDisplay = (data) => {
 
  return (
    <div style={{color:"red",fontSize:"13px",textAlign:"left",textDecoration:"none", textTransform:"capitalize"}}>{data.data}</div>
  )
}

export default ErrorDisplay