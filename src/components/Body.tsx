import React from 'react'

interface BodyProps {
    page: React.ReactNode
}

export const Body: React.FC<BodyProps> = ({ page }) => {
  return (
    <div className='main'>
        {page}
    </div>
  )
}

export default Body