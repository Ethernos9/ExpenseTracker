import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import "./Style.css"
const App = () => {
   const [itemName,setItemName]= useState("")
   const [itemPrice,setItemPrice]= useState("")
  //  const [totalPrice,setTotalPrice] = useState(0)

  const [todos,setTodo] = useState([
    {
     name:"Apple",
     price:100
    }, 
    {
     name:"Banana",
     price:50
    }
  ])
  const totalPrice = todos.reduce((total, item) => {
    return parseInt(total) + parseInt(item.price);
  }, 0);

const onChange = (e)=>{
  if (e.target.name === "itemName"){
    setItemName(e.target.value)

  }
  else {
    setItemPrice(e.target.value)

  }
  console.log("itemName :",itemName)
  console.log("itemPrice :" ,itemPrice)
}

const addTodo = ()=>{
      const newTodo = {
        name:itemName,
        price:itemPrice
      }
      setTodo([...todos,newTodo])
}

const removeItem =()=>{
  setTodo([])
}
 
  return (
    <div>
       <div className='main'>
        <div className='heading'>
          <h1>Expense Tracker</h1>
        </div>
        <div className='field'>
          <InputField name = "itemName" value = {itemName} onChange = {onChange}label ="Item Name" placeholder= "Enter Item Name"/>
          <InputField name =  "itemPrice"  value= {itemPrice} onChange = {onChange}label ="Item Price" placeholder= "Enter Item Price"/>
        </div>
        <div className='btn'>
          <Button  onClick = {addTodo} text = "Add Item"/>
          <Button  onClick = {removeItem} text = "Clear All"/>
        </div>
         <div className='output'>
          
            {todos?.map((item,index)=>{
                 return (
                     <div className='item' key={index}>
                       <h3>{item.name}</h3>
                       <p>Price: {item.price}</p>
                       
                     </div>
                    
                 )
             })}
            
             
         </div>
         <div className='result'>
            
                   <h2>
                       {totalPrice}
                   </h2>
            
         </div>
       </div>
    </div>
  )
}

export default App