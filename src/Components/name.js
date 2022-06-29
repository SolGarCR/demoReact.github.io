import React, { useState } from 'react'

const name_Hook = () => {

  const [state, setState] = useState({
    nameHook : "Name"
  })
  
  const handleStateChange = newState => {
    setState({
      ...state,
      ...newState
    })
  }

  const handleInput = (e) => {
    const newMessage = e.target.value
    handleStateChange({ nameHook : newMessage})
  }

  return (
    <div>
      
      <label htmlFor="contactName">
        {state.nameHook} 
        <span className="required">*</span>
      </label> 
      <input onChange={handleInput} value={state.nameHook}></input>
    </div>
  )
}

export default name_Hook