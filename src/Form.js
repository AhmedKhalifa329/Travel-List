import React from "react";

const Form = ({ handelsumet, handleAddItem ,setdescription ,description  ,setquantity,quantity}) => {
 
  return (
    <form className="add-form" onSubmit={handelsumet}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
