import React, { useState } from "react";
import Item from "./Item";

const List = ({ items, setItems, handleDeleteItem, handleCluer }) => {
  const [stor, setstor] = useState("input");
  let storBy;
  if (stor === "input") storBy = items;
  if (stor === "description") storBy = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if(stor=== "packed") storBy = items.slice().sort((a, b) => Number(a.packed)-Number(b.packed));

  return (
    <div className="list">
      <ul>
        <Item
          item={storBy}
          setItems={setItems}
          handleDeleteItem={handleDeleteItem}
        />
      </ul>
      <div className="actions">
        <select value={stor} onChange={(e) => setstor(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleCluer}>Clear list</button>
      </div>
    </div>
  );
};

export default List;
