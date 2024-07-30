import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";


const App = () => {
  const [items, setItems] = useState([]);
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);
  function handelsumet(e) {
    e.preventDefault();
    const newitem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    setItems((items) => [...items, newitem]);
    setdescription("");
    setquantity(1);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCluer() {
    setItems([]);
  }
  // function handleAddItem(newitem) {
  //   setItems((items) => [...items, newitem]);
  // }
  return (
    <div className="app">
      <Header />
      <Form
        items={items}
        description={description}
        setdescription={setdescription}
        quantity={quantity}
        setquantity={setquantity}
        handelsumet={handelsumet}
      />
      <List
        items={items}
        setItems={setItems}
        handleDeleteItem={handleDeleteItem}
        handleCluer={handleCluer}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
