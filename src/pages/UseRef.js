import  { useEffect, useRef } from 'react'

export const UseRef = () => {
    const inputTxt = useRef(null)
    useEffect(() => {
      inputTxt.current.focus()
    })
  
    return (
      <div>
        <input type='text' />
        <input ref={inputTxt} />
      </div>
    );
}




