import React from 'react'

interface ContainerProps {
    children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='max-w-[2520px] m-auto xl:px-13 md:px-10'>
        {children}
    </div>
  )
}

export default Container