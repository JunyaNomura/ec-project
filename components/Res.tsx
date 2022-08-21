import React from 'react'

const Res = () => {
  let width = window.innerWidth
  let size;
  if (width < 300) {
    return size = 'sm'
  } else if (width < 766) {
    return size = 'md'
  } else {
    return size = 'lg'
  }

  return (
    <>
    {size === 'sm'? 
      <div>
      small
      </div>
    :
      <div>
        large
      </div>
    }


    </>
  )
}

export default Res