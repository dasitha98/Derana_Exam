import React from 'react'

const Title = ({title}) => {
  return (
    <div className='container mt-5'>
        <div className='title'>
            <h5 className='type'>{title}</h5>
        </div>
    </div>
  )
}

export default Title