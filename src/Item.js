import React from "react";

const Item = ({ item, setItems ,handleDeleteItem}) => {
  const handlePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
 
         
  return (
    <>
      {item.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handlePacked(item.id)}
          />
          <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
            {item.quantity} {item.description}
          </span>
              <button onClick={()=>handleDeleteItem(item.id)} >❌</button>
        </li>
      ))}
    </>
  );
};

export default Item;
