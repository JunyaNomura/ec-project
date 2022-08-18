import React from 'react'
import { selector, useRecoilValue } from 'recoil'

import { fontSizeSelector } from './Sample'
import { countAtom } from './Sample';



const countSizeSelector = selector({
  key: 'count-size-selector',
  get: ({get}) => {
    return get(countAtom);
  }
})

const Sample2 = () => {
  
  // by using "useRecoilValue", you can get the state globally
  const fontSize = useRecoilValue(fontSizeSelector)
  const countSize = useRecoilValue(countSizeSelector)
  return (
    <div style={{backgroundColor: 'red'}}>
      <h1>Other component</h1>
      <h2>FontSize: {fontSize}</h2>
      <h3>CountSize: {countSize}</h3>
    </div>
  )
}

export default Sample2