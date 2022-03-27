import React from "react";
import Image from './components/Image'
import Display from './components/Display'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import InlineEdit from "./components/InlineEdit";
import { useState } from 'react'
import { EditText } from "react-edit-text";

const App = () => {
    const [Title, setCurrentTitle] = useState('Burger')
    const itemList = [{
        id : 1,
        image : 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg', 
        Title : Title,
        Description : 'Delicious Hamburger with beef, tomato, onion, and cheese.',
        Price : 3
    }]
    const [items, updateItemList] = useState(itemList)
    const [newImage, setNewImage] = useState('enter image url')
    const [newTitle, setNewTitle] = useState('enter title')
    const [newDescription, setNewDescription] = useState('enter description')
    const [newPrice, setNewPrice] = useState('enter price')
    const addItem = (event) => {
        event.preventDefault()
        const itemObject = {
          id: items.length + 1,
          image : newImage,
          Title : newTitle,
          Description : newDescription,
          Price : newPrice,
        }
      
        updateItemList(items.concat(itemObject))
        setNewImage('enter image url')
        setNewTitle('enter title')
        setNewDescription('enter description')
        setNewPrice('enter price')
      }
      const handleImageChange = (event) => {
        setNewImage(event.target.value)
      }
      const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
      }
      const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value)
      }
      const handlePriceChange = (event) => {
        setNewPrice(event.target.value)
      }
      const [open, setOpen] = React.useState(false)

      const [itemId, setNewItemId] = useState("which item: 1,2, 3...?")
      
      const handleClickToOpen = () => {
          setOpen(true);
      }
      const handleToCloseYes = (event) => {
          setOpen(false);
          updateItemList(items.filter(item => item.id != itemId))
          setNewItemId('which item: 1, 2, 3...?') 
      }
      const handleToCloseNo = () => {
          setOpen(false);
          setNewItemId('which item: 1, 2, 3...?')  
      }
      const handleFormSubmission = (event) => {
          event.preventDefault()  
      }
      const handleitemNameChange = (event) => {
          setNewItemId(event.target.value)
      }
    return (
        <div>
            <h1>Menu</h1>
            {items.map(item =>
                <Display key = {item.id} item = {item} />)}    
        <form onSubmit = {addItem}>
            <input
            value = {newImage}
            onChange = {handleImageChange}
            />
            <input
            value = {newTitle}
            onChange = {handleTitleChange}
            />
            <input
            value = {newDescription}
            onChange = {handleDescriptionChange}
            />
            <input
            value = {newPrice}
            onChange = {handlePriceChange}
            />
            <button type="submit">add item</button>
        </form>
        <form onSubmit = {handleFormSubmission}>
            <input
            value = {itemId} onChange = {handleitemNameChange} />
        <button onClick={handleClickToOpen}>
        Delete
        </button>
        </form>
        <Dialog open={open} onClose={handleToCloseNo}>
        <DialogTitle>{"Are you sure you want to delete this item?"}</DialogTitle>
        <DialogActions>
        <button onClick={handleToCloseYes}>
            Yes
        </button>
        <button onClick={handleToCloseNo}>
            No
        </button>
        </DialogActions>
        </Dialog>
        </div>
        
    )
}
export default App