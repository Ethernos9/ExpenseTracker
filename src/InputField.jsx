import React from 'react'
import "./Input.css"
const InputField = ({label,placeholder,onChange,name,value}) => {
  return (
    <div className='input'>
        <label htmlFor="">{label}</label>
        <input type="text" onChange={onChange} placeholder={placeholder} name = {name} value={value} />
    </div>
  )
}

export default InputField