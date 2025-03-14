import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value);
  };


  const handleAddItem = () => {
    if (newItem) {
      if (items.some((item) => item.text === newItem)) {
        alert('ERROR! The item/text is already exists in the list!');
      } else {
        setItems([...items, { text: newItem, isInFinalList: false }]);
        setNewItem('');
      }
    }
  };

  const handleItemMove = (item) => {
    const updatedItems = items.map((i) =>
      i.text === item.text ? { ...i, isInFinalList: !i.isInFinalList } : i
    );
    setItems(updatedItems);
  };

  return (
    <div >
      <div className='flex align-center justify-between px-2 py-5 w-[50%] mx-auto bg-contact-yellow border text-center mt-10
      '>
        <div className='w-[40%]'>
      <h1 className='text-black text-2xl font-semibold font-freight capitalize '>Todo List</h1>
      <p className='text-black text-xs font-freight capitalize'>
        enter a new item into to do list! 
      </p>
        </div>
      <div className='w-[40%]'>
        <input className='border py-2 px-2 w-[80%]' type="text" value={newItem} onChange={handleNewItemChange} />
        <button className='bg-black py-2 px-2 text-white  font-semibold font-freight  rounded-r' onClick={handleAddItem}>Add</button>
      </div>
      </div>
      
      <div className='bg-contact-yellow border w-[50%] mx-auto mt-10 text-center py-5 px-2'>
        <h2 className='font-semibold font-freight text-2xl '>Initial List</h2>
        <ul>
          {items.map((item, index) => (
            <li className='font-semibold font-freight text-center py-2' key={index}>
              <input className='w-[5%]'
                type="checkbox"
                checked={item.isInFinalList}
                onChange={() => handleItemMove(item)}
              />
              {item.text}{' '}
              
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-contact-yellow border w-[50%] mx-auto mt-10 text-center py-5 px-2'>
        <h2 className='font-semibold font-freight text-2xl ' >Final List</h2>
        <ul>
          {items
            .filter((item) => item.isInFinalList)
            .map((item, index) => (
              <li className='font-semibold font-freight text-center py-2' key={index}>{item.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
