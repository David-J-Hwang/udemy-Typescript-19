// import Greeter from './components/Greeter'
import { useState } from 'react'

import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import { v4 as getId } from 'uuid'
import './App.css'



function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log("Made to the app component!")
    console.log(product)
    setItems([...items, {
        id: getId(), product, quantity
      }
    ])
  }
  
  return (
    <>
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </>
  )
}

export default App



// =========================================================
// function func<T>(x: T): T{
//   return x;
// }

// // Generic arrow functions with comma
// const func = <T,>(x: T): T => {
//   return x;
// }
// =========================================================
