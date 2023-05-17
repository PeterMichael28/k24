import React from 'react'

const Title = ({text, sm}) => {
  return (
    <div className={`title ${sm && 'sm'}`}>{text}</div>
  )
}

export default Title