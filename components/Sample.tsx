import { Square } from '@chakra-ui/react'
import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from 'recoil'

export const countAtom = atom({
  key: 'count-atom',
  default: 15,
})

export const userAtom = atom({
  key: 'user-atom', 
  default: 'junya',
})


export const fontSizeSelector = selector({
  key: 'font-size-selector',
  get: ({get}) => {
    const count = get(countAtom)
    const fontSize = count * 4
    return fontSize
  }
})

export const countSizeSelector = selector({
  key: 'count-size-selector',
  get: ({get}) => {
    return get(countAtom);
  }
})


const Sample = () => {

  const [count, setCount] = useRecoilState(countAtom)
  const resetCount = useResetRecoilState(countAtom)
  const fontSize = useRecoilValue(fontSizeSelector)

  return (
    <div style={{backgroundColor: 'pink'}}>
      <h1>Recoil tutorial</h1>
      <h2>The count value is : {count}</h2>
      <h3>The font size of potty is : {fontSize}</h3>
      <p style={{ fontSize: fontSize}}>😊</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Sample