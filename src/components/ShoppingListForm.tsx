import { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log("Submitted!")
    // console.log(inputRef.current?.value)
    const newProduct = productInputRef.current!.value;
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = '';
    quantityInputRef.current!.value = '';
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef}/>
      <input type="number" min={0} defaultValue={1} placeholder="Quantity" ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  )
}