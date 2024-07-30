import React from "react";

const Stats = ({ items }) => {
  const numItem = items.length;
  const numItemComblet = items.filter((item) => item.packed).length;
  const percent = Math.round( (numItemComblet / numItem) * 100);
  return (
      <footer className="stats" >
          {numItem=== 0 ? (<em>Start adding some items to your packing list 🚀</em>):
      (percent === 100? (
        <em> you got everthing Ready to go ✈️ </em>
      ) : (
        <em>
         {`💼 You have ${numItem} item on your list , and you already packed ${numItemComblet}  (${percent}%)`}{" "}
        </em>
      ))}
    </footer>
  );
};

export default Stats;
