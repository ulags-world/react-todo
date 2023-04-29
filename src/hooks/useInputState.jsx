import {useState} from 'react'

const useInputState = initialVal => {
  const [data , setData] = useState(initialVal)
  const handleChange = e => {
    setData(e.target.value)
  }
  const reset = () =>{
    setData("")
  };
  return [data , handleChange , reset]
};

export default useInputState